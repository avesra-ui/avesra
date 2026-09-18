import { Component, computed, input } from '@angular/core';

import { avKbdClasses } from './kbd.utils';
import type { AvKbdVariant } from './kbd.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'kbd[av-kbd]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'kbd',
  },
})
export class AvKbdComponent {
  /** Visual variant. */
  readonly variant = input<AvKbdVariant>('default');

  protected readonly classes = computed(() =>
    avKbdClasses({
      variant: this.variant(),
    }),
  );
}
