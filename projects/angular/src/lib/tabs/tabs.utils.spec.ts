import {
  avTabsClasses,
  avTabsIndicatorClasses,
  avTabsListClasses,
  avTabsListContainerClasses,
  avTabsListContainerScrollerClasses,
  avTabsListContainerScrollNextClasses,
  avTabsListContainerScrollPrevClasses,
  avTabsPanelClasses,
  avTabsSeparatorClasses,
  avTabsTabClasses,
} from './tabs.utils';

describe('tabs utils', () => {
  it('should return default tabs classes', () => {
    expect(avTabsClasses()).toBe('av-tabs');
  });

  it('should return secondary variant classes', () => {
    expect(avTabsClasses({ variant: 'secondary' })).toBe('av-tabs av-tabs--secondary');
  });

  it('should ignore orientation in class strings (data-orientation is the source of truth)', () => {
    expect(avTabsClasses({ orientation: 'vertical' })).toBe('av-tabs');
    expect(avTabsClasses({ variant: 'secondary', orientation: 'vertical' })).toBe(
      'av-tabs av-tabs--secondary',
    );
  });

  it('should return slot classes', () => {
    expect(avTabsListContainerClasses()).toBe('av-tabs__list-container');
    expect(avTabsListContainerClasses('rounded-xl')).toBe('av-tabs__list-container rounded-xl');
    expect(avTabsListContainerScrollerClasses()).toBe('av-tabs__list-container__scroller');
    expect(avTabsListContainerScrollPrevClasses()).toBe('av-tabs__list-container__scroll-prev');
    expect(avTabsListContainerScrollNextClasses()).toBe('av-tabs__list-container__scroll-next');
    expect(avTabsListClasses()).toBe('av-tabs__list');
    expect(avTabsTabClasses()).toBe('av-tabs__tab');
    expect(avTabsPanelClasses()).toBe('av-tabs__panel');
    expect(avTabsIndicatorClasses()).toBe('av-tabs__indicator');
    expect(avTabsSeparatorClasses()).toBe('av-tabs__separator');
  });
});
