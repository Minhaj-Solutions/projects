/**
 * Training application submission via SMTP (Nodemailer).
 *
 * Required env (set in hosting / .env.local):
 * - SMTP_HOST, SMTP_PORT (e.g. 587 or 465)
 * - SMTP_SECURE — "true" for 465, often "false" for 587 STARTTLS
 * - SMTP_USER, SMTP_PASS
 * - EMAIL_FROM — From address (must be allowed by your SMTP provider)
 * - APPLICATION_TO — Recipient inbox for applications
 */

import {
  buildTrainingApplicationHtml,
  buildTrainingApplicationText,
} from "@/app/lib/email/training-application";
import {
  trainingApplicationSchema,
  type TrainingApplicationInput,
} from "@/app/lib/training-application";
import { TRAINING_COURSE_TITLE } from "@/data/training-program";
import nodemailer from "nodemailer";
import { ZodError } from "zod";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_MIME = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
]);

function getStr(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v : "";
}

function getBool(formData: FormData, key: string): boolean {
  const v = formData.get(key);
  return v === "true" || v === "on";
}

function parseFormData(
  formData: FormData,
):
  | { ok: true; data: TrainingApplicationInput }
  | { ok: false; error: ZodError } {
  const preferredTiming = formData
    .getAll("preferredTiming")
    .filter((v): v is string => typeof v === "string") as (
    | "morning"
    | "evening"
    | "weekend"
  )[];

  const projects = formData
    .getAll("projects")
    .filter((v): v is string => typeof v === "string");

  const raw = {
    fullName: getStr(formData, "fullName"),
    fatherName: getStr(formData, "fatherName"),
    dateOfBirth: getStr(formData, "dateOfBirth"),
    gender: getStr(formData, "gender"),
    cnic: getStr(formData, "cnic"),
    phone: getStr(formData, "phone"),
    email: getStr(formData, "email"),
    city: getStr(formData, "city"),
    address: getStr(formData, "address"),
    qualification: getStr(formData, "qualification"),
    qualificationOther: getStr(formData, "qualificationOther"),
    fieldOfStudy: getStr(formData, "fieldOfStudy"),
    institute: getStr(formData, "institute"),
    passingYear: getStr(formData, "passingYear"),
    computerLevel: getStr(formData, "computerLevel"),
    courseTitle: getStr(formData, "courseTitle") || TRAINING_COURSE_TITLE,
    preferredTiming,
    mode: getStr(formData, "mode"),
    knowsPython: getStr(formData, "knowsPython"),
    knowsProgramming: getStr(formData, "knowsProgramming"),
    hasLaptop: getStr(formData, "hasLaptop"),
    hasInternet: getStr(formData, "hasInternet"),
    whyJoin: getStr(formData, "whyJoin"),
    projects,
    confirmInfo: getBool(formData, "confirmInfo"),
    confirmRules: getBool(formData, "confirmRules"),
    typedSignature: getStr(formData, "typedSignature"),
  };

  const parsed = trainingApplicationSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error };
  }
  return { ok: true, data: parsed.data };
}

async function validateOptionalFile(
  file: File | null,
): Promise<{ ok: true } | { ok: false; message: string }> {
  if (!file || file.size === 0) {
    return { ok: true };
  }
  if (file.size > MAX_FILE_BYTES) {
    return { ok: false, message: `File "${file.name}" exceeds 10 MB limit` };
  }
  const type = file.type.toLowerCase();
  if (!ALLOWED_MIME.has(type)) {
    return {
      ok: false,
      message: `File "${file.name}" must be PDF, JPG, or PNG`,
    };
  }
  return { ok: true };
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json(
      { ok: false, message: "Invalid form data" },
      { status: 400 },
    );
  }

  const trap = formData.get("website");
  if (typeof trap === "string" && trap.trim() !== "") {
    return Response.json({ ok: true });
  }

  const uploadCv = formData.get("uploadCv");
  const uploadCnic = formData.get("uploadCnic");
  const uploadDegree = formData.get("uploadDegree");

  for (const f of [uploadCv, uploadCnic, uploadDegree]) {
    const file = f instanceof File ? f : null;
    const check = await validateOptionalFile(file);
    if (!check.ok) {
      return Response.json(
        { ok: false, message: check.message },
        { status: 400 },
      );
    }
  }

  const parsed = parseFormData(formData);
  if (!parsed.ok) {
    const msg = parsed.error.issues.map((i) => i.message).join("; ");
    return Response.json({ ok: false, message: msg }, { status: 400 });
  }

  const data = parsed.data;
  const submittedAtIso = new Date().toISOString();

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.EMAIL_FROM;
  const to = process.env.APPLICATION_TO;

  if (!host || !port || !user || !pass || !from || !to) {
    console.error("training-application: missing SMTP env configuration");
    return Response.json(
      {
        ok: false,
        message: "Application email is not configured. Please try again later.",
      },
      { status: 503 },
    );
  }

  const secure =
    process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "1";

  const transporter = nodemailer.createTransport({
    host,
    port: Number.parseInt(port, 10),
    secure,
    auth: { user, pass },
  });

  const html = buildTrainingApplicationHtml(data, submittedAtIso);
  const text = buildTrainingApplicationText(data, submittedAtIso);

  const attachments: {
    filename: string;
    content: Buffer;
    contentType?: string;
  }[] = [];

  const pushFile = async (
    field: FormDataEntryValue | null,
    fallback: string,
  ) => {
    if (field instanceof File && field.size > 0) {
      const buf = Buffer.from(await field.arrayBuffer());
      attachments.push({
        filename: field.name || fallback,
        content: buf,
        contentType: field.type || undefined,
      });
    }
  };

  await pushFile(uploadCv, "cv.pdf");
  await pushFile(uploadCnic, "cnic.pdf");
  await pushFile(uploadDegree, "degree.pdf");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `[Training Application] ${data.fullName} — ${TRAINING_COURSE_TITLE}`,
      text,
      html,
      attachments: attachments.length ? attachments : undefined,
    });
  } catch (e) {
    console.error("training-application: sendMail failed", e);
    return Response.json(
      {
        ok: false,
        message:
          "We could not send your application. Please try again or contact us by phone.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
