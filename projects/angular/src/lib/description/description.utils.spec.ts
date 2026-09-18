import { avDescriptionClasses } from './description.utils';

describe('avDescriptionClasses', () => {
  it('should return the base description class', () => {
    expect(avDescriptionClasses()).toBe('av-description');
  });
});
