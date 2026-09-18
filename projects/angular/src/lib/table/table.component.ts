import { Component, computed, effect, inject, input } from '@angular/core';

import { AvTableContext } from './table.context';
import { avTableRootClasses } from './table.utils';
import type { AvTableVariant } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-table]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'table',
  },
  providers: [AvTableContext],
})
export class AvTableComponent {
  private readonly context = inject(AvTableContext);

  /** Visual variant. */
  readonly variant = input<AvTableVariant>('primary');

  protected readonly classes = computed(() =>
    avTableRootClasses({
      variant: this.variant(),
    }),
  );

  constructor() {
    effect(() => {
      this.context.variant.set(this.variant());
    });
  }
}
