import { Component, computed } from '@angular/core';

import { avAlertDialogHeadingClasses } from './alert-dialog.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'h2[av-alert-dialog-heading], h3[av-alert-dialog-heading], h4[av-alert-dialog-heading]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-dialog-heading',
  },
})
export class AvAlertDialogHeadingComponent {
  protected readonly classes = computed(() => avAlertDialogHeadingClasses());
}
