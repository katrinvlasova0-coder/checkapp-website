import { BlogRelatedCard } from './BlogRelatedCard';
import type { BlogPostMeta } from '@/lib/blog';

type RelatedPostsProps = {
  posts: BlogPostMeta[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="related-posts-heading">
      <h2
        id="related-posts-heading"
        className="font-display text-2xl font-bold text-text md:text-3xl"
      >
        You might also like
      </h2>
      <p className="mt-2 text-text-secondary">
        More from the CheckApp blog — hydration, habits, and AI wellness.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {posts.map((post) => (
          <BlogRelatedCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
