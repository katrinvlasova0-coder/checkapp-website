import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type BlogAuthor = {
  name: string;
  role: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogSource = {
  label: string;
  url: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: BlogAuthor;
  category: string;
  readTime: number;
  featured?: boolean;
  coverImage?: string;
  faq: BlogFaq[];
  sources: BlogSource[];
  checkedBy?: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function parsePost(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, '');
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
  const { data, content } = matter(raw);

  // Handle both object and string author formats
  const rawAuthor = data.author;
  const author: BlogAuthor =
    rawAuthor && typeof rawAuthor === 'object'
      ? (rawAuthor as BlogAuthor)
      : {
          name: typeof rawAuthor === 'string' ? rawAuthor : 'CheckApp Wellness Team',
          role: 'Wellness Editor',
        };

  // Handle both datePublished and date fields
  const datePublished = (data.datePublished ?? data.date ?? new Date().toISOString().slice(0, 10)) as string;
  const dateModified = (data.dateModified ?? data.date ?? datePublished) as string;

  // Handle both category and tags[0]
  const tags = (data.tags as string[] | undefined) ?? [];
  const category = (data.category ?? tags[0] ?? 'wellness') as string;

  // Estimate readTime if not provided (avg 200 wpm)
  const readTime = (data.readTime as number | undefined) ?? Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    datePublished,
    dateModified,
    author,
    category,
    readTime,
    featured: data.featured as boolean | undefined,
    coverImage: data.coverImage as string | undefined,
    faq: (data.faq as BlogFaq[]) ?? [],
    sources: (data.sources as BlogSource[]) ?? [],
    checkedBy: data.checkedBy as string | undefined,
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
    .map((f) => {
      const { content, ...meta } = parsePost(f);
      void content;
      return meta;
    })
    .sort(
      (a, b) =>
        new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  return parsePost(filename);
}

export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

export function extractHeadings(content: string): { id: string; text: string }[] {
  const headingRegex = /^## (.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ id, text });
  }

  return headings;
}
