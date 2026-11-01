# Quality check — portfolio v1.0

Checks completed in this environment:

- Parsed/transpiled all non-declaration `.ts` and `.tsx` files with TypeScript: **no syntax errors**.
- Checked `en.json` and `uk.json` have matching translation sections and keys.
- Parsed the standalone preview JavaScript using Node's syntax checker: **passed**.
- Rendered the HTML preview in headless Chromium using Playwright: **passed**.
- Confirmed desktop navigation displays correct labels, initial hero and animated terminal are present.
- Navigated to AI Body Analyzer case study (four feature cards) and back: **passed**.
- Switched to Ukrainian in the preview: **passed**.
- Checked the mobile viewport at 390 px: no horizontal overflow; mobile navigation opened: **passed**.
- Browser preview emitted no page-level JavaScript errors.

Not verified here:

- **`npm install`, `npm run lint`, `npm run build` and production Next.js runtime.** The environment does not have registry access to install dependencies. Run those checks before production release.
- **Real email sending.** No Web3Forms/Resend key or access to the Gmail inbox was available. The server route returns 503 if not configured.
- **Production Vercel deployment.** Requires the account owner's authentication/action.
- **AI Body Analyzer live demo.** The owner says it is offline. The case study uses facts documented by the public README, not live testing.

The offline `preview.html` demonstrates the visual direction and UI locally without installing dependencies. Its contact form intentionally opens the email app, while the **Next.js app** uses the server email endpoint once a provider is configured.
