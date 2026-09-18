import { Component, computed, effect, inject, input } from '@angular/core';

import { AvSurfaceContext } from './surface.context';
import { avSurfaceClasses } from './surface.utils';
import type { AvSurfaceVariant } from './surface.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-surface]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'surface',
  },
  providers: [AvSurfaceContext],
})
export class AvSurfaceComponent {
  private readonly context = inject(AvSurfaceContext);

  /** Visual surface variant. */
  readonly variant = input<AvSurfaceVariant>('default');

  protected readonly classes = computed(() =>
    avSurfaceClasses({
      variant: this.variant(),
    }),
  );

  constructor() {
    effect(() => {
      this.context.variant.set(this.variant());
    });
  }
}
