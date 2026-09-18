const FALLBACK_HEADER_PX = 56;
const HEADING_GAP_PX = 20;

export function getDocsStickyOffsetPx(): number {
  const header = document.querySelector<HTMLElement>('app-docs-header');
  const height = header?.getBoundingClientRect().height ?? FALLBACK_HEADER_PX;

  return Math.round(height + HEADING_GAP_PX);
}

export function scrollDocsAnchorIntoView(
  id: string,
  behavior: ScrollBehavior = 'smooth',
): void {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - getDocsStickyOffsetPx();
  window.scrollTo({ top: Math.max(0, top), behavior });
}
