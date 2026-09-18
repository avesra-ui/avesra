import { Component, computed } from '@angular/core';

import { avDrawerFooterClasses } from './drawer.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-drawer-footer]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'drawer-footer',
  },
})
export class AvDrawerFooterComponent {
  protected readonly classes = computed(() => avDrawerFooterClasses());
}
