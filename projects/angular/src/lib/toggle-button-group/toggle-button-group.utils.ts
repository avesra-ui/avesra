export type AvToggleButtonGroupOrientation = 'horizontal' | 'vertical';

export interface AvToggleButtonGroupClassOptions {
  orientation?: AvToggleButtonGroupOrientation;
  fullWidth?: boolean;
  detached?: boolean;
}

const AV_TOGGLE_BUTTON_GROUP_BASE = 'av-toggle-button-group';

export function avToggleButtonGroupClasses(
  options: AvToggleButtonGroupClassOptions = {},
): string {
  const { orientation = 'horizontal', fullWidth = false, detached = false } = options;

  return [
    AV_TOGGLE_BUTTON_GROUP_BASE,
    `${AV_TOGGLE_BUTTON_GROUP_BASE}--${orientation}`,
    fullWidth && `${AV_TOGGLE_BUTTON_GROUP_BASE}--full-width`,
    detached && `${AV_TOGGLE_BUTTON_GROUP_BASE}--detached`,
  ]
    .filter(Boolean)
    .join(' ');
}
