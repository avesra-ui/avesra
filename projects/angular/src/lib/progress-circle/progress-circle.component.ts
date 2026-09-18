import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  untracked,
} from '@angular/core';

import { AvProgressCircleContext } from './progress-circle.context';
import { avProgressCircleClasses } from './progress-circle.utils';
import type { AvProgressCircleColor, AvProgressCircleSize } from './progress-circle.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-progress-circle]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'progressbar',
    '[attr.aria-valuemin]': 'min()',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'ariaValueNow()',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
    'data-slot': 'progress-circle',
  },
  providers: [AvProgressCircleContext],
})
export class AvProgressCircleComponent {
  private readonly context = inject(AvProgressCircleContext);

  /** Progress color. */
  readonly color = input<AvProgressCircleColor>('accent');

  /** Progress circle size. */
  readonly size = input<AvProgressCircleSize>('md');

  /** Minimum progress value. */
  readonly min = input(0, { transform: numberAttribute });

  /** Maximum progress value. */
  readonly max = input(100, { transform: numberAttribute });

  /** Current progress value. */
  readonly value = input(0, { transform: numberAttribute });

  /** Shows an indeterminate loading state. */
  readonly indeterminate = input(false, {
    transform: booleanAttribute,
    alias: 'is-indeterminate',
  });

  /** Disables the progress indicator. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Accessible label for screen readers. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  protected readonly classes = computed(() =>
    avProgressCircleClasses({
      color: this.color(),
      size: this.size(),
    }),
  );

  protected readonly ariaValueNow = computed(() =>
    this.indeterminate() ? null : this.context.value(),
  );

  constructor() {
    effect(() => {
      const min = this.min();
      const max = this.max();
      const value = this.value();
      const indeterminate = this.indeterminate();

      untracked(() => {
        this.context.min.set(min);
        this.context.max.set(max);
        this.context.indeterminate.set(indeterminate);
        this.context.setValue(value);
      });
    });
  }
}
