import { Component, computed } from '@angular/core';

import { avErrorMessageClasses } from './error-message.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'p[av-error-message]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'alert',
    'aria-live': 'polite',
    'data-slot': 'error-message',
  },
})
export class AvErrorMessageComponent {
  protected readonly classes = computed(() => avErrorMessageClasses());
}
