import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

function createRawEmail(
  to: string,
  fromName: string,
  fromEmail: string,
  subject: string,
  body: string,
): string {
  const email = [
    `To: ${to}`,
    `From: ${fromName} <${fromEmail}>`,
    `Reply-To: ${fromEmail}`,
    `Subject: [Portfolio Contact] ${subject}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    body,
  ].join("\r\n");
  return Buffer.from(email).toString("base64url");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const recipient = process.env.CONTACT_EMAIL || process.env.CONTACT_RECEIVER_EMAIL || "vdntmd@gmail.com";

    // 1. Resend API Integration
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact Form <onboarding@resend.dev>",
          to: [recipient],
          reply_to: data.email,
          subject: `[Portfolio Contact] ${data.subject}`,
          text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Resend API failed [${response.status}]: ${errorBody}`);
        throw new Error(`Failed to send message via Resend: ${response.status}`);
      }

      return { success: true };
    }

    // 2. Web3Forms API Integration
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsAccessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: data.name,
          email: data.email,
          subject: `[Portfolio Contact] ${data.subject}`,
          message: data.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Web3Forms API failed [${response.status}]: ${errorBody}`);
        throw new Error(`Failed to send message via Web3Forms: ${response.status}`);
      }

      return { success: true };
    }

    // 3. Lovable Gmail Gateway fallback
    const lovableApiKey = process.env.LOVABLE_API_KEY;
    const googleMailApiKey = process.env.GOOGLE_MAIL_API_KEY;

    if (lovableApiKey && googleMailApiKey) {
      const raw = createRawEmail(
        recipient,
        data.name,
        data.email,
        data.subject,
        data.message,
      );

      const response = await fetch(
        "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableApiKey}`,
            "X-Connection-Api-Key": googleMailApiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ raw }),
        },
      );

      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Gmail send failed [${response.status}]: ${errorBody}`);
        throw new Error(`Failed to send message via Gmail Gateway: ${response.status}`);
      }

      return { success: true };
    }

    console.error("No email service configured. Please configure RESEND_API_KEY or WEB3FORMS_ACCESS_KEY in your env/environment variables.");
    throw new Error("Email service is not configured. Please see .env.example to configure an email provider.");
  });
