import { Component, computed } from '@angular/core';

import { avCardDescriptionClasses } from './card.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'p[av-card-description]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'card-description',
  },
})
export class AvCardDescriptionComponent {
  protected readonly classes = computed(() => avCardDescriptionClasses());
}
