import type { NextConfig } from "next";

// Set GITHUB_PAGES_BASE_PATH=/repo-name when building for GitHub Pages project sites.
// Leave unset for Vercel, custom domain, or username.github.io root sites.
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
