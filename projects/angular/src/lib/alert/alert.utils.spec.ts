import {
  avAlertClasses,
  avAlertContentClasses,
  avAlertDescriptionClasses,
  avAlertIndicatorClasses,
  avAlertTitleClasses,
} from './alert.utils';

describe('alert.utils', () => {
  it('should return default alert classes', () => {
    expect(avAlertClasses()).toBe('av-alert av-alert--default');
  });

  it('should return status modifier classes', () => {
    expect(avAlertClasses({ status: 'accent' })).toBe('av-alert av-alert--accent');
    expect(avAlertClasses({ status: 'success' })).toBe('av-alert av-alert--success');
    expect(avAlertClasses({ status: 'warning' })).toBe('av-alert av-alert--warning');
    expect(avAlertClasses({ status: 'danger' })).toBe('av-alert av-alert--danger');
  });

  it('should return element classes', () => {
    expect(avAlertIndicatorClasses()).toBe('av-alert__indicator');
    expect(avAlertContentClasses()).toBe('av-alert__content');
    expect(avAlertTitleClasses()).toBe('av-alert__title');
    expect(avAlertDescriptionClasses()).toBe('av-alert__description');
  });
});
