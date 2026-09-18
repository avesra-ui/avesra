import { Component, computed, inject, input } from '@angular/core';

import { AvSeparatorContext } from './separator.context';
import { avSeparatorContentClasses } from './separator.utils';
import type { AvSeparatorOrientation } from './separator.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-separator-content]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'separator-content',
  },
})
export class AvSeparatorContentComponent {
  private readonly context = inject(AvSeparatorContext, { optional: true });

  /** Content layout direction. Inherits from `av-separator-container` when omitted. */
  readonly orientation = input<AvSeparatorOrientation>();

  protected readonly classes = computed(() =>
    avSeparatorContentClasses(
      this.orientation() ?? this.context?.orientation() ?? 'horizontal',
    ),
  );
}
