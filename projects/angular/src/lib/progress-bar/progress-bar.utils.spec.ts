import {
  clampProgressBarValue,
  formatProgressBarValue,
  getProgressBarPercentage,
  avProgressBarClasses,
  avProgressBarFillClasses,
  avProgressBarOutputClasses,
  avProgressBarTrackClasses,
} from './progress-bar.utils';

describe('progress-bar.utils', () => {
  it('should return default progress bar classes', () => {
    expect(avProgressBarClasses()).toBe('av-progress-bar av-progress-bar--accent av-progress-bar--md');
  });

  it('should return color and size modifier classes', () => {
    expect(avProgressBarClasses({ color: 'danger', size: 'sm' })).toBe(
      'av-progress-bar av-progress-bar--danger av-progress-bar--sm',
    );
    expect(avProgressBarClasses({ color: 'success', size: 'lg' })).toBe(
      'av-progress-bar av-progress-bar--success av-progress-bar--lg',
    );
  });

  it('should return element classes', () => {
    expect(avProgressBarOutputClasses()).toBe('av-progress-bar__output');
    expect(avProgressBarTrackClasses()).toBe('av-progress-bar__track');
    expect(avProgressBarFillClasses()).toBe('av-progress-bar__fill');
  });

  it('should clamp values to the range', () => {
    expect(clampProgressBarValue(-10, 0, 100)).toBe(0);
    expect(clampProgressBarValue(150, 0, 100)).toBe(100);
    expect(clampProgressBarValue(40, 0, 100)).toBe(40);
  });

  it('should compute percentage', () => {
    expect(getProgressBarPercentage(50, 0, 100)).toBe(50);
    expect(getProgressBarPercentage(750, 0, 1000)).toBe(75);
    expect(getProgressBarPercentage(10, 10, 10)).toBe(0);
  });

  it('should format values with Intl options', () => {
    expect(formatProgressBarValue(60)).toBe(new Intl.NumberFormat(undefined).format(60));
    expect(
      formatProgressBarValue(750, { style: 'currency', currency: 'USD' }),
    ).toBe(
      new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(750),
    );
  });
});
