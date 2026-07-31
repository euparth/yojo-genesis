# YOJO Genesis

Japanese-primary B2B enterprise storefront for **YOJO Genesis** — an AI-native modernization partner focused on Edge AI, computer vision, and NLP for Japanese industrial and enterprise buyers.

## Phase A (this repo)

- `/ja` (default) and `/en` locales
- Homepage conversion funnel
- `/company` 会社概要 (honest “in formation” entity status + provisional Tokyo address)
- `/intake` Architecture Intake Portal (72-hour feasibility promise)
- DevPilot-curated portfolio proof
- Phase B route stubs: `/services`, `/cases`, `/security` → section anchors

## Develop

Requires Node 20+.

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/ja`.

## Intake email (optional)

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — Resend API key
- `INTAKE_TO_EMAIL` — destination inbox

Without Resend configured, submissions are still stored in `data/intake-submissions.json` (gitignored).

## Content

- Copy: `src/content/dictionaries.ts`
- Company facts: `src/content/company.ts`
- Portfolio: `src/content/portfolio.ts`

Replace the provisional Tokyo address in `company.ts` when you have a real office.


## Deploy (production)

Production: https://yojo-genesis.vercel.app

After merging to `main`, deploy with a Vercel token:

```bash
export VERCEL_TOKEN=...   # https://vercel.com/account/tokens
# optional but recommended:
export VERCEL_ORG_ID=...
export VERCEL_PROJECT_ID=...
npm run deploy:prod
```

Or after `vercel login` once in the environment:

```bash
npx vercel deploy --prod --yes
```

Add `VERCEL_TOKEN` (and org/project ids) to the Cursor Cloud Agent environment secrets so future agents can merge **and** ship without waiting.
