import fs from 'fs';
import path from 'path';

function getLlmsPath(): string {
  return path.join(process.env.SITE_PUBLIC_DIR || '../public', 'llms.txt');
}

function getContentDir(): string {
  return path.resolve(process.env.CONTENT_DIR || '../content/blog');
}

function getBaseUrl(): string {
  return (process.env.SITE_BASE_URL || 'https://checkapp.today').replace(/\/$/, '');
}

/** Dated safe-fallback copies are not canonical articles. */
function isPublicArticle(slug: string): boolean {
  const normalized = slug.trim().toLowerCase();
  return normalized.length > 0 && !normalized.startsWith('_') && !normalized.includes('fallback');
}

function listSlugs(explicit?: string[]): string[] {
  const slugs = explicit
    ? explicit
    : fs.existsSync(getContentDir())
      ? fs
          .readdirSync(getContentDir())
          .filter((f) => f.endsWith('.mdx'))
          .map((f) => f.replace(/\.mdx$/, ''))
      : [];

  return slugs.filter(isPublicArticle);
}

function titleFromMdx(slug: string): string {
  const filePath = path.join(getContentDir(), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return slug.replace(/-/g, ' ');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const match = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  return match?.[1] ?? slug.replace(/-/g, ' ');
}

const PRIMARY_PAGES: Array<{ title: string; path: string }> = [
  { title: 'Home', path: '/' },
  { title: 'Features', path: '/features/' },
  { title: 'How it works', path: '/how-it-works/' },
  { title: 'Download', path: '/download/' },
  { title: 'About', path: '/about/' },
  { title: 'Privacy', path: '/privacy/' },
  { title: 'Terms', path: '/terms/' },
];

/** GEO: a crawlable index of pages and articles for LLM/answer-engine bots. */
export function writeLlmsTxt(slugs?: string[]): void {
  const BASE_URL = getBaseUrl();
  const articles = listSlugs(slugs)
    .map((slug) => ({ slug, title: titleFromMdx(slug) }))
    .sort((a, b) => a.title.localeCompare(b.title, 'en'));

  const lines = [
    '# CheckApp',
    '',
    '> AI wellness companion (DIDI). Wellness and habit support — not a medical device, and not a substitute for professional care.',
    '',
    `Site: ${BASE_URL}/`,
    `Blog: ${BASE_URL}/blog/`,
    `Download: ${BASE_URL}/download/`,
    '',
    '## Primary pages',
    '',
    ...PRIMARY_PAGES.map(({ title, path: pagePath }) => `- [${title}](${BASE_URL}${pagePath})`),
    '',
    '## Blog',
    '',
    ...articles.map(({ slug, title }) => `- [${title}](${BASE_URL}/blog/${slug}/)`),
    '',
    '## Wellness note',
    '',
    'CheckApp and DIDI are wellness companions, not medical devices. Do not treat this site as a diagnosis or a treatment plan.',
    '',
    '## Contact / download',
    '',
    `${BASE_URL}/download/`,
    '',
  ];

  const out = getLlmsPath();
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, lines.join('\n'), 'utf-8');
  console.log(`✅ llms.txt written (${articles.length} articles)`);
}
