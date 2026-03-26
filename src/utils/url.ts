/**
 * Prepends the Astro BASE_URL to an internal path so the site works
 * correctly when deployed under a sub-path (e.g. /my-app/).
 *
 * External URLs and special protocols (http, https, mailto:, tel:, #, //)
 * are returned unchanged.
 *
 * Usage:
 *   import { url } from '@/utils/url';
 *   <a href={url('/contact')}>…</a>
 *   <a href={url(somePathFromStrings)}>…</a>
 */
const base = import.meta.env.BASE_URL; // always ends with '/'

export function url(path: string): string {
  if (
    path.startsWith('http') ||
    path.startsWith('//') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path;
  }
  // '/' → bare base URL
  if (path === '/') return base;
  // '/about' → '<base>about'  (BASE_URL ends with '/', strip leading '/')
  return `${base}${path.slice(1)}`;
}
