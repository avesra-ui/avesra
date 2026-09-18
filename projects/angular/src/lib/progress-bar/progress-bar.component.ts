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

import { AvProgressBarContext } from './progress-bar.context';
import { avProgressBarClasses } from './progress-bar.utils';
import type { AvProgressBarColor, AvProgressBarSize } from './progress-bar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-progress-bar]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'progressbar',
    '[attr.aria-valuemin]': 'min()',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'ariaValueNow()',
    '[attr.aria-valuetext]': 'ariaValueText()',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
    'data-slot': 'progress-bar',
  },
  providers: [AvProgressBarContext],
})
export class AvProgressBarComponent {
  protected readonly context = inject(AvProgressBarContext);

  /** Progress bar fill color. */
  readonly color = input<AvProgressBarColor>('accent');

  /** Progress bar track size. */
  readonly size = input<AvProgressBarSize>('md');

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

  /** Disables the progress bar. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Number formatting options for the output display. */
  readonly formatOptions = input<Intl.NumberFormatOptions>(undefined, {
    alias: 'format-options',
  });

  /** Accessible label for screen readers. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  protected readonly classes = computed(() =>
    avProgressBarClasses({
      color: this.color(),
      size: this.size(),
    }),
  );

  protected readonly ariaValueNow = computed(() =>
    this.indeterminate() ? null : this.context.value(),
  );

  protected readonly ariaValueText = computed(() =>
    this.indeterminate() ? null : this.context.valueText(),
  );

  constructor() {
    effect(() => {
      const min = this.min();
      const max = this.max();
      const value = this.value();
      const disabled = this.disabled();
      const indeterminate = this.indeterminate();
      const formatOptions = this.formatOptions();

      untracked(() => {
        this.context.min.set(min);
        this.context.max.set(max);
        this.context.disabled.set(disabled);
        this.context.indeterminate.set(indeterminate);
        this.context.formatOptions.set(formatOptions);
        this.context.setValue(value);
      });
    });
  }
}
