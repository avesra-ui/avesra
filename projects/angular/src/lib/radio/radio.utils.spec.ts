import { avRadioClasses } from './radio.utils';

describe('avRadioClasses', () => {
  it('should return base class by default', () => {
    expect(avRadioClasses()).toBe('av-radio av-radio--primary');
  });

  it('should apply variant modifier', () => {
    expect(avRadioClasses({ variant: 'secondary' })).toBe('av-radio av-radio--secondary');
  });
});
