const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix public asset paths for GitHub Pages project sites (/portfolio). */
export function assetPath(path: string): string {
  if (!path.startsWith('/')) return path;
  if (basePath && path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}
