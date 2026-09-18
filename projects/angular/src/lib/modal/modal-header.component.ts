import { Component, computed } from '@angular/core';

import { avModalHeaderClasses } from './modal.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-modal-header]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'modal-header',
  },
})
export class AvModalHeaderComponent {
  protected readonly classes = computed(() => avModalHeaderClasses());
}
