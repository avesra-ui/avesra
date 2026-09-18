import { Component, computed } from '@angular/core';

import { AvCloseButtonComponent } from '../close-button/close-button.component';
import { AvModalCloseDirective } from './modal-close.directive';
import { avModalCloseTriggerClasses } from './modal.utils';

@Component({
  selector: 'av-modal-close-trigger',
  template: `<button av-close-button av-modal-close type="button" [class]="classes()"></button>`,
  imports: [AvCloseButtonComponent, AvModalCloseDirective],
  host: {
    'data-slot': 'modal-close-trigger',
    style: 'display: contents',
  },
})
export class AvModalCloseTriggerComponent {
  protected readonly classes = computed(() => avModalCloseTriggerClasses());
}
