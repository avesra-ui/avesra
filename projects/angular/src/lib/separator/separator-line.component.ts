import { Component, computed, inject, input } from '@angular/core';

import { AvSeparatorContext } from './separator.context';
import { avSeparatorLineClasses } from './separator.utils';
import type { AvSeparatorOrientation, AvSeparatorVariant } from './separator.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-separator-line]',
  template: '',
  host: {
    '[class]': 'classes()',
    role: 'separator',
    'aria-hidden': 'true',
    'data-slot': 'separator-line',
  },
})
export class AvSeparatorLineComponent {
  private readonly context = inject(AvSeparatorContext, { optional: true });

  /** Line orientation. Inherits from `av-separator-container` when omitted. */
  readonly orientation = input<AvSeparatorOrientation>();

  /** Color variant. Inherits from `av-separator-container` when omitted. */
  readonly variant = input<AvSeparatorVariant>();

  protected readonly classes = computed(() =>
    avSeparatorLineClasses({
      orientation: this.orientation() ?? this.context?.orientation() ?? 'horizontal',
      variant: this.variant() ?? this.context?.variant() ?? 'default',
    }),
  );
}
