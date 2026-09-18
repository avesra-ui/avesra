import { Component, computed, inject } from '@angular/core';

import { AvSelectContext } from './select.context';
import { avSelectIndicatorClasses } from './select.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-select-indicator]',
  template: `
    <ng-content>
      <svg
        aria-hidden="true"
        data-slot="select-default-indicator"
        fill="none"
        height="16"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="16"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </ng-content>
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-open]': 'context.isOpen() ? "true" : null',
    'data-slot': 'select-indicator',
    'aria-hidden': 'true',
  },
})
export class AvSelectIndicatorComponent {
  protected readonly context = inject(AvSelectContext);

  protected readonly classes = computed(() => avSelectIndicatorClasses());
}
