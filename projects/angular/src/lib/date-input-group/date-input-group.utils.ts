export type AvDateInputGroupVariant = 'primary' | 'secondary';

export type AvDateInputGroupClassOptions = {
  variant?: AvDateInputGroupVariant;
  fullWidth?: boolean;
};

export function avDateInputGroupClasses(options: AvDateInputGroupClassOptions = {}): string {
  const { variant = 'primary', fullWidth = false } = options;
  return [
    'av-date-input-group',
    `av-date-input-group--${variant}`,
    fullWidth ? 'av-date-input-group--full-width' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

export function avDateInputGroupInputClasses(): string {
  return 'av-date-input-group__input';
}

export function avDateInputGroupInputContainerClasses(): string {
  return 'av-date-input-group__input-container';
}

export function avDateInputGroupSegmentClasses(): string {
  return 'av-date-input-group__segment';
}

export function avDateInputGroupPrefixClasses(): string {
  return 'av-date-input-group__prefix';
}

export function avDateInputGroupSuffixClasses(): string {
  return 'av-date-input-group__suffix';
}
