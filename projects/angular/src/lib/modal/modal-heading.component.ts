import { Component, computed } from '@angular/core';

import { avModalHeadingClasses } from './modal.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'h2[av-modal-heading], h3[av-modal-heading], h4[av-modal-heading]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'modal-heading',
  },
})
export class AvModalHeadingComponent {
  protected readonly classes = computed(() => avModalHeadingClasses());
}
