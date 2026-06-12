# Custom domain: checkapp.today

## What was configured in the repo

- `public/CNAME` → `checkapp.today`
- GitHub Actions builds **without** `/checkapp-website` base path (site at domain root)
- `NEXT_PUBLIC_SITE_URL` → `https://checkapp.today`

After push to `main`, wait for the deploy workflow to finish.

---

## Step 1 — GoDaddy DNS (you do this)

Open **DNS Management** for `checkapp.today` → **Add New Record**.

### A records (root domain `@`)

Add **four** A records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `185.199.108.153` | 600 (or default) |
| A | @ | `185.199.109.153` | 600 |
| A | @ | `185.199.110.153` | 600 |
| A | @ | `185.199.111.153` | 600 |

### CNAME (optional — for www)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `katrinvlasova0-coder.github.io` | 600 |

Remove any old A/CNAME records that conflict (e.g. GoDaddy parking page).

DNS propagation: **15 minutes – 48 hours** (usually under 1 hour).

---

## Step 2 — GitHub Pages (you do this)

1. Open https://github.com/katrinvlasova0-coder/checkapp-website/settings/pages
2. Under **Custom domain**, enter: `checkapp.today`
3. Click **Save**
4. Wait until **DNS check** passes (green)
5. Enable **Enforce HTTPS** when the checkbox appears (can take up to 24h after DNS)

---

## Step 3 — Verify

- https://checkapp.today
- https://checkapp.today/blog/
- Images and styles load (no `/checkapp-website` in URLs)

Old URL `katrinvlasova0-coder.github.io/checkapp-website/` may still work briefly; custom domain is canonical.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| DNS not verified on GitHub | Wait longer; confirm 4 A records at `@` |
| Site loads but no CSS/images | Redeploy after this commit (base path removed) |
| HTTPS not available | Wait 24h; ensure Enforce HTTPS is on |
| www doesn’t work | Add CNAME `www` → `katrinvlasova0-coder.github.io` |
