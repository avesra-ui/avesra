import { avLabelClasses } from './label.utils';

describe('avLabelClasses', () => {
  it('should return base class by default', () => {
    expect(avLabelClasses()).toBe('av-label');
  });

  it('should append state modifier classes', () => {
    expect(
      avLabelClasses({
        required: true,
        disabled: true,
        invalid: true,
      }),
    ).toBe('av-label av-label--required av-label--disabled av-label--invalid');
  });
});
