import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog';

const CATEGORY_GRADIENT: Record<string, string> = {
  '4p-medicine': 'from-violet-600/80 to-violet-900',
  'predictive-health': 'from-blue-500/80 to-blue-900',
  gamification: 'from-amber-500/80 to-orange-800',
  'preventive-health': 'from-emerald-500/80 to-emerald-900',
  hydration: 'from-cyan-500/80 to-cyan-900',
  participative: 'from-teal-500/80 to-teal-900',
  'oral-health': 'from-rose-500/80 to-rose-900',
  longevity: 'from-indigo-500/80 to-indigo-900',
  economics: 'from-slate-500/80 to-slate-900',
  'daily-routine': 'from-green-600/80 to-green-900',
  wellness: 'from-primary/80 to-forest',
  'ai-&-health': 'from-blue-500/80 to-indigo-900',
  'hydration-science': 'from-cyan-500/80 to-teal-900',
  'daily-habits': 'from-green-600/80 to-green-900',
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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
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
