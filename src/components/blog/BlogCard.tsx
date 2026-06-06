import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog';

// Category → gradient for the placeholder thumbnail
const CATEGORY_GRADIENT: Record<string, string> = {
  '4p-medicine':        'from-violet-600/80 to-violet-900',
  predictive:           'from-blue-500/80 to-blue-900',
  gamification:         'from-amber-500/80 to-orange-800',
  'preventive-health':  'from-emerald-500/80 to-emerald-900',
  hydration:            'from-cyan-500/80 to-cyan-900',
  participative:        'from-teal-500/80 to-teal-900',
  'oral-health':        'from-rose-500/80 to-rose-900',
  longevity:            'from-indigo-500/80 to-indigo-900',
  economics:            'from-slate-500/80 to-slate-900',
  'daily-routine':      'from-green-600/80 to-green-900',
  wellness:             'from-primary/80 to-forest',
};

function categoryGradient(category: string): string {
  const key = category.toLowerCase().replace(/\s+/g, '-');
  return CATEGORY_GRADIENT[key] ?? CATEGORY_GRADIENT.wellness;
}

type BlogCardProps = {
  post: BlogPostMeta;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const gradient = categoryGradient(post.category);

  const Thumbnail = () => {
    if (post.coverImage) {
      return (
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      );
    }
    // Gradient placeholder with article initial
    return (
      <div className={`flex h-40 w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
        <span className="font-display text-6xl font-extrabold text-white/20 select-none">
          {post.title.charAt(0)}
        </span>
      </div>
    );
  };

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group col-span-full block overflow-hidden rounded-3xl bg-forest text-white"
      >
        <div className={`flex h-56 items-center justify-center bg-gradient-to-br ${gradient}`}>
          {post.coverImage ? (
            <Image src={post.coverImage} alt={post.title} width={800} height={224} className="h-full w-full object-cover" />
          ) : (
            <span className="font-display text-8xl font-extrabold text-white/15 select-none">
              {post.title.charAt(0)}
            </span>
          )}
        </div>
        <div className="p-8 md:p-12">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light">
            {post.category}
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold group-hover:text-primary-light md:text-4xl">
            {post.title}
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">{post.description}</p>
          <p className="mt-4 text-sm text-white/50">
            {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            {' · '}{post.readTime} min read
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-3xl bg-card shadow-lg transition-shadow hover:shadow-xl"
    >
      <Thumbnail />
      <div className="p-6">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {post.category}
        </span>
        <h2 className="mt-4 font-display text-xl font-bold group-hover:text-primary">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm text-text-secondary">{post.description}</p>
        <p className="mt-4 text-xs text-text-secondary/60">
          {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          {' · '}{post.readTime} min read
        </p>
      </div>
    </Link>
  );
}
