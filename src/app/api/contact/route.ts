import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const REQUIRED_ENV_VARS = ["SMTP_USER", "SMTP_PASS"] as const;

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  for (const key of REQUIRED_ENV_VARS) {
    if (!process.env[key]) {
      throw new Error(
        `Missing required environment variable ${key}. Update your .env.local with SMTP credentials.`,
      );
    }
  }

  const service = process.env.SMTP_SERVICE;
  if (service) {
    transporter = nodemailer.createTransport({
      service,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    return transporter;
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT) {
    throw new Error(
      "Provide either SMTP_SERVICE or both SMTP_HOST and SMTP_PORT in your environment configuration.",
    );
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

function validatePayload(payload: ContactPayload) {
  const { name, email, message } = payload;
  if (!name || !email || !message) {
    return "Name, email, and message are required.";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please provide a valid email address.";
  }
  if (message.length < 10) {
    return "Please include a bit more detail in your message.";
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const rawPayload = (await request.json()) as Partial<ContactPayload>;
    const payload = {
      name: String(rawPayload.name ?? "").trim(),
      email: String(rawPayload.email ?? "").trim(),
      message: String(rawPayload.message ?? "").trim(),
    };
    const error = validatePayload(payload);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const transporterInstance = getTransporter();
    const toEmail = process.env.CONTACT_TARGET_EMAIL ?? "shamantsai@gmail.com";

    await transporterInstance.sendMail({
      from: `"${payload.name}" <${process.env.SMTP_USER}>`,
      replyTo: payload.email,
      to: toEmail,
      subject: "New portfolio contact form submission",
      text: `Name: ${payload.name}
Email: ${payload.email}

${payload.message}`,
      html: `<p><strong>Name:</strong> ${payload.name}</p>
<p><strong>Email:</strong> ${payload.email}</p>
<p><strong>Message:</strong></p>
<p>${payload.message?.replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "We couldn't send your message because of a server error.",
      },
      { status: 500 },
    );
  }
}

