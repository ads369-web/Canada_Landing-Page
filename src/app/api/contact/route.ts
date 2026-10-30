import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, preferredTime, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Vancouver Spiritual Center <noreply@worlddivinelight.org>",
        to: "info-can@worlddivinelight.org",
        replyTo: email,
        subject: `[Canada Dojo] New Session Request from ${name}`,
        html: `
          <h2>New Session Request - Vancouver Spiritual Center</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Preferred Date/Time:</strong> ${preferredTime || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "No special requests.").replace(/\n/g, "<br>")}</p>
        `,
      });
    } else {
      // In development / local testing without Resend key, log request
      console.log("Contact Request Received:", { name, email, phone, preferredTime, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
