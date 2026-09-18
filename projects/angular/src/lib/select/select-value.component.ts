import { Component, computed, inject, input } from '@angular/core';

import { AvSelectContext } from './select.context';
import { avSelectValueClasses } from './select.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-select-value]',
  template: `
    @if (context.isPlaceholder()) {
      {{ displayText() }}
    } @else {
      <ng-content>{{ displayText() }}</ng-content>
    }
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-placeholder]': 'context.isPlaceholder() ? "true" : null',
    'data-slot': 'select-value',
  },
})
export class AvSelectValueComponent {
  protected readonly context = inject(AvSelectContext);

  /** Override placeholder text for this value slot. */
  readonly placeholder = input<string>();

  protected readonly classes = computed(() => avSelectValueClasses());

  protected readonly displayText = computed(() => {
    if (this.context.isPlaceholder()) {
      return this.placeholder() ?? this.context.placeholder();
    }

    return this.context.displayValue();
  });
}
