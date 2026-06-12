/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://checkapp.today',
  outDir: './out',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/_not-found'],
  additionalPaths: async () => {
    const fs = require('fs');
    const path = require('path');
    const blogDir = path.join(process.cwd(), 'content/blog');

    if (!fs.existsSync(blogDir)) return [];

    const slugs = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
      .map((f) => f.replace(/\.mdx$/, ''));

    return slugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
