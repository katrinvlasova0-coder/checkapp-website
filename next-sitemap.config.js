/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next-sitemap').IConfig} */

/**
 * Routes that are not indexable content. next-sitemap reads the Next build
 * manifest, which includes the auth handoff and the app icon metadata file.
 * With trailingSlash those become /auth/callback/ and /icon.png/ — the icon
 * URL 404s, and the auth URL is only a deep-link bridge.
 */
const NON_CONTENT_PATTERNS = [
  '/_not-found',
  '/_not-found/',
  '/404',
  '/404/',
  '/auth',
  '/auth/',
  '/auth/*',
  '/icon.png',
  '/icon.png/',
  '/apple-icon.png',
  '/apple-icon.png/',
  '/favicon.ico',
  '/favicon.ico/',
];

function isNonContentPath(urlPath) {
  const path = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
  const stripped = path.replace(/\/+$/, '') || '/';

  if (stripped === '/auth' || stripped.startsWith('/auth/')) return true;
  if (stripped === '/_not-found' || stripped === '/404') return true;
  // Metadata and static assets are files, not pages. A trailing slash 404s.
  if (/\.(png|jpe?g|gif|svg|ico|webp|txt|xml|json|webmanifest)$/i.test(stripped)) {
    return true;
  }

  return false;
}

/** Content-factory fallback copies are thin duplicates and must not be submitted. */
function isFallbackBlogPath(urlPath) {
  const path = String(urlPath || '');
  const match = path.match(/\/blog\/([^/?#]+)/i);
  if (!match) return false;
  try {
    return decodeURIComponent(match[1]).toLowerCase().includes('fallback');
  } catch {
    return match[1].toLowerCase().includes('fallback');
  }
}

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://checkapp.today',
  outDir: './out',
  generateRobotsTxt: false,
  trailingSlash: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: NON_CONTENT_PATTERNS,
  transform: async (config, urlPath) => {
    if (isNonContentPath(urlPath) || isFallbackBlogPath(urlPath)) return null;

    return {
      loc: urlPath,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async () => {
    const fs = require('fs');
    const path = require('path');
    const blogDir = path.join(process.cwd(), 'content/blog');

    if (!fs.existsSync(blogDir)) return [];

    const slugs = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith('.mdx') && !f.startsWith('_') && !f.toLowerCase().includes('fallback'))
      .map((f) => f.replace(/\.mdx$/, ''));

    return slugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
