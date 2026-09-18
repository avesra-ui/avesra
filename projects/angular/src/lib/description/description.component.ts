import { Component, computed } from '@angular/core';

import { avDescriptionClasses } from './description.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'p[av-description]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'description',
  },
})
export class AvDescriptionComponent {
  protected readonly classes = computed(() => avDescriptionClasses());
}
