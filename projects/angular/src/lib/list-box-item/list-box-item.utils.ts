export type AvListBoxItemVariant = 'default' | 'danger';

export interface AvListBoxItemClassOptions {
  variant?: AvListBoxItemVariant;
}

const AV_LIST_BOX_ITEM = 'av-list-box-item';
const AV_LIST_BOX_ITEM_INDICATOR = 'av-list-box-item__indicator';

export function avListBoxItemClasses(options: AvListBoxItemClassOptions = {}): string {
  const { variant = 'default' } = options;

  return [AV_LIST_BOX_ITEM, variant !== 'default' ? `${AV_LIST_BOX_ITEM}--${variant}` : null]
    .filter(Boolean)
    .join(' ');
}

export function avListBoxItemIndicatorClasses(): string {
  return AV_LIST_BOX_ITEM_INDICATOR;
}
