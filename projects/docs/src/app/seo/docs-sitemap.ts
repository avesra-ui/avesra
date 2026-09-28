import { getDocumentedComponents } from '../config/docs-components.config';
import { AVESRA_SITE_ORIGIN } from './docs-seo.config';

const STATIC_PATHS = [
  '/',
  '/docs/introduction',
  '/docs/installation',
  '/docs/theming',
  '/docs/changelog',
  '/docs/components',
];

export function buildSitemapXml(): string {
  const paths = [...STATIC_PATHS, ...getDocumentedComponents().map((component) => component.path)];
  const urls = paths.map((path) => `  <url><loc>${AVESRA_SITE_ORIGIN}${path}</loc></url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
