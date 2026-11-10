
import nodemailer from "nodemailer";

import {
  careerApplicationSchema,
} from "@/app/lib/career-application";

import {
  buildCareerApplicationHtml,
  buildCareerApplicationText,
} from "@/app/lib/email/career-application";

import { opportunities } from "@/data/opportunities";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 5 * 1024 * 1024;

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Honeypot spam protection
    const website = getString(formData, "website");

    if (website.trim() !== "") {
      return Response.json({ ok: true });
    }

    // Find the selected opportunity
    const opportunitySlug = getString(formData, "opportunitySlug");

    const opportunity = opportunities.find(
      (item) => item.slug === opportunitySlug
    );

    if (!opportunity) {
      return Response.json(
        {
          ok: false,
          message: "The selected position is not available.",
        },
        { status: 400 }
      );
    }

    // Validate applicant information
    const rawData = {
      fullName: getString(formData, "fullName"),
      email: getString(formData, "email"),
      phone: getString(formData, "phone"),
      education: getString(formData, "education"),
      experience: getString(formData, "experience"),
      linkedin: getString(formData, "linkedin"),
      portfolio: getString(formData, "portfolio"),
      coverLetter: getString(formData, "coverLetter"),
      consent:
        getString(formData, "consent") === "true" ||
        getString(formData, "consent") === "on",
    };

    const parsed = careerApplicationSchema.safeParse(rawData);

    if (!parsed.success) {
      const message = parsed.error.issues
        .map((issue) => issue.message)
        .join("; ");

      return Response.json(
        { ok: false, message },
        { status: 400 }
      );
    }

    // Validate CV
    const cv = formData.get("cv");

    if (!(cv instanceof File) || cv.size === 0) {
      return Response.json(
        { ok: false, message: "Please upload your CV." },
        { status: 400 }
      );
    }

    if (cv.size > MAX_FILE_BYTES) {
      return Response.json(
        { ok: false, message: "CV file size must not exceed 5MB." },
        { status: 400 }
      );
    }

    if (cv.type !== "application/pdf") {
      return Response.json(
        { ok: false, message: "Only PDF CV files are allowed." },
        { status: 400 }
      );
    }

    // Verify actual PDF file signature
    const cvBuffer = Buffer.from(await cv.arrayBuffer());
    const pdfSignature = cvBuffer.subarray(0, 5).toString();

    if (pdfSignature !== "%PDF-") {
      return Response.json(
        { ok: false, message: "The uploaded file is not a valid PDF." },
        { status: 400 }
      );
    }

    // Careers SMTP configuration
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const from = process.env.CAREERS_EMAIL_FROM;
    const to = process.env.CAREERS_APPLICATION_TO;

    const secure =
      process.env.SMTP_SECURE === "true" ||
      process.env.SMTP_SECURE === "1";

    if (!host || !port || !user || !pass || !from || !to) {
      console.error("career-application: missing SMTP configuration");

      return Response.json(
        {
          ok: false,
          message: "Application email is not configured. Please try again later.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number.parseInt(port, 10),
      secure,
      auth: { user, pass },
    });

    const submittedAt = new Date().toISOString();
    const data = parsed.data;

    const html = buildCareerApplicationHtml(
      data,
      opportunity.title,
      submittedAt
    );

    const text = buildCareerApplicationText(
      data,
      opportunity.title,
      submittedAt
    );

    const safeFileName =
      cv.name.replace(/[^a-zA-Z0-9._-]/g, "_") || "applicant-cv.pdf";

    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `[Career Application] ${opportunity.title} — ${data.fullName}`,
      text,
      html,
      attachments: [
        {
          filename: safeFileName,
          content: cvBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    return Response.json({
      ok: true,
      message: "Your application has been submitted successfully.",
    });

  } catch (error) {
    console.error("career-application: submission failed", error);

    return Response.json(
      {
        ok: false,
        message: "Unable to submit your application. Please try again later.",
      },
      { status: 500 }
    );
  }
}
