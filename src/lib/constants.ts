/**
 * Download CTAs on the marketing site.
 * - APP_DOWNLOAD_URL: where "Download Free" buttons go (landing page).
 * - ANDROID_APK_URL: direct file under /public/downloads/ (GitHub Pages static).
 * Flip ANDROID_APK_AVAILABLE to true after placing the production APK file.
 */
export const APP_DOWNLOAD_URL = '/download/';

/**
 * Direct APK for Android (Kave EAS build fd763319, 2026-08).
 * File is ~148MB so it cannot live in this GitHub Pages repo (100MB limit).
 * Expo artifact URL redirects to the current signed download.
 */
export const ANDROID_APK_URL =
  'https://expo.dev/artifacts/eas/vM-woNWpQSlcW9zVvL_YgVBhmfMa2nQHmLAB92fSVl8.apk';

export const ANDROID_APK_AVAILABLE = true;

/** Set when the Play Store listing is live; leave null until then. */
export const PLAY_STORE_URL: string | null = null;

/** @deprecated Use APP_DOWNLOAD_URL */
export const TESTFLIGHT_URL = APP_DOWNLOAD_URL;

/** Deep link used after password-recovery / email confirm. */
export const APP_SCHEME_CALLBACK = 'checkapp://auth/callback';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://checkapp.today';

export const SITE_NAME = 'CheckApp';

export const NAV_LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/features', label: 'Features' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/checkapp',
  twitter: 'https://twitter.com/checkapp',
  contact: 'mailto:hello@checkapp.today',
} as const;

export const DEFAULT_OG_IMAGE = '/og-default.png';
