import {
  syncDisclosurePanelHeight,
  avDisclosureBodyClasses,
  avDisclosureClasses,
  avDisclosureContentClasses,
  avDisclosureHeadingClasses,
  avDisclosureIndicatorClasses,
  avDisclosureTriggerClasses,
} from './disclosure.utils';

describe('disclosure utils', () => {
  it('should return BEM class names', () => {
    expect(avDisclosureClasses()).toBe('av-disclosure');
    expect(avDisclosureTriggerClasses()).toBe('av-disclosure__trigger');
    expect(avDisclosureContentClasses()).toBe('av-disclosure__content');
    expect(avDisclosureIndicatorClasses()).toBe('av-disclosure__indicator');
    expect(avDisclosureBodyClasses()).toBe('av-disclosure__body');
    expect(avDisclosureHeadingClasses()).toBe('av-disclosure__heading');
  });

  it('should sync panel height when expanded', () => {
    const panel = document.createElement('div');
    panel.style.setProperty('--av-disclosure-panel-height', '0px');
    const inner = document.createElement('div');
    inner.style.height = '80px';
    panel.appendChild(inner);
    document.body.appendChild(panel);

    syncDisclosurePanelHeight(panel, true, false);
    expect(panel.style.getPropertyValue('--av-disclosure-panel-height')).toBe('80px');

    document.body.removeChild(panel);
  });
});
