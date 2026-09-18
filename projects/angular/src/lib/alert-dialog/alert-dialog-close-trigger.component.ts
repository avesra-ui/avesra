import { Component, computed } from '@angular/core';

import { AvCloseButtonComponent } from '../close-button/close-button.component';
import { AvAlertDialogCloseDirective } from './alert-dialog-close.directive';
import { avAlertDialogCloseTriggerClasses } from './alert-dialog.utils';

@Component({
  selector: 'av-alert-dialog-close-trigger',
  template: `<button av-close-button av-alert-dialog-close type="button" [class]="classes()"></button>`,
  imports: [AvCloseButtonComponent, AvAlertDialogCloseDirective],
  host: {
    'data-slot': 'alert-dialog-close-trigger',
    style: 'display: contents',
  },
})
export class AvAlertDialogCloseTriggerComponent {
  protected readonly classes = computed(() => avAlertDialogCloseTriggerClasses());
}
