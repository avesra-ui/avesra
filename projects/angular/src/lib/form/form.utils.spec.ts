import { avFormClasses } from './form.utils';

describe('avFormClasses', () => {
  it('should return the base form class', () => {
    expect(avFormClasses()).toBe('av-form');
  });
});
