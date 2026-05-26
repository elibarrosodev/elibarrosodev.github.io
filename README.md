# Eli Portfolio — Vercel Contact Form

A clean architecture Next.js portfolio converted from the provided HTML design.

## Structure

```txt
app/
  page.tsx                  # route only
  api/contact/route.ts      # API endpoint only
src/
  presentation/             # UI components and hooks
  application/              # use cases
  domain/                   # validation and types
  infrastructure/           # email provider implementation
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

3. Add your Resend API key and receiver email:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

4. Run locally:

```bash
npm run dev
```

5. Deploy to Vercel:

- Push this folder to GitHub.
- Import the repository in Vercel.
- Add the same environment variables in Vercel Project Settings.
- Deploy.

## Notes

- The contact form posts to `/api/contact`.
- The API route calls the application use case.
- The use case validates the message before calling the email service.
- Replace the visible contact email/social links in `src/config/siteContent.ts` when ready.
