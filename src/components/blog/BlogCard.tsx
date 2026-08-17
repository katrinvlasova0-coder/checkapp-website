import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog';

// Category → gradient for the placeholder thumbnail
const CATEGORY_GRADIENT: Record<string, string> = {
  '4p-medicine':        'from-forest to-primary-dark',
  predictive:           'from-primary-dark to-forest',
  gamification:         'from-accent-amber to-primary-dark',
  'preventive-health':  'from-primary to-forest',
  hydration:            'from-primary-light to-primary-dark',
  participative:        'from-primary to-forest',
  'oral-health':        'from-primary-dark to-forest',
  longevity:            'from-forest to-forest-mid',
  economics:            'from-forest-mid to-forest',
  'daily-routine':      'from-primary to-primary-dark',
  wellness:             'from-primary to-forest',
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
        className="group col-span-full block overflow-hidden rounded-[1.75rem] bg-forest text-white"
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
      className="group block overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-card shadow-[0_1px_2px_rgb(14_31_1/0.04),0_16px_40px_rgb(14_31_1/0.06)] transition-shadow hover:shadow-[0_1px_2px_rgb(14_31_1/0.05),0_18px_48px_rgb(14_31_1/0.1)]"
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
