export type AvTabsVariant = 'default' | 'secondary';

export type AvTabsOrientation = 'horizontal' | 'vertical';

export interface AvTabsClassOptions {
  variant?: AvTabsVariant;
  orientation?: AvTabsOrientation;
}

const AV_TABS_BASE = 'av-tabs';
const AV_TABS_LIST_CONTAINER_BASE = 'av-tabs__list-container';
const AV_TABS_LIST_CONTAINER_SCROLLER = 'av-tabs__list-container__scroller';
const AV_TABS_LIST_CONTAINER_SCROLL_PREV = 'av-tabs__list-container__scroll-prev';
const AV_TABS_LIST_CONTAINER_SCROLL_NEXT = 'av-tabs__list-container__scroll-next';
const AV_TABS_LIST_BASE = 'av-tabs__list';
const AV_TABS_TAB_BASE = 'av-tabs__tab';
const AV_TABS_PANEL_BASE = 'av-tabs__panel';
const AV_TABS_INDICATOR_BASE = 'av-tabs__indicator';
const AV_TABS_SEPARATOR_BASE = 'av-tabs__separator';

/** Orientation is applied via `data-orientation` on hosts; CSS keys off that attribute. */
export function avTabsClasses(options: AvTabsClassOptions = {}): string {
  const { variant = 'default' } = options;

  return [AV_TABS_BASE, variant !== 'default' && `${AV_TABS_BASE}--${variant}`]
    .filter(Boolean)
    .join(' ');
}

export function avTabsListContainerClasses(extraClass = ''): string {
  return [AV_TABS_LIST_CONTAINER_BASE, extraClass].filter(Boolean).join(' ');
}

export function avTabsListContainerScrollerClasses(): string {
  return AV_TABS_LIST_CONTAINER_SCROLLER;
}

export function avTabsListContainerScrollPrevClasses(): string {
  return AV_TABS_LIST_CONTAINER_SCROLL_PREV;
}

export function avTabsListContainerScrollNextClasses(): string {
  return AV_TABS_LIST_CONTAINER_SCROLL_NEXT;
}

export function avTabsListClasses(): string {
  return AV_TABS_LIST_BASE;
}

export function avTabsTabClasses(): string {
  return AV_TABS_TAB_BASE;
}

export function avTabsPanelClasses(): string {
  return AV_TABS_PANEL_BASE;
}

export function avTabsIndicatorClasses(): string {
  return AV_TABS_INDICATOR_BASE;
}

export function avTabsSeparatorClasses(): string {
  return AV_TABS_SEPARATOR_BASE;
}
