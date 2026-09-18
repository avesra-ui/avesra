import { avTimeFieldClasses } from './time-field.utils';

describe('avTimeFieldClasses', () => {
  it('returns base class by default', () => {
    expect(avTimeFieldClasses()).toBe('av-time-field');
  });

  it('adds full-width modifier', () => {
    expect(avTimeFieldClasses({ fullWidth: true })).toBe(
      'av-time-field av-time-field--full-width',
    );
  });
});
