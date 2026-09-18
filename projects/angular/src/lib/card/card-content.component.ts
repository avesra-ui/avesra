import { Component, computed } from '@angular/core';

import { avCardContentClasses } from './card.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-card-content]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'card-content',
  },
})
export class AvCardContentComponent {
  protected readonly classes = computed(() => avCardContentClasses());
}
