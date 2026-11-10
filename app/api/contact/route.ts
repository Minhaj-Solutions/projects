
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      businessEmail,
      company,
      jobTitle,
      phone,
      location,
      message,
      consent,
    } = body;

    // Required fields validation
    if (
      typeof firstName !== "string" ||
      !firstName.trim() ||
      typeof lastName !== "string" ||
      !lastName.trim() ||
      typeof businessEmail !== "string" ||
      !businessEmail.trim() ||
      typeof company !== "string" ||
      !company.trim() ||
      typeof jobTitle !== "string" ||
      !jobTitle.trim() ||
      typeof location !== "string" ||
      !location.trim() ||
      consent !== true
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide all required fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(businessEmail.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // SMTP configuration
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_EMAIL_FROM,
      CONTACT_FORM_TO,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_EMAIL_FROM ||
      !CONTACT_FORM_TO
    ) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Our contact email service is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const fullName = `${firstName.trim()} ${lastName.trim()}`;

    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(businessEmail.trim());
    const safeCompany = escapeHtml(company.trim());
    const safeJobTitle = escapeHtml(jobTitle.trim());
    const safePhone = escapeHtml(
      typeof phone === "string" ? phone : "Not provided"
    );
    const safeLocation = escapeHtml(location.trim());
    const safeMessage = escapeHtml(
      typeof message === "string" && message.trim()
        ? message
        : "No message provided"
    ).replace(/\n/g, "<br>");

    await transporter.sendMail({
      from: {
        name: "Minhaj Solutions",
        address: CONTACT_EMAIL_FROM,
      },
      to: CONTACT_FORM_TO,
      replyTo: businessEmail.trim(),
      subject: `New Contact Inquiry from ${fullName}`,
      text: `
New Contact Form Submission

Name: ${fullName}
Business Email: ${businessEmail}
Company: ${company}
Job Title: ${jobTitle}
Phone: ${phone || "Not provided"}
Location: ${location}

Message:
${message || "No message provided"}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Business Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Job Title:</strong> ${safeJobTitle}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Location:</strong> ${safeLocation}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
