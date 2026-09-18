export type AvMenuItemVariant = 'default' | 'danger';

export interface AvMenuItemClassOptions {
  variant?: AvMenuItemVariant;
  extraClass?: string;
}

const AV_MENU_ITEM = 'av-menu-item';
const AV_MENU_ITEM_INDICATOR = 'av-menu-item__indicator';
const AV_MENU_ITEM_INDICATOR_SUBMENU = 'av-menu-item__indicator--submenu';

export function avMenuItemClasses(options: AvMenuItemClassOptions = {}): string {
  const { variant = 'default', extraClass = '' } = options;

  const parts = [AV_MENU_ITEM, variant !== 'default' ? `${AV_MENU_ITEM}--${variant}` : null].filter(
    Boolean,
  ) as string[];
  const trimmed = extraClass.trim();

  if (trimmed) {
    parts.push(trimmed);
  }

  return parts.join(' ');
}

export function avMenuItemIndicatorClasses(): string {
  return AV_MENU_ITEM_INDICATOR;
}

export function avMenuItemSubmenuIndicatorClasses(): string {
  return AV_MENU_ITEM_INDICATOR_SUBMENU;
}
