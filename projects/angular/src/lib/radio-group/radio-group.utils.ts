export type AvRadioGroupVariant = 'primary' | 'secondary';
export type AvRadioGroupOrientation = 'horizontal' | 'vertical';

export interface AvRadioGroupClassOptions {
  variant?: AvRadioGroupVariant;
  orientation?: AvRadioGroupOrientation;
}

const AV_RADIO_GROUP_BASE = 'av-radio-group';

export function avRadioGroupClasses(options: AvRadioGroupClassOptions = {}): string {
  const { variant = 'primary', orientation = 'vertical' } = options;

  return [
    AV_RADIO_GROUP_BASE,
    `${AV_RADIO_GROUP_BASE}--${variant}`,
    `${AV_RADIO_GROUP_BASE}--${orientation}`,
  ].join(' ');
}
