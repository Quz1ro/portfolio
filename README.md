# Kovalevych Vadym / Portfolio v1.0

A bilingual (English/Ukrainian) developer portfolio for **Kovalevych Vadym** — Software Engineering student and aspiring Full-Stack Developer.

Designed as a dark, monochrome, futuristic portfolio with an animated developer terminal and an honest case study of [AI Body Analyzer](https://github.com/Quz1ro/AI-Body-Analyzer).

## Features

- Responsive home page: hero, animated (display-only) terminal, about, skills, project showcase, learning journey, contact.
- Separate case-study page at `/en/projects/ai-body-analyzer` and `/uk/projects/ai-body-analyzer`.
- EN and UA translations with `next-intl`, English by default.
- Motion-powered section reveals; respects `prefers-reduced-motion`.
- Direct email contact links compatible with static GitHub Pages hosting.
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

## Hosting on GitHub Pages

This version is a static site. Contact buttons open an email app; there is no server-side email endpoint or API key requirement.

The `.github/workflows/pages.yml` workflow builds and publishes pushes to `main` with GitHub Actions. In repository Settings → Pages, select **GitHub Actions** as the source if Pages is not enabled automatically. Check the Actions tab for the deployment result.

Expected project URL: https://quz1ro.github.io/portfolio/

The workflow sets `NEXT_PUBLIC_BASE_PATH` from GitHub Pages configuration so assets and links work under `/portfolio`. For a local export matching this project URL:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

For ordinary local development, use `start.bat` or `npm run dev` without that variable. The root page opens the English version; Ukrainian is available through the language switch.

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
| Email contact | `src/components/contact-form.tsx` |

## About your AI project

The project features and technologies are presented as **documented by the repository's README**, rather than independently confirmed production behavior. Your own contribution is described truthfully: work with MediaPipe, prompts in code, manual testing, familiarity with structure and use of AI coding tools. Live demo is marked offline. The visual artwork is illustrative and labeled accordingly.

## Before making it public

- Optionally add a real portrait in a future release (no placeholder portrait was invented).
- If available, take actual screenshots of AI Body Analyzer and replace the conceptual visualization, clearly labeled.
- Review the English and Ukrainian biography text and project contributions for accuracy.
- Check that the contact links open your email app.


## License

Code supplied for use and modification by Kovalevych Vadym. External libraries retain their own licenses.
