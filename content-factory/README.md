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

## Contract

- English only (no `---en---` block)
- Authors: Ed Musinski, Morgan Chen, Sam Okonkwo
- Categories: Hydration Science, Daily Habits, AI & Health, 4P Medicine, Preventive Care
- Required CTA: *Try CheckApp free — DIDI turns daily wellness advice into a habit you actually keep. [Get CheckApp Free](/download/)*
- Required disclaimer: informational / wellness purposes only, not medical advice
- Blocked: disease diagnosis, medical device claims, guarantees, doctor replacement claims
