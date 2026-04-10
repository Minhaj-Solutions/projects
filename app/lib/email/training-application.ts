import type { TrainingApplicationInput } from "@/app/lib/training-application";
import {
  TRAINING_PROJECT_OPTIONS,
  TRAINING_START_LABEL,
  TRAINING_VENUE,
} from "@/data/training-program";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const qualLabel: Record<string, string> = {
  matric: "Matric",
  intermediate: "Intermediate",
  bachelor: "Bachelor",
  master: "Master",
  other: "Other",
};

const levelLabel: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const timingLabel: Record<string, string> = {
  morning: "Morning",
  evening: "Evening",
  weekend: "Weekend",
};

const yn = (v: string) => (v === "yes" ? "Yes" : "No");

function projectLabels(ids: string[]): string {
  const map = new Map<string, string>(
    TRAINING_PROJECT_OPTIONS.map((p) => [p.id, p.label]),
  );
  return ids.map((id) => map.get(id) ?? id).join(", ");
}

export function buildTrainingApplicationText(
  data: TrainingApplicationInput,
  submittedAtIso: string,
): string {
  const lines = [
    `New training application — ${data.courseTitle}`,
    `Submitted (UTC): ${submittedAtIso}`,
    `Program start: ${TRAINING_START_LABEL} | Venue: ${TRAINING_VENUE}`,
    "",
    "=== Personal ===",
    `Full name: ${data.fullName}`,
    `Father / guardian: ${data.fatherName}`,
    `Date of birth: ${data.dateOfBirth}`,
    `Gender: ${data.gender}`,
    `CNIC / B-Form: ${data.cnic}`,
    `Phone (WhatsApp): ${data.phone}`,
    `Email: ${data.email}`,
    `City: ${data.city}`,
    `Address: ${data.address}`,
    "",
    "=== Education ===",
    `Last qualification: ${qualLabel[data.qualification] ?? data.qualification}${data.qualification === "other" && data.qualificationOther ? ` (${data.qualificationOther})` : ""}`,
    `Field of study: ${data.fieldOfStudy}`,
    `Institute / university: ${data.institute}`,
    `Passing year: ${data.passingYear}`,
    `Computer knowledge: ${levelLabel[data.computerLevel] ?? data.computerLevel}`,
    "",
    "=== Course ===",
    `Course: ${data.courseTitle}`,
    `Preferred timing: ${data.preferredTiming.map((t) => timingLabel[t] ?? t).join(", ")}`,
    `Mode: ${data.mode === "physical" ? "Physical (on-campus)" : "Online (live classes)"}`,
    "",
    "=== Technical background ===",
    `Python: ${yn(data.knowsPython)}`,
    `Programming: ${yn(data.knowsProgramming)}`,
    `Laptop: ${yn(data.hasLaptop)}`,
    `Internet access: ${yn(data.hasInternet)}`,
    "",
    "Why join:",
    data.whyJoin,
    "",
    "=== Project interests ===",
    projectLabels(data.projects),
    "",
    "=== Declaration ===",
    `Electronic signature (typed): ${data.typedSignature}`,
    "Confirmations: information correct — yes; rules & discipline — yes.",
  ];
  return lines.join("\n");
}

export function buildTrainingApplicationHtml(
  data: TrainingApplicationInput,
  submittedAtIso: string,
): string {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:38%;">${esc(k)}</td><td style="padding:6px 12px;border:1px solid #e5e7eb;">${esc(v)}</td></tr>`;

  const section = (title: string, inner: string) => `
  <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;margin-bottom:20px;border-collapse:collapse;font-family:Inter,Segoe UI,sans-serif;font-size:14px;color:#111827;">
    <tr><td style="background:#0c4d75;color:#fff;padding:10px 14px;font-weight:700;border-radius:8px 8px 0 0;">${esc(title)}</td></tr>
    <tr><td style="padding:0;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
      <table style="width:100%;border-collapse:collapse;">${inner}</table>
    </td></tr>
  </table>`;

  const qual =
    (qualLabel[data.qualification] ?? data.qualification) +
    (data.qualification === "other" && data.qualificationOther
      ? ` (${data.qualificationOther})`
      : "");

  const personal =
    row("Full name", data.fullName) +
    row("Father / guardian", data.fatherName) +
    row("Date of birth", data.dateOfBirth) +
    row("Gender", data.gender) +
    row("CNIC / B-Form", data.cnic) +
    row("Phone (WhatsApp)", data.phone) +
    row("Email", data.email) +
    row("City", data.city) +
    row("Address", data.address);

  const edu =
    row("Last qualification", qual) +
    row("Field of study", data.fieldOfStudy) +
    row("Institute / university", data.institute) +
    row("Passing year", data.passingYear) +
    row(
      "Computer knowledge",
      levelLabel[data.computerLevel] ?? data.computerLevel,
    );

  const course =
    row("Course", data.courseTitle) +
    row(
      "Preferred timing",
      data.preferredTiming.map((t) => timingLabel[t] ?? t).join(", "),
    ) +
    row(
      "Mode",
      data.mode === "physical"
        ? "Physical (on-campus)"
        : "Online (live classes)",
    );

  const tech =
    row("Python?", yn(data.knowsPython)) +
    row("Programming?", yn(data.knowsProgramming)) +
    row("Laptop?", yn(data.hasLaptop)) +
    row("Internet access?", yn(data.hasInternet)) +
    `<tr><td colspan="2" style="padding:6px 12px;border:1px solid #e5e7eb;vertical-align:top;"><strong>Why join?</strong><br/><span style="white-space:pre-wrap;">${esc(data.whyJoin)}</span></td></tr>`;

  const projectsHtml = row("Selected projects", projectLabels(data.projects));

  const decl =
    row("Electronic signature (typed)", data.typedSignature) +
    row("Confirm information correct", "Yes") +
    row("Agree to rules & discipline", "Yes");

  const meta = `
  <p style="font-family:Inter,Segoe UI,sans-serif;font-size:13px;color:#6b7280;margin:0 0 16px;">
    <strong>Submitted (UTC):</strong> ${esc(submittedAtIso)}<br/>
    <strong>Program start:</strong> ${esc(TRAINING_START_LABEL)} &nbsp;|&nbsp; <strong>Venue:</strong> ${esc(TRAINING_VENUE)}
  </p>`;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="margin:16px;background:#f3f4f6;">
${meta}
${section("Personal information", personal)}
${section("Educational information", edu)}
${section("Course", course)}
${section("Technical background", tech)}
${section("Project interests", projectsHtml)}
${section("Declaration", decl)}
</body></html>`;
}
