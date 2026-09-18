import { Component, computed } from '@angular/core';

import { avDrawerHandleClasses } from './drawer.utils';

@Component({
  selector: 'av-drawer-handle',
  template: `<div data-slot="drawer-handle-bar"></div>`,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'drawer-handle',
  },
})
export class AvDrawerHandleComponent {
  protected readonly classes = computed(() => avDrawerHandleClasses());
}
