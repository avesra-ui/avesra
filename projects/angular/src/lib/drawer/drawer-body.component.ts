import { Component, computed } from '@angular/core';

import { avDrawerBodyClasses } from './drawer.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-drawer-body]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    style: 'touch-action: pan-y',
    'data-slot': 'drawer-body',
  },
})
export class AvDrawerBodyComponent {
  protected readonly classes = computed(() => avDrawerBodyClasses());
}
