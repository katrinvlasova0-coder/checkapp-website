export const APP_DOWNLOAD_URL = 'https://apps.apple.com/app/checkapp/id000000000';
/** @deprecated Use APP_DOWNLOAD_URL */
export const TESTFLIGHT_URL = APP_DOWNLOAD_URL;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://checkapp.health';

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
  contact: 'mailto:hello@checkapp.health',
} as const;

export const DEFAULT_OG_IMAGE = '/og-default.png';
