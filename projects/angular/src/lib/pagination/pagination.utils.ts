export type AvPaginationSize = 'sm' | 'md' | 'lg';

export interface AvPaginationClassOptions {
  size?: AvPaginationSize;
}

const AV_PAGINATION_BASE = 'av-pagination';
const AV_PAGINATION_SUMMARY_BASE = 'av-pagination__summary';
const AV_PAGINATION_CONTENT_BASE = 'av-pagination__content';
const AV_PAGINATION_ITEM_BASE = 'av-pagination__item';
const AV_PAGINATION_LINK_BASE = 'av-pagination__link';
const AV_PAGINATION_ELLIPSIS_BASE = 'av-pagination__ellipsis';

export function avPaginationClasses(options: AvPaginationClassOptions = {}): string {
  const { size = 'md' } = options;

  return [AV_PAGINATION_BASE, `${AV_PAGINATION_BASE}--${size}`].join(' ');
}

export function avPaginationSummaryClasses(): string {
  return AV_PAGINATION_SUMMARY_BASE;
}

export function avPaginationContentClasses(): string {
  return `${AV_PAGINATION_CONTENT_BASE} m-0 list-none p-0`;
}

export function avPaginationItemClasses(): string {
  return AV_PAGINATION_ITEM_BASE;
}

export function avPaginationLinkClasses(nav = false): string {
  return nav
    ? `${AV_PAGINATION_LINK_BASE} ${AV_PAGINATION_LINK_BASE}--nav`
    : AV_PAGINATION_LINK_BASE;
}

export function avPaginationEllipsisClasses(): string {
  return AV_PAGINATION_ELLIPSIS_BASE;
}

export function getPaginationRange(
  currentPage: number,
  totalPages: number,
): (number | 'ellipsis')[] {
  if (totalPages <= 0) {
    return [];
  }

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages: (number | 'ellipsis')[] = [1];

  if (currentPage > 3) {
    pages.push('ellipsis');
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (currentPage < totalPages - 2) {
    pages.push('ellipsis');
  }

  pages.push(totalPages);

  return pages;
}
