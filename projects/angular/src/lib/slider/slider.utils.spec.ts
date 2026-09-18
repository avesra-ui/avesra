import {
  denormalizeSliderValue,
  formatSliderValues,
  normalizeSliderValue,
  percentToValue,
  snapToStep,
  valueToPercent,
  avSliderClasses,
} from './slider.utils';

describe('avSliderClasses', () => {
  it('should return base and orientation classes', () => {
    expect(avSliderClasses()).toBe('av-slider av-slider--horizontal');
    expect(avSliderClasses({ orientation: 'vertical' })).toBe('av-slider av-slider--vertical');
  });
});

describe('slider math utils', () => {
  it('should normalize and denormalize values', () => {
    expect(normalizeSliderValue(30)).toEqual([30]);
    expect(normalizeSliderValue([100, 500])).toEqual([100, 500]);
    expect(denormalizeSliderValue([30])).toBe(30);
    expect(denormalizeSliderValue([100, 500])).toEqual([100, 500]);
  });

  it('should convert between value and percent', () => {
    expect(valueToPercent(50, 0, 100)).toBe(0.5);
    expect(percentToValue(0.5, 0, 100, 1)).toBe(50);
  });

  it('should snap values to step', () => {
    expect(snapToStep(47, 0, 100, 10)).toBe(50);
  });

  it('should format output values', () => {
    expect(formatSliderValues([100, 500])).toBe('100 – 500');
  });
});
