import { Component, computed } from '@angular/core';

import { avModalFooterClasses } from './modal.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-modal-footer]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'modal-footer',
  },
})
export class AvModalFooterComponent {
  protected readonly classes = computed(() => avModalFooterClasses());
}
