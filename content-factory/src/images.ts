import axios from 'axios';
import fs from 'fs';
import path from 'path';

export interface UnsplashImage {
  url: string;
  altText: string;
  photographer: string;
  photographerUrl: string;
}

const BLOG_DIR = path.join(__dirname, '../../content/blog');

const PLACEHOLDER_IMAGES: UnsplashImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1553564552-02656d6a2390?w=800&q=80&auto=format&fit=crop',
    altText: 'Glass of water wellness hydration',
    photographer: 'Unsplash',
    photographerUrl: 'https://unsplash.com',
  },
  {
    url: 'https://images.unsplash.com/photo-1576091160501-bbe57469278b?w=800&q=80&auto=format&fit=crop',
    altText: 'Person using wellness app on phone',
    photographer: 'Unsplash',
    photographerUrl: 'https://unsplash.com',
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop',
    altText: 'Morning wellness routine yoga mat',
    photographer: 'Unsplash',
    photographerUrl: 'https://unsplash.com',
  },
  {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&auto=format&fit=crop',
    altText: 'Healthy meal and hydration',
    photographer: 'Unsplash',
    photographerUrl: 'https://unsplash.com',
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop',
    altText: 'Fresh vegetables wellness nutrition',
    photographer: 'Unsplash',
    photographerUrl: 'https://unsplash.com',
  },
  {
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop',
    altText: 'Meditation and daily wellness',
    photographer: 'Unsplash',
    photographerUrl: 'https://unsplash.com',
  },
];

/** Extract Unsplash photo id from a URL (photo-XXXXXXXX-...). */
export function extractPhotoId(url: string): string | null {
  const match = url.match(/photo-([a-zA-Z0-9-]+)/);
  return match ? match[1] : null;
}

/** Cover photo IDs already used in content/blog/*.mdx frontmatter. */
export function getUsedCoverPhotoIds(excludeSlug?: string): Set<string> {
  const used = new Set<string>();
  if (!fs.existsSync(BLOG_DIR)) return used;

  for (const file of fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))) {
    const slug = file.replace(/\.mdx$/, '');
    if (excludeSlug && slug === excludeSlug) continue;
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const cover = raw.match(/^coverImage:\s*["']?([^"'\n]+)["']?/m);
    if (!cover) continue;
    const id = extractPhotoId(cover[1]);
    if (id) used.add(id);
  }
  return used;
}

function photoIdFromImage(img: UnsplashImage): string | null {
  return extractPhotoId(img.url);
}

export async function fetchUnsplashImages(
  query: string,
  count: number = 3,
  options: { excludePhotoIds?: Set<string>; excludeSlug?: string } = {},
): Promise<UnsplashImage[]> {
  const exclude = options.excludePhotoIds ?? getUsedCoverPhotoIds(options.excludeSlug);
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  const pickUnique = (candidates: UnsplashImage[]): UnsplashImage[] => {
    const picked: UnsplashImage[] = [];
    const seen = new Set<string>(exclude);
    for (const img of candidates) {
      const id = photoIdFromImage(img);
      if (!id || seen.has(id)) continue;
      seen.add(id);
      picked.push(img);
      if (picked.length >= count) break;
    }
    return picked;
  };

  if (!accessKey) {
    console.warn('⚠️ UNSPLASH_ACCESS_KEY not set — using placeholder images');
    const unique = pickUnique(PLACEHOLDER_IMAGES);
    return unique.length > 0 ? unique : PLACEHOLDER_IMAGES.slice(0, count);
  }

  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        per_page: Math.min(30, count * 5),
        orientation: 'landscape',
        content_filter: 'high',
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      timeout: 15000,
    });

    const results = (response.data.results ?? []).map(
      (img: {
        urls: { raw: string };
        alt_description?: string;
        description?: string;
        user: { name: string; links: { html: string } };
      }) => ({
        url: `${img.urls.raw}&w=800&q=80&auto=format&fit=crop`,
        altText: img.alt_description || img.description || query,
        photographer: img.user.name,
        photographerUrl: img.user.links.html,
      }),
    );

    const unique = pickUnique(results);
    if (unique.length > 0) return unique;

    console.warn('⚠️ No unique Unsplash results — falling back to unused placeholders');
    return pickUnique(PLACEHOLDER_IMAGES);
  } catch (error) {
    console.warn('⚠️ Unsplash API failed — using placeholder images:', error);
    return pickUnique(PLACEHOLDER_IMAGES);
  }
}

export const CLUSTER_IMAGE_QUERIES: Record<string, string[]> = {
  Hydration: ['drinking water wellness', 'hydration glass morning', 'water bottle healthy lifestyle'],
  'AI Companion': ['smartphone wellness app', 'AI health technology', 'digital health companion'],
  Habits: ['daily routine journal', 'habit tracker wellness', 'morning wellness ritual'],
  '4P Medicine': ['preventive health planning', 'personalized wellness', 'health data notebook'],
  'Preventive Care': ['preventive wellness lifestyle', 'healthy habits morning', 'wellness prevention'],
  'Oral Wellness': ['oral health wellness', 'fresh mouth hydration', 'dental wellness lifestyle'],
};
