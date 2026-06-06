# Cursor Prompt: Deploy CheckApp Website to GitHub Pages

Paste this prompt into Cursor Agent (Cmd+I → Agent mode) to set up static deployment to GitHub Pages.

---

## Prompt to paste into Cursor:

```
I need to deploy this Next.js 16 App Router website (checkapp-website) to GitHub Pages as a static site for client preview. Please make all necessary changes:

### 1. Update next.config.ts

Add these settings for static export:
- `output: 'export'`  — enables `next build` to emit a static `out/` folder
- `trailingSlash: true` — required for GitHub Pages routing (index.html per directory)
- In the `images` block, add `unoptimized: true` — GitHub Pages has no image optimization server

If the site will be hosted at a subpath (e.g. https://username.github.io/checkapp-website/), also add:
- `basePath: '/checkapp-website'`
- `assetPrefix: '/checkapp-website/'`

If it will be at a custom domain or root (https://username.github.io/), skip basePath/assetPrefix.

Ask me which hosting URL I plan to use before deciding.

### 2. Fix dynamic blog routes for static export

Open `src/app/blog/[slug]/page.tsx`. It must export a `generateStaticParams` function so Next.js knows which slugs to pre-render:

```ts
import { getAllPostSlugs } from '@/lib/blog'; // or however slugs are fetched

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(); // returns string[]
  return slugs.map((slug) => ({ slug }));
}
```

Check `src/lib/blog.ts` to find the correct function for listing all post slugs. If it doesn't exist, add one that reads all `.mdx` filenames from `content/blog/` using `fs.readdirSync`.

### 3. Create .nojekyll file

Create `public/.nojekyll` (empty file). This tells GitHub Pages not to process the site with Jekyll, which would break Next.js static assets.

### 4. Create GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build
        env:
          NEXT_PUBLIC_POSTHOG_KEY: ${{ secrets.NEXT_PUBLIC_POSTHOG_KEY }}
          NEXT_PUBLIC_POSTHOG_HOST: ${{ secrets.NEXT_PUBLIC_POSTHOG_HOST }}

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 5. Handle @vercel/analytics

`@vercel/analytics/react` is Vercel-specific. On GitHub Pages it won't crash, but it also won't track anything. That's fine — leave it as-is for now. Add a comment so it's clear.

### 6. Check for any `dynamic = 'force-dynamic'` or `revalidate` exports

Search all page.tsx files for `export const dynamic = 'force-dynamic'` or `export const revalidate = 0`. These are incompatible with static export — remove them or change to `export const dynamic = 'force-static'`.

### 7. Run a test build locally

After making all changes, run:
```bash
npm run build
```

If it succeeds without errors, the `out/` folder is ready. Fix any errors before committing.

### 8. Commit and push

After the build succeeds:
```bash
git add -A
git commit -m "feat: configure static export for GitHub Pages"
git push origin main
```

GitHub Actions will automatically build and deploy. The live URL will appear in the repository's Settings → Pages section.

### Final checklist after deploy:
- [ ] All pages load without 404
- [ ] Blog article pages open correctly  
- [ ] Images (including Unsplash) load
- [ ] Internal links work (check with basePath if set)
- [ ] Cookie consent appears on first visit
```

---

## Manual setup steps (do these in GitHub before pushing):

1. Go to your GitHub repository → **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. (Optional) Add your custom domain under "Custom domain"
4. Add any required secrets (PostHog keys etc.) under **Settings → Secrets → Actions**

## Notes

- The `out/` folder is gitignored — it's built fresh by GitHub Actions on every push to `main`
- To preview locally before deploying: `npm run build && npx serve out`
- If you use a custom domain, create `public/CNAME` with the domain on one line (e.g. `checkapp.health`)
