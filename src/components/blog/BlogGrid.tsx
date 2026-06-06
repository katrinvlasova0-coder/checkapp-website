import { BlogCard } from './BlogCard';
import type { BlogPostMeta } from '@/lib/blog';

type BlogGridProps = {
  posts: BlogPostMeta[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featured && <BlogCard post={featured} featured />}
      {rest.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
