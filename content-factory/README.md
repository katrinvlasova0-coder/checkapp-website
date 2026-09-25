# CheckApp Content Factory

Autonomous TypeScript pipeline: content plan → queue → English MDX in git → site deploy.

Publication is a git commit of `content/blog/{slug}.mdx`, not a CMS write. The Next.js app reads those files at build time and prerenders HTML for SEO/GEO.

## Commands

```bash
cd content-factory
cp .env.example .env
npm install
npm run init
npm run queue:list
npm run mock -- morning-hydration-routine --dry-run
npm run batch -- -n 1
npm run test:compliance
npm run test:fallback
```

`--mock` is for pipeline tests only. Production articles need `ANTHROPIC_API_KEY`.

## Environment

See `.env.example`. `SITE_BASE_URL` defaults to `https://checkapp.today`.

### GitHub Actions secrets (production cron)

Repo → **Settings → Secrets and variables → Actions**. Names only (never commit values):

| Secret | Required | Purpose |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | **yes** for real articles | Claude generation. If missing/empty on **schedule**, the job **fails** with `mode=missing-key` (no automatic `fallback-*` posts). Manual `workflow_dispatch` can still use fallback-only / mock. |
| `ANTHROPIC_MODEL` | optional | Defaults to `claude-sonnet-5` in code. |
| `UNSPLASH_ACCESS_KEY` | optional | Cover images (stock fallbacks if unset). |
| `RESEND_API_KEY` | optional | Email notify on publish. |
| `NOTIFY_EMAIL` | optional | Notify recipient. |

Schedule: cron `0 8 * * *` (08:00 UTC daily), publish 1 of every 3 days from anchor `2026-08-28`. A scheduled publish day with no Anthropic key exits before the fallback step.

## Contract

- English only (no `---en---` block)
- Authors: Ed Musinski, Morgan Chen, Sam Okonkwo
- Categories: Hydration Science, Daily Habits, AI & Health, 4P Medicine, Preventive Care
- Required CTA: *Try CheckApp free — DIDI turns daily wellness advice into a habit you actually keep. [Get CheckApp Free](/download/)*
- Required disclaimer: informational / wellness purposes only, not medical advice
- Blocked: disease diagnosis, medical device claims, guarantees, doctor replacement claims
