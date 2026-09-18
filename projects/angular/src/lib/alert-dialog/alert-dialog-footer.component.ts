import { Component, computed } from '@angular/core';

import { avAlertDialogFooterClasses } from './alert-dialog.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-alert-dialog-footer]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-dialog-footer',
  },
})
export class AvAlertDialogFooterComponent {
  protected readonly classes = computed(() => avAlertDialogFooterClasses());
}
