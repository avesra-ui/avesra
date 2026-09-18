import { Component, computed, inject, input } from '@angular/core';

import { AvSeparatorContext } from './separator.context';
import { avSeparatorClasses } from './separator.utils';
import type { AvSeparatorOrientation, AvSeparatorVariant } from './separator.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hr[av-separator], div[av-separator]',
  template: '',
  host: {
    '[class]': 'classes()',
    role: 'separator',
    '[attr.aria-orientation]': 'resolvedOrientation()',
    '[attr.data-orientation]': 'resolvedOrientation()',
    'data-slot': 'separator',
  },
})
export class AvSeparatorComponent {
  private readonly context = inject(AvSeparatorContext, { optional: true });

  /** Separator orientation. Inherits from `av-separator-container` when omitted. */
  readonly orientation = input<AvSeparatorOrientation>();

  /** Color variant. Inherits from `av-separator-container` when omitted. */
  readonly variant = input<AvSeparatorVariant>();

  protected readonly resolvedOrientation = computed(
    () => this.orientation() ?? this.context?.orientation() ?? 'horizontal',
  );

  protected readonly resolvedVariant = computed(
    () => this.variant() ?? this.context?.variant() ?? 'default',
  );

  protected readonly classes = computed(() =>
    avSeparatorClasses({
      orientation: this.resolvedOrientation(),
      variant: this.resolvedVariant(),
    }),
  );
}
