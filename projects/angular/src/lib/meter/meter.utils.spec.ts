import {
  clampMeterValue,
  formatMeterValue,
  getMeterPercentage,
  avMeterClasses,
  avMeterFillClasses,
  avMeterOutputClasses,
  avMeterTrackClasses,
} from './meter.utils';

describe('meter.utils', () => {
  it('should return default meter classes', () => {
    expect(avMeterClasses()).toBe('av-meter av-meter--accent av-meter--md');
  });

  it('should return color and size modifier classes', () => {
    expect(avMeterClasses({ color: 'danger', size: 'sm' })).toBe(
      'av-meter av-meter--danger av-meter--sm',
    );
    expect(avMeterClasses({ color: 'success', size: 'lg' })).toBe(
      'av-meter av-meter--success av-meter--lg',
    );
  });

  it('should return element classes', () => {
    expect(avMeterOutputClasses()).toBe('av-meter__output');
    expect(avMeterTrackClasses()).toBe('av-meter__track');
    expect(avMeterFillClasses()).toBe('av-meter__fill');
  });

  it('should clamp values to the range', () => {
    expect(clampMeterValue(-10, 0, 100)).toBe(0);
    expect(clampMeterValue(150, 0, 100)).toBe(100);
    expect(clampMeterValue(40, 0, 100)).toBe(40);
  });

  it('should compute percentage', () => {
    expect(getMeterPercentage(50, 0, 100)).toBe(50);
    expect(getMeterPercentage(750, 0, 1000)).toBe(75);
    expect(getMeterPercentage(10, 10, 10)).toBe(0);
  });

  it('should format values with Intl options', () => {
    expect(formatMeterValue(60)).toBe(new Intl.NumberFormat(undefined).format(60));
    expect(
      formatMeterValue(750, { style: 'currency', currency: 'USD' }),
    ).toBe(new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(750));
  });
});
