/** Base path for GitHub Pages project sites (e.g. /checkapp-website). Empty on Vercel/local. */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path;
  if (!basePath) return path;
  if (path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}
