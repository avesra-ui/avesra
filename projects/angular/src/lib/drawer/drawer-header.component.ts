import { Component, computed } from '@angular/core';

import { avDrawerHeaderClasses } from './drawer.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-drawer-header]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'drawer-header',
  },
})
export class AvDrawerHeaderComponent {
  protected readonly classes = computed(() => avDrawerHeaderClasses());
}
