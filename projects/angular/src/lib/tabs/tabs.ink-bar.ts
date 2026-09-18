import type { AvTabsOrientation, AvTabsVariant } from './tabs.utils';

export interface AvTabsIndicatorStyle {
  translate: string;
  width: string | null;
  height: string | null;
}

export const AV_TABS_HIDDEN_INDICATOR_STYLE: AvTabsIndicatorStyle = {
  translate: '0px 0px',
  width: '0px',
  height: '0px',
};

/**
 * Computes ink-bar geometry for the selected tab relative to the tab list.
 * Mirrors Material's MatInkBar responsibility without owning DOM nodes.
 */
export class AvTabsInkBar {
  alignToElement(
    listEl: HTMLElement,
    tabEl: HTMLElement | null,
    variant: AvTabsVariant,
    orientation: AvTabsOrientation,
  ): AvTabsIndicatorStyle {
    if (!tabEl) {
      return AV_TABS_HIDDEN_INDICATOR_STYLE;
    }

    const listRect = listEl.getBoundingClientRect();
    const tabRect = tabEl.getBoundingClientRect();
    const x = tabRect.left - listRect.left + listEl.scrollLeft;
    const y = tabRect.top - listRect.top + listEl.scrollTop;

    if (variant === 'secondary' && orientation === 'horizontal') {
      return {
        translate: `${x}px 0px`,
        width: `${tabRect.width}px`,
        height: null,
      };
    }

    if (variant === 'secondary' && orientation === 'vertical') {
      return {
        translate: `0px ${y}px`,
        width: null,
        height: `${tabRect.height}px`,
      };
    }

    return {
      translate: `${x}px ${y}px`,
      width: `${tabRect.width}px`,
      height: `${tabRect.height}px`,
    };
  }
}
