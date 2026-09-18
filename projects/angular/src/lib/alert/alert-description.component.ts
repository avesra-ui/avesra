import { Component, computed } from '@angular/core';

import { avAlertDescriptionClasses } from './alert.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-alert-description]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-description',
  },
})
export class AvAlertDescriptionComponent {
  protected readonly classes = computed(() => avAlertDescriptionClasses());
}
