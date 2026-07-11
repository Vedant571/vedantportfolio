# Plan: Contact Form → Gmail Inbox

## Goal
When a visitor submits the contact form on your portfolio, you receive the details as an email in your Gmail inbox.

## Tool / approach
Use Lovable's **Gmail connector**. It sends email through your own Gmail account, so messages land directly in your inbox with the visitor's name, email, subject, and message.

## Implementation steps

1. **Connect Gmail**
   - Link your Gmail account to the project via the Gmail connector.
   - Grant the `gmail.send` scope so the app can send messages on your behalf.

2. **Create a server function**
   - Add a TanStack server function (e.g. `src/lib/contact.functions.ts`) that:
     - Validates the form payload with Zod (name, email, subject, message).
     - Builds an RFC 2822 email with the visitor's details.
     - Sends it through the Gmail connector gateway (`https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send`).
     - Returns `{ success: true }` or surfaces the provider error.

3. **Update the contact form**
   - In `src/components/portfolio/Contact.tsx`:
     - Replace the fake `setSent(true)` handler with a real submit that calls the server function.
     - Add `useState` for loading, success, and error states.
     - Keep the existing visual style and animation.
     - Show a success confirmation and a fallback error message.

4. **Verify**
   - Run a test submission through the preview.
   - Confirm the email arrives in your Gmail inbox.

## What you'll need
- Access to the Gmail account where you want to receive submissions.
- A few minutes to complete the OAuth connection when prompted.

## Notes
- The Gmail connector sends from your connected Gmail address, so replies go straight back to the visitor.
- No third-party email domain or Lovable Cloud email setup is required for this approach.
- Form submissions are not stored in a database unless you later add that separately.