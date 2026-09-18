import { avFieldErrorClasses } from './field-error.utils';

describe('avFieldErrorClasses', () => {
  it('should return base class', () => {
    expect(avFieldErrorClasses()).toBe('av-field-error');
  });
});
