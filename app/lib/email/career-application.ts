
import type { CareerApplicationInput } from "@/app/lib/career-application";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:35%;">
        ${esc(label)}
      </td>
      <td style="padding:10px 12px;border:1px solid #e5e7eb;">
        ${esc(value || "Not provided")}
      </td>
    </tr>
  `;
}

function section(title: string, content: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0"
      style="width:100%;max-width:640px;margin-bottom:22px;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#111827;">
      <tr>
        <td style="background:#0c4d75;color:#ffffff;padding:12px 14px;font-weight:700;">
          ${esc(title)}
        </td>
      </tr>
      <tr>
        <td style="border:1px solid #e5e7eb;padding:0;">
          <table style="width:100%;border-collapse:collapse;">
            ${content}
          </table>
        </td>
      </tr>
    </table>
  `;
}

export function buildCareerApplicationText(
  data: CareerApplicationInput,
  positionTitle: string,
  submittedAt: string,
): string {
  return [
    "NEW CAREER APPLICATION",
    "Minhaj Solutions",
    "",
    `Position: ${positionTitle}`,
    `Submitted: ${submittedAt}`,
    "",
    "PERSONAL INFORMATION",
    `Full Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    "",
    "PROFESSIONAL INFORMATION",
    `Education: ${data.education}`,
    `Experience: ${data.experience}`,
    `LinkedIn: ${data.linkedin || "Not provided"}`,
    `Portfolio: ${data.portfolio || "Not provided"}`,
    "",
    "COVER LETTER",
    data.coverLetter,
    "",
    "CV: Attached as PDF",
  ].join("\n");
}

export function buildCareerApplicationHtml(
  data: CareerApplicationInput,
  positionTitle: string,
  submittedAt: string,
): string {
  const personal =
    row("Full Name", data.fullName) +
    row("Email Address", data.email) +
    row("Phone Number", data.phone);

  const professional =
    row("Education", data.education) +
    row("Experience", data.experience) +
    row("LinkedIn Profile", data.linkedin) +
    row("Portfolio / Website", data.portfolio);

  const coverLetter = `
    <tr>
      <td style="padding:14px;border:1px solid #e5e7eb;white-space:pre-wrap;line-height:1.7;">
        ${esc(data.coverLetter)}
      </td>
    </tr>
  `;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
      </head>
      <body style="margin:0;padding:24px;background:#f3f4f6;">
        <div style="max-width:640px;margin:0 auto;">
          <div style="background:#0c4d75;color:#ffffff;padding:24px;border-radius:8px 8px 0 0;font-family:Arial,sans-serif;">
            <h2 style="margin:0 0 8px;">New Career Application</h2>
            <p style="margin:0;color:#e6f0f7;">Minhaj Solutions</p>
          </div>

          <div style="background:#ffffff;padding:22px;">
            <p style="font-family:Arial,sans-serif;font-size:14px;line-height:1.7;">
              <strong>Applied Position:</strong> ${esc(positionTitle)}<br/>
              <strong>Submitted:</strong> ${esc(submittedAt)}
            </p>

            ${section("Personal Information", personal)}
            ${section("Professional Information", professional)}
            ${section("Cover Letter", coverLetter)}

            <p style="font-family:Arial,sans-serif;font-size:13px;color:#6b7280;">
              Applicant CV is attached as a PDF file.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}
