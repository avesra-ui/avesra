import {
  booleanAttribute,
  Component,
  computed,
  input,
} from '@angular/core';

import { avCloseButtonClasses } from './close-button.utils';
import type { AvCloseButtonVariant } from './close-button.utils';

@Component({
  selector: 'button[av-close-button]',
  template: `
    <ng-content />
    @if (useDefaultIcon()) {
      <svg
        data-slot="close-button-icon"
        aria-hidden="true"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z"
        />
      </svg>
    }
  `,
  host: {
    '[class]': 'classes()',
    '[type]': 'buttonType()',
    '[disabled]': 'isDisabled()',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.data-pending]': 'pending() ? "true" : null',
    'data-slot': 'close-button',
  },
})
export class AvCloseButtonComponent {
  /** Visual style variant. */
  readonly variant = input<AvCloseButtonVariant>('default');

  /** Accessible label for the close action. */
  readonly ariaLabel = input('Close', { alias: 'aria-label' });

  /** Native button type. */
  readonly buttonType = input<'button' | 'submit' | 'reset'>('button', { alias: 'type' });

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Shows pending state and blocks interaction. */
  readonly pending = input(false, { transform: booleanAttribute });

  /** Renders the built-in close icon when true. */
  readonly useDefaultIcon = input(true);


  protected readonly classes = computed(() =>
    avCloseButtonClasses({
      variant: this.variant(),
    }),
  );

  protected readonly isDisabled = computed(() => this.disabled() || this.pending());
}
