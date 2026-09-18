export type AvCheckboxGroupVariant = 'primary' | 'secondary';

export interface AvCheckboxGroupClassOptions {
  variant?: AvCheckboxGroupVariant;
}

const AV_CHECKBOX_GROUP_BASE = 'av-checkbox-group';

export function avCheckboxGroupClasses(options: AvCheckboxGroupClassOptions = {}): string {
  const { variant = 'primary' } = options;

  return [AV_CHECKBOX_GROUP_BASE, `${AV_CHECKBOX_GROUP_BASE}--${variant}`].join(' ');
}
