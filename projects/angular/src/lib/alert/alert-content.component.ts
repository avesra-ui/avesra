import { Component, computed } from '@angular/core';

import { avAlertContentClasses } from './alert.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-alert-content]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-content',
  },
})
export class AvAlertContentComponent {
  protected readonly classes = computed(() => avAlertContentClasses());
}
