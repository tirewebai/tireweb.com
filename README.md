# Tireweb Next.js Site

This is the Tireweb marketing site converted from Webflow to a standalone Next.js application. It is deployable to Vercel, Netlify, or Cloudflare Pages.

## Quick Start

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local with your SMTP credentials
npm run dev
```

Open http://localhost:3000 to view the site.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description | Example |
|---|---|---|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (587 for TLS, 465 for SSL) | `587` |
| `SMTP_USER` | SMTP login email | `your@gmail.com` |
| `SMTP_PASS` | SMTP password or app password | `xxxx xxxx xxxx xxxx` |
| `CONTACT_EMAIL_TO` | Where form submissions are delivered | `info@tireweb.com` |

**Gmail tip:** Use an [App Password](https://support.google.com/accounts/answer/185833) — not your regular password.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab
2. Import the repo in [Vercel](https://vercel.com)
3. Add the environment variables in Project Settings → Environment Variables
4. Deploy

## Deploying to Netlify

1. Push this repo to GitHub/GitLab
2. Connect the repo in [Netlify](https://netlify.com)
3. Add environment variables in Site Settings → Environment Variables
4. Deploy (netlify.toml is already configured)

## Forms

- **Contact Us** and **Schedule a Demo** forms POST to `/api/contact` which sends an email via SMTP.
- The **Newsletter** form submits directly to Mailchimp (no server-side changes needed).

## Project Structure

```
pages/              Next.js page components (one per Webflow HTML page)
pages/api/          API routes (contact.js for form email)
components/         Layout, Navbar
public/css/         Webflow CSS (normalize, webflow, site-specific)
public/fonts/       FilsonPro font family
public/images/      All site images
public/js/          webflow.js (Webflow interactions)
styles/             globals.css (inline styles from Webflow head)
```

## Notes

- Webflow interactions (dropdowns, animations) are powered by the original `webflow.js` loaded in `_app.js`.
- The client logo carousel uses Slick carousel, also loaded in `_app.js`.
- All original Webflow CSS is preserved in `public/css/` and loaded via `_document.js`.
