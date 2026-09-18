import { Component, computed, effect, inject, input } from '@angular/core';

import { AvSurfaceContext } from '../surface/surface.context';
import { avCardClasses } from './card.utils';
import type { AvCardVariant } from './card.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-card]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'card',
  },
  providers: [AvSurfaceContext],
})
export class AvCardComponent {
  private readonly surfaceContext = inject(AvSurfaceContext);

  /** Visual surface variant. */
  readonly variant = input<AvCardVariant>('default');

  protected readonly classes = computed(() =>
    avCardClasses({
      variant: this.variant(),
    }),
  );

  constructor() {
    effect(() => {
      const variant = this.variant();
      this.surfaceContext.variant.set(variant === 'transparent' ? undefined : variant);
    });
  }
}
