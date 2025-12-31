import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map();
const WINDOW_MS = 5 * 60 * 1000;

export async function POST(req) {
  try {
    // ---- RATE LIMIT ----
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    if (lastRequest && now - lastRequest < WINDOW_MS) {
      const remaining = Math.ceil(
        (WINDOW_MS - (now - lastRequest)) / 1000
      );

      return NextResponse.json(
        {
          success: false,
          error: `Too many requests. Try again in ${remaining}s.`,
        },
        { status: 429 }
      );
    }

    rateLimitMap.set(ip, now);
    // --------------------

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Message from ${name}`,
      text: `
From: ${name}
Email: ${email}

${message}
`,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
