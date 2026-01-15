# Fuel and Fire Mobile Mechanic (Next.js 14+ / App Router)

Modern, mobile-first marketing site for a sole-proprietor mobile mechanic in Mableton, Georgia.

## Setup

Install dependencies:

```bash
npm i
```

Run dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact form

The contact form is wired with **React Hook Form** and currently uses a placeholder submit (logs to console).

To connect email delivery later, recommended options:
- EmailJS (client-side)
- Resend / Postmark (server action or API route)

## Playwright (visual verification)

Install browsers (one-time):

```bash
npx playwright install
```

Generate responsive screenshots (requires dev server running):

```bash
npm run screenshots
```

Screenshots save to `playwright-output/`.

## Deployment

Deploy on Vercel:
- Push to GitHub
- Import the repo in Vercel
- Build command: `npm run build`
- Output: Next.js default

## Project structure

- `app/page.tsx`: Home (composed of all sections)
- `components/`: Nav, Hero, Services, About, Testimonials, ContactForm, FAQ, Footer
- `lib/`: small helpers + site constants
- `public/`: `logo.svg` and static assets
