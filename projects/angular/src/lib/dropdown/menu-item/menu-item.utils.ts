export type AvDropdownMenuItemVariant = 'default' | 'danger';

export interface AvDropdownMenuItemClassOptions {
  variant?: AvDropdownMenuItemVariant;
  extraClass?: string;
}

const AV_DROPDOWN_MENU_ITEM = 'av-dropdown-menu-item';
const AV_DROPDOWN_MENU_ITEM_INDICATOR = 'av-dropdown-menu-item__indicator';
const AV_DROPDOWN_MENU_ITEM_INDICATOR_SUBMENU = 'av-dropdown-menu-item__indicator--submenu';

export function avDropdownMenuItemClasses(options: AvDropdownMenuItemClassOptions = {}): string {
  const { variant = 'default', extraClass = '' } = options;

  const parts = [
    AV_DROPDOWN_MENU_ITEM,
    variant !== 'default' ? `${AV_DROPDOWN_MENU_ITEM}--${variant}` : null,
  ].filter(Boolean) as string[];
  const trimmed = extraClass.trim();

  if (trimmed) {
    parts.push(trimmed);
  }

  return parts.join(' ');
}

export function avDropdownMenuItemIndicatorClasses(): string {
  return AV_DROPDOWN_MENU_ITEM_INDICATOR;
}

export function avDropdownMenuItemSubmenuIndicatorClasses(): string {
  return AV_DROPDOWN_MENU_ITEM_INDICATOR_SUBMENU;
}
