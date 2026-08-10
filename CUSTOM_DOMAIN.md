# Custom domain: checkapp.today

## What was configured in the repo

- `public/CNAME` → `checkapp.today`
- GitHub Actions builds **without** `/checkapp-website` base path (site at domain root)
- `NEXT_PUBLIC_SITE_URL` → `https://checkapp.today`

After push to `main`, wait for the deploy workflow to finish.

---

## Step 1 — GoDaddy DNS (you do this)

Open **DNS Management** for `checkapp.today` → **DNS Records**.

### IMPORTANT: remove wrong records first

Your domain currently has **extra A records** that point to GoDaddy/AWS (not GitHub).  
GitHub will show `NotServedByPagesError` until these are deleted.

**Delete any A record for `@` with these values:**

- `3.33.130.190`
- `15.197.148.33`
- Any other IP that is **not** in the GitHub list below

Also check **Forwarding** tab in GoDaddy — if domain forwarding is ON, **turn it OFF**.  
(Forwarding causes redirect to `/lander` and breaks GitHub Pages.)

### A records (root domain `@`) — only these four

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `185.199.108.153` | 600 (or default) |
| A | @ | `185.199.109.153` | 600 |
| A | @ | `185.199.110.153` | 600 |
| A | @ | `185.199.111.153` | 600 |

You must have **exactly 4** A records at `@` — no more, no less.

### CNAME (optional — for www)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `katrinvlasova0-coder.github.io` | 600 |

Remove any old A/CNAME records that conflict (e.g. GoDaddy parking page).

DNS propagation: **15 minutes – 48 hours** (usually under 1 hour).

Verify locally:

```bash
dig checkapp.today A +short
```

Should return **only** the four `185.199.10x.153` addresses.

---

## Step 2 — GitHub Pages (you do this)

1. Open https://github.com/katrinvlasova0-coder/checkapp-website/settings/pages
2. Under **Custom domain**, enter: `checkapp.today`
3. Click **Save**
4. If DNS was wrong before: **clear** the field, Save, wait 1 min, enter `checkapp.today` again, Save (re-triggers HTTPS)
5. Wait until **DNS check** passes (green)
6. Enable **Enforce HTTPS** when the checkbox appears (can take up to 24h after DNS)

Use **only** `checkapp.today` in Custom domain — do not also add `www.checkapp.today` as a second custom domain.

---

## Step 3 — Verify

- http://checkapp.today should show `Server: GitHub.com` (not redirect to `/lander`)
- https://checkapp.today should load the site with lock icon
- https://checkapp.today/blog/

Old URL `katrinvlasova0-coder.github.io/checkapp-website/` may still work briefly; custom domain is canonical.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `NotServedByPagesError` | Delete GoDaddy A records `3.33.130.190` and `15.197.148.33`; keep only 4 GitHub IPs |
| Redirect to `/lander` | Disable **Forwarding** in GoDaddy domain settings |
| DNS not verified on GitHub | Run `dig checkapp.today A +short` — must be 4 GitHub IPs only |
| HTTPS not available | Fix DNS first, then remove/re-add custom domain in GitHub Pages settings |
| Site loads but no CSS/images | Redeploy after base-path commit (already done in repo) |
| www doesn’t work | Add CNAME `www` → `katrinvlasova0-coder.github.io` |
