import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog';

const CATEGORY_GRADIENT: Record<string, string> = {
  '4p-medicine': 'from-forest to-primary-dark',
  'predictive-health': 'from-primary-dark to-forest',
  gamification: 'from-accent-amber to-primary-dark',
  'preventive-health': 'from-primary to-forest',
  hydration: 'from-primary-light to-primary-dark',
  participative: 'from-primary to-forest',
  'oral-health': 'from-primary-dark to-forest',
  longevity: 'from-forest to-forest-mid',
  economics: 'from-forest-mid to-forest',
  'daily-routine': 'from-primary to-primary-dark',
  wellness: 'from-primary to-forest',
  'ai-&-health': 'from-primary-dark to-forest',
  'hydration-science': 'from-primary-light to-forest',
  'daily-habits': 'from-primary to-primary-dark',
};

function categoryGradient(category: string): string {
  const key = category.toLowerCase().replace(/\s+/g, '-');
  return CATEGORY_GRADIENT[key] ?? CATEGORY_GRADIENT.wellness;
}

type BlogRelatedCardProps = {
  post: BlogPostMeta;
};

export function BlogRelatedCard({ post }: BlogRelatedCardProps) {
  const gradient = categoryGradient(post.category);
  const dateLabel = new Date(post.datePublished).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-card shadow-[0_1px_2px_rgb(14_31_1/0.04),0_16px_40px_rgb(14_31_1/0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgb(14_31_1/0.05),0_18px_48px_rgb(14_31_1/0.1)]"
    >
      {post.coverImage ? (
        <div className="relative h-28 w-full shrink-0 overflow-hidden">
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={`flex h-28 shrink-0 items-center justify-center bg-gradient-to-br ${gradient}`}
          aria-hidden="true"
        >
          <span className="font-display text-4xl font-extrabold text-white/25">
            {post.title.charAt(0)}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          {post.category}
        </span>
        <h3 className="mt-2 line-clamp-2 font-display text-base font-bold leading-snug text-text group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-auto pt-3 text-xs text-text-secondary/70">
          {dateLabel} · {post.readTime} min read
        </p>
      </div>
    </Link>
  );
}
