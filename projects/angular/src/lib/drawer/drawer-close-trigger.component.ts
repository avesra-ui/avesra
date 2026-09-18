import { Component, computed } from '@angular/core';

import { AvCloseButtonComponent } from '../close-button/close-button.component';
import { AvDrawerCloseDirective } from './drawer-close.directive';
import { avDrawerCloseTriggerClasses } from './drawer.utils';

@Component({
  selector: 'av-drawer-close-trigger',
  template: `<button av-close-button av-drawer-close type="button" [class]="classes()"></button>`,
  imports: [AvCloseButtonComponent, AvDrawerCloseDirective],
  host: {
    'data-slot': 'drawer-close-trigger',
    style: 'display: contents',
  },
})
export class AvDrawerCloseTriggerComponent {
  protected readonly classes = computed(() => avDrawerCloseTriggerClasses());
}
