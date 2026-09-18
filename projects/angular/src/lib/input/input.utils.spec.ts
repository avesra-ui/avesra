import { avInputClasses } from './input.utils';

describe('avInputClasses', () => {
  it('should return default classes', () => {
    expect(avInputClasses()).toBe('av-input av-input--primary');
  });

  it('should apply variant modifier', () => {
    expect(avInputClasses({ variant: 'secondary' })).toBe('av-input av-input--secondary');
  });

  it('should apply full width modifier', () => {
    expect(avInputClasses({ fullWidth: true })).toBe('av-input av-input--primary av-input--full-width');
  });

  it('should combine variant and full width modifiers', () => {
    expect(avInputClasses({ variant: 'secondary', fullWidth: true })).toBe(
      'av-input av-input--secondary av-input--full-width',
    );
  });
});
