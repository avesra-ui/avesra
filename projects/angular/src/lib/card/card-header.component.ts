import { Component, computed } from '@angular/core';

import { avCardHeaderClasses } from './card.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-card-header]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'card-header',
  },
})
export class AvCardHeaderComponent {
  protected readonly classes = computed(() => avCardHeaderClasses());
}
