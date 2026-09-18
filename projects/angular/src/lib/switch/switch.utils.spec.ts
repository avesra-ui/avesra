import { avSwitchClasses } from './switch.utils';

describe('avSwitchClasses', () => {
  it('should return base and default size classes', () => {
    expect(avSwitchClasses()).toBe('av-switch av-switch--md');
  });

  it('should apply size modifier', () => {
    expect(avSwitchClasses({ size: 'lg' })).toBe('av-switch av-switch--lg');
  });
});
