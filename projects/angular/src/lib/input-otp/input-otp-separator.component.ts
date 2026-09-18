import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avInputOtpSeparatorClasses } from './input-otp.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-input-otp-separator]',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'input-otp-separator',
  },
})
export class AvInputOtpSeparatorComponent {
  protected readonly classes = computed(() => avInputOtpSeparatorClasses());
}
