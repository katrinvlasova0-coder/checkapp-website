# CheckApp Marketing Website

Multi-page marketing site for [CheckApp](https://checkapp.health) — the AI health companion app featuring DIDI.

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, **Framer Motion**, and **MDX** blog content.

## Quick start

```bash
npm install
npm run assets:sync   # copy DIDI assets from ../checkapp mobile repo
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, scrollytelling, testimonials, CTA |
| `/how-it-works` | Daily routine, tongue scan, krugocheks, science |
| `/features` | Feature grid, comparison table, pricing |
| `/about` | Origin story, team, values, transparency |
| `/blog` | SEO content hub |
| `/blog/[slug]` | Individual articles with FAQ schema |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://checkapp.today
NEXT_PUBLIC_POSTHOG_KEY=phc_...        # optional
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

## Adding a blog post

Create `content/blog/your-slug.mdx` with frontmatter:

```yaml
---
title: "Your Article Title"
description: "150-160 char meta description"
datePublished: "2026-06-01"
dateModified: "2026-06-01"
author:
  name: "Author Name"
  role: "Role"
category: "Hydration Science"
readTime: 8
featured: false
checkedBy: "Wellness Advisor Name"
faq:
  - question: "Question?"
    answer: "Answer."
sources:
  - label: "WHO"
    url: "https://..."
---
```

Every article must include:
- Direct answer in the first paragraph
- H2 headings phrased as questions
- FAQ section (4+ items)
- External citations
- Internal links to `/features` and `/how-it-works`

## Asset sync

When DIDI assets change in the mobile repo:

```bash
npm run assets:sync
# or: ./scripts/sync-assets.sh /path/to/checkapp
```

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set domain `checkapp.health`
4. Add env vars from `.env.example`
5. Enable Vercel Analytics in project settings

Build command: `npm run build` (auto-generates `sitemap.xml` via postbuild)

**Note:** Do not set `GITHUB_PAGES_BASE_PATH` on Vercel — that variable is only for GitHub Pages project-site builds.

## Deployment (GitHub Pages — client preview)

Static export is configured (`output: 'export'`). The site deploys automatically via GitHub Actions on push to `main`.

### One-time GitHub setup

1. Push repo to GitHub
2. **Settings → Pages → Source** → select **GitHub Actions**
3. (Optional) Add PostHog secrets under **Settings → Secrets → Actions**

Live URL: `https://<username>.github.io/<repo-name>/`

The workflow sets `GITHUB_PAGES_BASE_PATH=/<repo-name>` automatically so assets and routes work on project pages.

### Preview locally

```bash
npm run build
npm run preview   # serves ./out
```

For a subpath preview matching GitHub Pages:

```bash
GITHUB_PAGES_BASE_PATH=/checkapp-website npm run build
npx serve out
```

See [DEPLOY_TO_GITHUB_PAGES.md](./DEPLOY_TO_GITHUB_PAGES.md) for full details.

### Custom domain on GitHub Pages

1. Create `public/CNAME` with your domain (e.g. `checkapp.health`)
2. Remove or override `GITHUB_PAGES_BASE_PATH` in the workflow (leave it unset for root hosting)
3. Set `NEXT_PUBLIC_SITE_URL` to your domain in workflow env

## SEO / GEO checklist

- [ ] Replace TestFlight URL in `src/lib/constants.ts`
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt allows AI bots (GPTBot, ClaudeBot, etc.)
- [ ] Test OG images at [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Run Lighthouse — target ≥ 90 Performance, Accessibility, SEO
- [ ] Set up Bing Webmaster Tools

## Launch checklist (week 1)

- [ ] All 7 pages live and mobile-responsive
- [ ] TestFlight link working
- [ ] Publish first 3 blog articles (done — see `content/blog/`)
- [ ] Submit to Product Hunt
- [ ] Submit to AI tool directories (theresanaiforthat.com, futurepedia.io)

## Pricing note

Marketing site pricing copy (TZ spec) may differ from the mobile app's `subscriptionPlans.ts`. Marketing leads product — align before public launch.

## TODO

- Replace TestFlight URL: `src/lib/constants.ts`
- Replace team photos/bios: `src/app/about/page.tsx`
- Replace OG image with proper 1200×630 branded asset: `public/og-default.png`
