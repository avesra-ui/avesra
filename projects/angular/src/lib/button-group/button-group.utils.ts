export type AvButtonGroupOrientation = 'horizontal' | 'vertical';

export interface AvButtonGroupClassOptions {
  orientation?: AvButtonGroupOrientation;
  fullWidth?: boolean;
}

const AV_BUTTON_GROUP_BASE = 'av-button-group';

export function avButtonGroupClasses(options: AvButtonGroupClassOptions = {}): string {
  const { orientation = 'horizontal', fullWidth = false } = options;

  return [
    AV_BUTTON_GROUP_BASE,
    `${AV_BUTTON_GROUP_BASE}--${orientation}`,
    fullWidth && `${AV_BUTTON_GROUP_BASE}--full-width`,
  ]
    .filter(Boolean)
    .join(' ');
}
