import {
  getPaginationRange,
  avPaginationClasses,
  avPaginationContentClasses,
  avPaginationEllipsisClasses,
  avPaginationItemClasses,
  avPaginationLinkClasses,
  avPaginationSummaryClasses,
} from './pagination.utils';

describe('pagination.utils', () => {
  it('should build BEM class strings', () => {
    expect(avPaginationClasses()).toBe('av-pagination av-pagination--md');
    expect(avPaginationClasses({ size: 'lg' })).toBe('av-pagination av-pagination--lg');
    expect(avPaginationSummaryClasses()).toBe('av-pagination__summary');
    expect(avPaginationContentClasses()).toBe(
      'av-pagination__content m-0 list-none p-0',
    );
    expect(avPaginationItemClasses()).toBe('av-pagination__item');
    expect(avPaginationLinkClasses()).toBe('av-pagination__link');
    expect(avPaginationLinkClasses(true)).toBe(
      'av-pagination__link av-pagination__link--nav',
    );
    expect(avPaginationEllipsisClasses()).toBe('av-pagination__ellipsis');
  });

  it('should return all pages when total is 7 or fewer', () => {
    expect(getPaginationRange(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(getPaginationRange(4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should build a compact range with ellipsis for large totals', () => {
    expect(getPaginationRange(1, 12)).toEqual([1, 2, 'ellipsis', 12]);
    expect(getPaginationRange(5, 12)).toEqual([1, 'ellipsis', 4, 5, 6, 'ellipsis', 12]);
    expect(getPaginationRange(12, 12)).toEqual([1, 'ellipsis', 11, 12]);
  });

  it('should return empty range for non-positive totals', () => {
    expect(getPaginationRange(1, 0)).toEqual([]);
  });
});
