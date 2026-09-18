import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avInputOtpGroupClasses } from './input-otp.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-input-otp-group]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'input-otp-group',
  },
})
export class AvInputOtpGroupComponent {
  protected readonly classes = computed(() => avInputOtpGroupClasses());
}
