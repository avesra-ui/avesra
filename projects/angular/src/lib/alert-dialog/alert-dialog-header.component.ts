import { Component, computed } from '@angular/core';

import { avAlertDialogHeaderClasses } from './alert-dialog.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-alert-dialog-header]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-dialog-header',
  },
})
export class AvAlertDialogHeaderComponent {
  protected readonly classes = computed(() => avAlertDialogHeaderClasses());
}
