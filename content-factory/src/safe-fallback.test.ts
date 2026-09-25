import { validateArticle } from './validator';
import {
  SAFE_TEMPLATES,
  buildSafeFallbackArticle,
  selectTemplate,
} from './safe-fallback';
import { isFallbackBlogLoc, isIndexableBlogSlug } from './sitemap';

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

const dates = ['2026-08-18', '2026-08-19', '2026-08-20', '2026-08-21', '2026-08-22', '2026-08-23'];

for (const date of dates) {
  const selected = selectTemplate(date);
  assert(Boolean(selected?.id), `no template for ${date}`);
}

const used = new Set(dates.map((d) => selectTemplate(d).id));
assert(used.size === SAFE_TEMPLATES.length, 'rotation should hit every template across 6 days');

for (const template of SAFE_TEMPLATES) {
  const { slug, content, request } = buildSafeFallbackArticle(template, '2026-08-18', {
    links: [
      { slug: 'how-to-tell-if-dehydrated', text: 'signs of dehydration' },
      { slug: 'water-drinking-habit', text: 'building a water drinking habit' },
    ],
  });

  assert(slug === `fallback-${template.id}-2026-08-18`, `unexpected slug ${slug}`);
  assert(/^noindex:\s*true\s*$/m.test(content), `${slug} missing noindex frontmatter`);
  assert(!isIndexableBlogSlug(slug), `${slug} must stay out of the sitemap`);
  assert(content.includes('general wellness information only'), `${slug} missing disclaimer`);
  assert(
    content.includes('Try CheckApp free') && content.includes('/download/'),
    `${slug} missing required CTA`,
  );
  assert(/name:\s*"Ed Musinski"/.test(content), `${slug} wrong author`);
  assert(!content.includes('---en---'), `${slug} still has bilingual marker`);
  assert(!/guaranteed cure/i.test(content), `${slug} contains guaranteed outcome`);

  const result = validateArticle(content, request.keywordDe, 1500);
  if (!result.valid || result.warnings.length) {
    console.log(`\n--- ${slug} ---`);
    console.log('errors', result.errors);
    console.log('warnings', result.warnings);
    console.log('stats', result.stats);
  }
  assert(result.valid, `${slug} invalid:\n${result.errors.join('\n')}`);
  assert(
    result.stats.wordCountDe >= 1400,
    `${slug} word count ${result.stats.wordCountDe} < 1400`,
  );

  const body = content.split(/^---$/m).slice(2).join('---');
  const coverMatch = content.match(/^coverImage:\s+"?([^"\n]+)"?/m);
  const coverUrl = coverMatch?.[1]?.trim() ?? '';
  const coverPath = coverUrl.split('?')[0];
  const bodyImages = [...body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((m) => m[1]);
  assert(
    !bodyImages.some((url) => url.split('?')[0] === coverPath),
    `${slug} repeats cover image in the body`,
  );
}

assert(!isIndexableBlogSlug('fallback-hydration-signals-2026-09-21'), 'fallback prefix');
assert(!isIndexableBlogSlug('notes-with-fallback-copy'), 'slug containing fallback');
assert(isIndexableBlogSlug('how-to-tell-if-dehydrated'), 'real article slug');
assert(
  isFallbackBlogLoc('https://checkapp.today/blog/fallback-4p-prevention-2026-09-18/'),
  'fallback loc',
);
assert(!isFallbackBlogLoc('https://checkapp.today/blog/4p-medicine-basics/'), 'real article loc');
assert(!isFallbackBlogLoc('https://checkapp.today/features/'), 'static page loc');

console.log('✅ safe-fallback.test.ts passed');
