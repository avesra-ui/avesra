import { Component, computed } from '@angular/core';

import { avAlertTitleClasses } from './alert.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'p[av-alert-title]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-title',
  },
})
export class AvAlertTitleComponent {
  protected readonly classes = computed(() => avAlertTitleClasses());
}
