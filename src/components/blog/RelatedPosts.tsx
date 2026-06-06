import { BlogCard } from './BlogCard';
import type { BlogPostMeta } from '@/lib/blog';

type RelatedPostsProps = {
  posts: BlogPostMeta[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="mb-6 font-display text-2xl font-bold">Related articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
