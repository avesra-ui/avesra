import { avKbdAbbrClasses, avKbdClasses, avKbdContentClasses } from './kbd.utils';

describe('avKbdClasses', () => {
  it('should return base class for default variant', () => {
    expect(avKbdClasses()).toBe('av-kbd');
  });

  it('should apply light variant class', () => {
    expect(avKbdClasses({ variant: 'light' })).toBe('av-kbd av-kbd--light');
  });
});

describe('avKbdAbbrClasses', () => {
  it('should return the abbr class', () => {
    expect(avKbdAbbrClasses()).toBe('av-kbd__abbr');
  });
});

describe('avKbdContentClasses', () => {
  it('should return the content class', () => {
    expect(avKbdContentClasses()).toBe('av-kbd__content');
  });
});
