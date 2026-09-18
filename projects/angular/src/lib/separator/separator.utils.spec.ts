import { avSeparatorClasses, avSeparatorContainerClasses, avSeparatorContentClasses, avSeparatorLineClasses } from './separator.utils';

describe('avSeparatorClasses', () => {
  it('should return base and default modifier classes', () => {
    expect(avSeparatorClasses()).toBe(
      'av-separator av-separator--horizontal av-separator--default',
    );
  });

  it('should apply orientation and variant classes', () => {
    expect(
      avSeparatorClasses({
        orientation: 'vertical',
        variant: 'secondary',
      }),
    ).toBe('av-separator av-separator--vertical av-separator--secondary');
  });
});

describe('avSeparatorContainerClasses', () => {
  it('should return container classes', () => {
    expect(avSeparatorContainerClasses()).toBe(
      'av-separator__container av-separator__container--horizontal',
    );
  });
});

describe('avSeparatorLineClasses', () => {
  it('should return line classes with defaults', () => {
    expect(avSeparatorLineClasses()).toBe(
      'av-separator__line av-separator__line--horizontal av-separator__line--default',
    );
  });

  it('should apply orientation and variant classes', () => {
    expect(
      avSeparatorLineClasses({
        orientation: 'vertical',
        variant: 'tertiary',
      }),
    ).toBe('av-separator__line av-separator__line--vertical av-separator__line--tertiary');
  });
});

describe('avSeparatorContentClasses', () => {
  it('should return content classes', () => {
    expect(avSeparatorContentClasses('vertical')).toBe(
      'av-separator__content av-separator__content--vertical',
    );
  });
});
