import { Component, computed } from '@angular/core';

import { avCardFooterClasses } from './card.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-card-footer]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'card-footer',
  },
})
export class AvCardFooterComponent {
  protected readonly classes = computed(() => avCardFooterClasses());
}
