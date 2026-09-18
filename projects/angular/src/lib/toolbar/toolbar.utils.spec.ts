import { avToolbarClasses } from './toolbar.utils';

describe('avToolbarClasses', () => {
  it('should return horizontal classes by default', () => {
    expect(avToolbarClasses()).toBe('av-toolbar av-toolbar--horizontal');
  });

  it('should apply vertical and attached modifiers', () => {
    expect(avToolbarClasses({ orientation: 'vertical', attached: true })).toBe(
      'av-toolbar av-toolbar--vertical av-toolbar--attached',
    );
  });
});
