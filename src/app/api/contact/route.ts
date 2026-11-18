import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, preferredTime, message, language } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromAddress =
        process.env.RESEND_FROM_EMAIL ||
        "Vancouver Spiritual Center <noreply@la.worlddivinelight.org>";
      const toAddress =
        process.env.CONTACT_TO_EMAIL || "info-can@worlddivinelight.org";

      const { data, error } = await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        replyTo: email,
        subject: `[Canada Dojo] New Session Request from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2B2522; line-height: 1.6;">
            <div style="background-color: #810D41; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; font-size: 20px;">Vancouver Spiritual Center - New Session Request</h2>
              <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">World Divine Light (Canada)</p>
            </div>
            <div style="background-color: #FDF4EC; padding: 24px; border: 1px solid #EADFD5; border-top: none; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 140px; font-weight: bold; color: #524B47;">Name:</td>
                  <td style="padding: 8px 0; font-size: 16px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #524B47;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #810D41;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #524B47;">Phone:</td>
                  <td style="padding: 8px 0;">${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #524B47;">Preferred Time:</td>
                  <td style="padding: 8px 0;">${preferredTime || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #524B47;">Language:</td>
                  <td style="padding: 8px 0;">${language === "ja" ? "日本語 (Japanese)" : "English"}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #EADFD5;">
                <p style="margin: 0 0 8px; font-weight: bold; color: #524B47;">Questions or Notes:</p>
                <div style="background-color: white; padding: 12px 16px; border-radius: 6px; border: 1px solid #EADFD5; white-space: pre-wrap;">
                  ${message ? message.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "No additional notes provided."}
                </div>
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #8C827A; text-align: center;">
                Reply directly to this email to respond to ${name} (${email}).
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend send error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, id: data?.id });
    } else {
      // In development / local testing without Resend key, log request
      console.log("Contact Request Received (No RESEND_API_KEY):", {
        name,
        email,
        phone,
        preferredTime,
        message,
        language,
      });
      return NextResponse.json({ success: true, mocked: true });
    }
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
