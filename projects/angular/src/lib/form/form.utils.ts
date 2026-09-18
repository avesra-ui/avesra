const AV_FORM_BASE = 'av-form';

export type AvFormValidationBehavior = 'native' | 'aria';

export type AvFormValidationErrors = Record<string, string | string[]>;

export function avFormClasses(): string {
  return AV_FORM_BASE;
}
