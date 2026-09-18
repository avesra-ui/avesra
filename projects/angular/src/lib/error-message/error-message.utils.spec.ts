import { avErrorMessageClasses } from './error-message.utils';

describe('avErrorMessageClasses', () => {
  it('should return base class', () => {
    expect(avErrorMessageClasses()).toBe('av-error-message');
  });
});
