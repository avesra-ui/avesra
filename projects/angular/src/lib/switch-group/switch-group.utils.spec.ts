import { avSwitchGroupClasses } from './switch-group.utils';

describe('avSwitchGroupClasses', () => {
  it('should return base and default orientation classes', () => {
    expect(avSwitchGroupClasses()).toBe('av-switch-group av-switch-group--vertical');
  });

  it('should apply horizontal orientation', () => {
    expect(avSwitchGroupClasses({ orientation: 'horizontal' })).toBe(
      'av-switch-group av-switch-group--horizontal',
    );
  });
});
