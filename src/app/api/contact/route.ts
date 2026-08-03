import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, countryCode, phone, subject, message } = body;

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

    const user = (process.env.GMAIL_USER || process.env.EMAIL_USER || "").trim();
    const pass = (process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS || "").replace(/\s+/g, "").trim();
    const targetEmail = (process.env.CONTACT_RECEIVER_EMAIL || "atulllmishra1@gmail.com").trim();

    // If credentials are not yet configured in environment variables
    if (!user || !pass) {
      console.warn(
        "⚠️ [API /api/contact]: GMAIL_USER or GMAIL_APP_PASSWORD environment variables are not defined in .env.local!"
      );
      
      // In development mode, return mock success with warning instructions
      if (process.env.NODE_ENV !== "production") {
        console.log("Mock Contact Form Submission Received:", { name, email, phone: fullPhone, subject, message });
        return NextResponse.json({
          success: true,
          mock: true,
          message: "Form received in demo/dev mode. Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local to send real emails.",
        });
      }

      return NextResponse.json(
        {
          success: false,
          error: "Server email service is not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local.",
        },
        { status: 500 }
      );
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
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Date:</td>
              <td style="padding: 8px 0; color: #ffffff;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <div style="background-color: #161e2e; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <h4 style="margin-top: 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message:</h4>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #f1f5f9; margin-bottom: 0;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #1e2638; margin: 20px 0;" />
          <p style="font-size: 11px; color: #64748b; text-align: center;">
            This email was sent automatically from your Portfolio contact form. You can directly reply to this email to reach <strong>${email}</strong>.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("❌ Error sending email via /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: err?.message || "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
