import {
  avCreateOtpCharPattern,
  avFilterOtpValue,
  avInputOtpClasses,
  avIsPrintableKeyBlocked,
  avResolveFocusIndex,
  avTransformPastedOtpValue,
  AV_REGEXP_ONLY_DIGITS,
} from './input-otp.utils';

describe('avInputOtpClasses', () => {
  it('should return base and variant classes', () => {
    expect(avInputOtpClasses()).toBe('av-input-otp av-input-otp--primary');
    expect(avInputOtpClasses({ variant: 'secondary' })).toBe(
      'av-input-otp av-input-otp--secondary',
    );
  });
});

describe('avCreateOtpCharPattern', () => {
  it('should map known digit pattern', () => {
    expect(avCreateOtpCharPattern(AV_REGEXP_ONLY_DIGITS)?.test('5')).toBeTrue();
    expect(avCreateOtpCharPattern(AV_REGEXP_ONLY_DIGITS)?.test('a')).toBeFalse();
  });
});

describe('avFilterOtpValue', () => {
  it('should filter non-matching characters and enforce max length', () => {
    const pattern = avCreateOtpCharPattern(AV_REGEXP_ONLY_DIGITS);

    expect(avFilterOtpValue('12a34b567', pattern, 6)).toBe('123456');
  });
});

describe('avTransformPastedOtpValue', () => {
  it('should apply paste transformer when provided', () => {
    expect(avTransformPastedOtpValue('12-34', (text) => text.replaceAll('-', ''))).toBe('1234');
  });
});

describe('avResolveFocusIndex', () => {
  it('should resolve caret index based on text alignment', () => {
    expect(avResolveFocusIndex(2, 2, 'left')).toBe(2);
    expect(avResolveFocusIndex(2, 2, 'right')).toBe(2);
    expect(avResolveFocusIndex(2, 1, 'right')).toBe(1);
  });
});

describe('avIsPrintableKeyBlocked', () => {
  it('should block disallowed keys and input at max length', () => {
    const input = document.createElement('input');
    input.value = '123456';
    input.setSelectionRange(6, 6);

    const digitPattern = avCreateOtpCharPattern(AV_REGEXP_ONLY_DIGITS)!;
    const letterEvent = new KeyboardEvent('keydown', { key: 'a' });
    const digitEvent = new KeyboardEvent('keydown', { key: '7' });

    expect(avIsPrintableKeyBlocked(letterEvent, input, '123456', 6, digitPattern)).toBeTrue();
    expect(avIsPrintableKeyBlocked(digitEvent, input, '123456', 6, digitPattern)).toBeTrue();
  });
});
