# Kovalevych Vadym / Portfolio v1.0

A bilingual (English/Ukrainian) developer portfolio for **Kovalevych Vadym** — Software Engineering student and aspiring Full-Stack Developer.

Designed as a dark, monochrome, futuristic portfolio with an animated developer terminal and an honest case study of [AI Body Analyzer](https://github.com/Quz1ro/AI-Body-Analyzer).

## Features

- Responsive home page: hero, animated (display-only) terminal, about, skills, project showcase, learning journey, contact.
- Separate case-study page at `/en/projects/ai-body-analyzer` and `/uk/projects/ai-body-analyzer`.
- EN and UA translations with `next-intl`, English by default.
- Motion-powered section reveals; respects `prefers-reduced-motion`.
- Fully functional contact form **once an email provider access key is configured**; email link works without configuration.
- Semantic sections, keyboard-friendly navigation, accessible labels and mobile menu.
- Custom vector-based project visual: **concept artwork, not a screenshot or claimed product result**.
- No fake skill percentages, work history, social links or active live-demo claims.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 + custom CSS, Motion, next-intl, Lucide icons.

## Run locally

Requirements: Node.js **20.9+** (22 LTS recommended), npm.

On Windows, double-click `start.bat` in the project folder. It installs missing dependencies and starts the development server. Open the Local URL printed in the console (usually `http://localhost:3000`). Keep the console open; press Ctrl+C to stop. The first launch requires Internet access.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (redirects to `/en`), switch to **UA** in the header to see `/uk`.

To check the code:

```bash
npm run lint
npm run build
```

## Contact form — one-time setup

The recipient is **kovalevich.vadimm@gmail.com**. The form POSTs to `/api/contact`; server-side validation, size restriction, cross-origin check and a honeypot are included. The email address is also shown as a direct `mailto:` alternative.

### Option A — Web3Forms (recommended without a custom domain)

1. Request a free access key at <https://web3forms.com/> using the recipient email and verify it.
2. Copy `.env.example` to `.env.local`.
3. Set `WEB3FORMS_ACCESS_KEY=your-key`.
4. Restart the development server and test a message. On Vercel add the same environment variable in Project Settings and redeploy.

**Important:** The provider's own troubleshooting notes say it may block certain free hosting subdomains. If a `vercel.app` domain is blocked, you may need to contact its support, choose another provider, or use a custom domain. Do not consider the contact form tested until a real message reaches the inbox.

### Option B — Resend (alternative)

Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in `.env.local` / Vercel. Resend generally requires a verified sender domain for production. Without a domain, its default sender is restricted to test addresses / the registered account. `WEB3FORMS_ACCESS_KEY` takes precedence when both are set.

**If neither option is configured**, the UI reports that sending is unavailable and offers a direct email link. It will never display a false success message.

## Deploy to Vercel

1. Create your own repository (e.g. `kovalevych-portfolio`) under [@Quz1ro](https://github.com/Quz1ro) and push the files from this folder.
2. Visit <https://vercel.com/new>, import the repo, leave framework as Next.js.
3. If you configured an email provider, add its environment variable(s) under Project Settings → Environment Variables.
4. Deploy. You receive a free `*.vercel.app` subdomain (on the free Hobby plan for personal non-commercial use).
5. Verify `/en`, `/uk`, the project page, navigation and form on a real phone and desktop. Test actual email delivery.

There is **no deployed URL** yet; deployment needs your GitHub/Vercel accounts.

## Editing content

| Purpose | File |
| --- | --- |
| English copy | `messages/en.json` |
| Ukrainian copy | `messages/uk.json` |
| GitHub/email links | `src/lib/data.ts` |
| Homepage sections | `src/components/landing.tsx` |
| AI project case study | `src/components/case-study.tsx` |
| Theme/layout | `src/app/globals.css` |
| Animated terminal | `src/components/terminal.tsx` |
| Email delivery | `src/app/api/contact/route.ts` |

## About your AI project

The project features and technologies are presented as **documented by the repository's README**, rather than independently confirmed production behavior. Your own contribution is described truthfully: work with MediaPipe, prompts in code, manual testing, familiarity with structure and use of AI coding tools. Live demo is marked offline. The visual artwork is illustrative and labeled accordingly.

## Before making it public

- Optionally add a real portrait in a future release (no placeholder portrait was invented).
- If available, take actual screenshots of AI Body Analyzer and replace the conceptual visualization, clearly labeled.
- Review the English and Ukrainian biography text and project contributions for accuracy.
- Configure and test the email service before inviting visitors to use the form.
- Optional: add spam protection (e.g. Turnstile or provider-specific controls) if contact spam appears.

## License

Code supplied for use and modification by Kovalevych Vadym. External libraries retain their own licenses.
