export type AvInputGroupVariant = 'primary' | 'secondary';

export interface AvInputGroupClassOptions {
  variant?: AvInputGroupVariant;
  fullWidth?: boolean;
}

const AV_INPUT_GROUP_BASE = 'av-input-group';

export function avInputGroupClasses(options: AvInputGroupClassOptions = {}): string {
  const { variant = 'primary', fullWidth = false } = options;

  return [
    AV_INPUT_GROUP_BASE,
    `${AV_INPUT_GROUP_BASE}--${variant}`,
    fullWidth && `${AV_INPUT_GROUP_BASE}--full-width`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avInputGroupInputClasses(): string {
  return 'av-input-group__input';
}

export function avInputGroupPrefixClasses(): string {
  return 'av-input-group__prefix';
}

export function avInputGroupSuffixClasses(): string {
  return 'av-input-group__suffix';
}
