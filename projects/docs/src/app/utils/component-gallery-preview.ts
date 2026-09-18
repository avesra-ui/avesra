/**
 * Helpers for the All Components gallery.
 * Live samples render in `app-component-gallery-preview`.
 */

export function categoryToTocId(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
