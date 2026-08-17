# Android APK for checkapp.today/download

The production APK is **~148MB**, above GitHub’s 100MB file limit, so it is **not** stored in this repo.

Current source: Kave’s EAS build `fd763319` via
`src/lib/constants.ts` → `ANDROID_APK_URL` (Expo artifact).

## To publish a new APK

1. Get the new EAS **Download build** URL (`https://expo.dev/artifacts/eas/….apk`).
2. Update `ANDROID_APK_URL` and keep `ANDROID_APK_AVAILABLE = true`.
3. Push `main` — GitHub Pages updates `/download/`.

## Durable hosting (when Expo artifacts are not enough)

GitHub **Releases** (up to 2GB) or Cloudflare R2 / similar. Then point
`ANDROID_APK_URL` at that absolute URL.
