import { Component, computed, effect, inject, input, untracked } from '@angular/core';

import { AvSeparatorContext } from './separator.context';
import { avSeparatorContainerClasses } from './separator.utils';
import type { AvSeparatorOrientation, AvSeparatorVariant } from './separator.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-separator-container]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'separator-container',
  },
  providers: [AvSeparatorContext],
})
export class AvSeparatorContainerComponent {
  private readonly context = inject(AvSeparatorContext);

  /** Layout direction of the separator group. */
  readonly orientation = input<AvSeparatorOrientation>('horizontal');

  /** Shared color variant for child separator lines. */
  readonly variant = input<AvSeparatorVariant>('default');

  protected readonly classes = computed(() =>
    avSeparatorContainerClasses(this.orientation()),
  );

  constructor() {
    effect(() => {
      const orientation = this.orientation();
      const variant = this.variant();

      untracked(() => {
        this.context.orientation.set(orientation);
        this.context.variant.set(variant);
      });
    });
  }
}
