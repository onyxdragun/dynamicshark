import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Mailgun API config (replace with your domain and API key)
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL;

  if (!MAILGUN_DOMAIN || !MAILGUN_API_KEY || !TO_EMAIL) {
    return NextResponse.json({ error: "Mailgun config missing" }, { status: 500 });
  }

  const formData = new URLSearchParams();
  formData.append("from", `${name} <${email}>`);
  formData.append("to", TO_EMAIL);
  formData.append("subject", `DynamicShark Contact Form Submission`);
  formData.append("text", `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`);

  const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
