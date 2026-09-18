import { Component, computed } from '@angular/core';

import { avCardTitleClasses } from './card.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'h3[av-card-title]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'card-title',
  },
})
export class AvCardTitleComponent {
  protected readonly classes = computed(() => avCardTitleClasses());
}
