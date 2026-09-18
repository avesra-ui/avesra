import {
  avBreadcrumbsClasses,
  avBreadcrumbsItemClasses,
  avBreadcrumbsLinkClasses,
  avBreadcrumbsListClasses,
  avBreadcrumbsSeparatorClasses,
} from './breadcrumbs.utils';

describe('breadcrumbs utils', () => {
  it('should return BEM class names', () => {
    expect(avBreadcrumbsClasses()).toBe('av-breadcrumbs');
    expect(avBreadcrumbsListClasses()).toBe('av-breadcrumbs__list');
    expect(avBreadcrumbsItemClasses()).toBe('av-breadcrumbs__item');
    expect(avBreadcrumbsLinkClasses()).toBe('av-breadcrumbs__link');
    expect(avBreadcrumbsSeparatorClasses()).toBe('av-breadcrumbs__separator');
  });
});
