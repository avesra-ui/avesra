export type AvInputOtpVariant = 'primary' | 'secondary';
export type AvInputOtpTextAlign = 'left' | 'center' | 'right';
export type AvInputOtpInputMode =
  | 'numeric'
  | 'text'
  | 'decimal'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';

export interface AvInputOtpClassOptions {
  variant?: AvInputOtpVariant;
  inputClass?: string;
  containerClass?: string;
}

export const AV_REGEXP_ONLY_DIGITS = '^\\d+$';
export const AV_REGEXP_ONLY_CHARS = '^[a-zA-Z]+$';
export const AV_REGEXP_ONLY_DIGITS_AND_CHARS = '^[a-zA-Z0-9]+$';

const AV_INPUT_OTP_BASE = 'av-input-otp';
const AV_INPUT_OTP_CONTAINER = 'av-input-otp__container';
const AV_INPUT_OTP_GROUP = 'av-input-otp__group';
const AV_INPUT_OTP_SLOT = 'av-input-otp__slot';
const AV_INPUT_OTP_SLOT_VALUE = 'av-input-otp__slot-value';
const AV_INPUT_OTP_SLOT_PLACEHOLDER = 'av-input-otp__slot-placeholder';
const AV_INPUT_OTP_CARET = 'av-input-otp__caret';
const AV_INPUT_OTP_SEPARATOR = 'av-input-otp__separator';
const AV_INPUT_OTP_INPUT = 'av-input-otp__input';

export function avInputOtpClasses(options: AvInputOtpClassOptions = {}): string {
  const { variant = 'primary' } = options;

  return [AV_INPUT_OTP_BASE, `${AV_INPUT_OTP_BASE}--${variant}`].join(' ');
}

export function avInputOtpContainerClasses(containerClass?: string): string {
  return [AV_INPUT_OTP_CONTAINER, containerClass].filter(Boolean).join(' ');
}

export function avInputOtpGroupClasses(): string {
  return AV_INPUT_OTP_GROUP;
}

export function avInputOtpSlotClasses(): string {
  return AV_INPUT_OTP_SLOT;
}

export function avInputOtpSlotValueClasses(): string {
  return AV_INPUT_OTP_SLOT_VALUE;
}

export function avInputOtpSlotPlaceholderClasses(): string {
  return AV_INPUT_OTP_SLOT_PLACEHOLDER;
}

export function avInputOtpCaretClasses(): string {
  return AV_INPUT_OTP_CARET;
}

export function avInputOtpSeparatorClasses(): string {
  return AV_INPUT_OTP_SEPARATOR;
}

export function avInputOtpInputClasses(inputClass?: string): string {
  return [AV_INPUT_OTP_INPUT, inputClass].filter(Boolean).join(' ');
}

const KNOWN_CHAR_PATTERNS: Record<string, RegExp> = {
  [AV_REGEXP_ONLY_DIGITS]: /^\d$/,
  [AV_REGEXP_ONLY_CHARS]: /^[a-zA-Z]$/,
  [AV_REGEXP_ONLY_DIGITS_AND_CHARS]: /^[a-zA-Z0-9]$/,
};

export function avCreateOtpCharPattern(pattern?: string): RegExp | null {
  if (!pattern) {
    return null;
  }

  if (KNOWN_CHAR_PATTERNS[pattern]) {
    return KNOWN_CHAR_PATTERNS[pattern];
  }

  if (pattern.startsWith('^') && pattern.endsWith('$')) {
    const inner = pattern.slice(1, -1).replace(/[+*?]$/, '');

    try {
      return new RegExp(`^${inner}$`);
    } catch {
      return null;
    }
  }

  try {
    return new RegExp(pattern);
  } catch {
    return null;
  }
}

export function avFilterOtpValue(
  value: string,
  pattern: RegExp | null,
  maxLength: number,
): string {
  const chars = value.split('').filter((char) => !pattern || pattern.test(char));

  return chars.join('').slice(0, maxLength);
}

export function avTransformPastedOtpValue(
  pasted: string,
  transformer?: (text: string) => string,
): string {
  return transformer ? transformer(pasted) : pasted;
}

export function avResolveFocusIndex(
  slotIndex: number,
  valueLength: number,
  textAlign: AvInputOtpTextAlign,
): number {
  switch (textAlign) {
    case 'right':
      return Math.min(slotIndex + 1, valueLength);
    case 'center':
      return Math.min(slotIndex, valueLength);
    default:
      return Math.min(slotIndex, valueLength);
  }
}

export function avIsPrintableKeyBlocked(
  event: KeyboardEvent,
  input: HTMLInputElement,
  value: string,
  maxLength: number,
  pattern: RegExp | null,
): boolean {
  if (event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) {
    return false;
  }

  const start = input.selectionStart ?? value.length;
  const end = input.selectionEnd ?? start;
  const hasSelection = start !== end;
  const atMaxLength = value.length >= maxLength;
  const isAllowed = !pattern || pattern.test(event.key);

  return !isAllowed || (atMaxLength && !hasSelection);
}
