import { Component, computed } from '@angular/core';

import { avDrawerHeadingClasses } from './drawer.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'h2[av-drawer-heading]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'drawer-heading',
  },
})
export class AvDrawerHeadingComponent {
  protected readonly classes = computed(() => avDrawerHeadingClasses());
}
