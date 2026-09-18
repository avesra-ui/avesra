import { avDateFieldClasses } from './date-field.utils';

describe('avDateFieldClasses', () => {
  it('returns base class by default', () => {
    expect(avDateFieldClasses()).toBe('av-date-field');
  });

  it('adds full-width modifier', () => {
    expect(avDateFieldClasses({ fullWidth: true })).toBe(
      'av-date-field av-date-field--full-width',
    );
  });
});
