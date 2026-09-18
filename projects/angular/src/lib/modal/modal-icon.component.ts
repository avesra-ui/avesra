import { Component, computed } from '@angular/core';

import { avModalIconClasses } from './modal.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-modal-icon]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'modal-icon',
  },
})
export class AvModalIconComponent {
  protected readonly classes = computed(() => avModalIconClasses());
}
