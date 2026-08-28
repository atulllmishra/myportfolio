import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addContactSubmission } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, countryCode, phone, subject, message, honeypot, website_hp } = body;

    // Honeypot check: If bot filled hidden field, return success silently without doing anything
    if (honeypot || website_hp) {
      return NextResponse.json({
        success: true,
        message: "Message processed successfully.",
      });
    }

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const fullPhone = phone ? `${countryCode || "+91"} ${phone}` : "Not provided";
    const userAgent = request.headers.get("user-agent") || undefined;
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    // Persist contact message to database
    const savedRecord = addContactSubmission({
      name,
      email,
      phone: fullPhone,
      subject: subject || "General Inquiry",
      message,
      ip,
      userAgent,
    });

    const user = (process.env.GMAIL_USER || process.env.EMAIL_USER || "").trim();
    const pass = (process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS || "").replace(/\s+/g, "").trim();
    const targetEmail = (process.env.CONTACT_RECEIVER_EMAIL || "atulllmishra1@gmail.com").trim();

    // If credentials are not yet configured in environment variables
    if (!user || !pass) {
      console.warn(
        "⚠️ [API /api/contact]: GMAIL_USER or GMAIL_APP_PASSWORD environment variables are not defined in .env.local!"
      );

      return NextResponse.json({
        success: true,
        savedToDatabase: true,
        recordId: savedRecord.id,
        mockEmail: true,
        message: "Your message has been saved into the database! Configure GMAIL_USER & GMAIL_APP_PASSWORD in .env.local to enable email forwarding.",
      });
    }

    // Configure Nodemailer Transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name} (Portfolio Contact)" <${user}>`,
      to: targetEmail,
      replyTo: email,
      subject: subject
        ? `[Portfolio Contact] ${subject}`
        : `[Portfolio Contact] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${fullPhone}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #1e2638; background-color: #0b0f17; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #60a5fa; margin-top: 0; border-bottom: 1px solid #1e2638; padding-bottom: 10px;">
            📬 New Portfolio Message
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold; width: 100px;">From:</td>
              <td style="padding: 8px 0; color: #ffffff;">${name} (&lt;<a href="mailto:${email}" style="color: #60a5fa;">${email}</a>&gt;)</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Phone / Mobile:</td>
              <td style="padding: 8px 0; color: #ffffff;">${fullPhone !== "Not provided" ? `<a href="tel:${fullPhone.replace(/\s+/g, '')}" style="color: #38bdf8;">${fullPhone}</a>` : "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0; color: #ffffff;">${subject || "No Subject"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Database ID:</td>
              <td style="padding: 8px 0; color: #a7f3d0; font-family: monospace;">${savedRecord.id}</td>
            </tr>
          </table>
          <div style="background-color: #161e2e; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <h4 style="margin-top: 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message:</h4>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #f1f5f9; margin-bottom: 0;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #1e2638; margin: 20px 0;" />
          <p style="font-size: 11px; color: #64748b; text-align: center;">
            This message was saved into your database and sent automatically from your Portfolio contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      savedToDatabase: true,
      recordId: savedRecord.id,
      message: "Message saved and email dispatched successfully!",
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("❌ Error processing /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: err?.message || "Failed to process message.",
      },
      { status: 500 }
    );
  }
}
