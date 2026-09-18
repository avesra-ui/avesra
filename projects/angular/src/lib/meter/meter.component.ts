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

import { AvMeterContext } from './meter.context';
import { avMeterClasses } from './meter.utils';
import type { AvMeterColor, AvMeterSize } from './meter.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-meter]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'meter',
    '[attr.aria-valuemin]': 'min()',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'context.value()',
    '[attr.aria-valuetext]': 'context.valueText()',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
    'data-slot': 'meter',
  },
  providers: [AvMeterContext],
})
export class AvMeterComponent {
  protected readonly context = inject(AvMeterContext);

  /** Meter fill color. */
  readonly color = input<AvMeterColor>('accent');

  /** Meter track size. */
  readonly size = input<AvMeterSize>('md');

  /** Minimum meter value. */
  readonly min = input(0, { transform: numberAttribute });

  /** Maximum meter value. */
  readonly max = input(100, { transform: numberAttribute });

  /** Current meter value. */
  readonly value = input(0, { transform: numberAttribute });

  /** Disables the meter. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Number formatting options for the output display. */
  readonly formatOptions = input<Intl.NumberFormatOptions>(undefined, {
    alias: 'format-options',
  });

  /** Accessible label for screen readers. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  protected readonly classes = computed(() =>
    avMeterClasses({
      color: this.color(),
      size: this.size(),
    }),
  );

  constructor() {
    effect(() => {
      const min = this.min();
      const max = this.max();
      const value = this.value();
      const disabled = this.disabled();
      const formatOptions = this.formatOptions();

      untracked(() => {
        this.context.min.set(min);
        this.context.max.set(max);
        this.context.disabled.set(disabled);
        this.context.formatOptions.set(formatOptions);
        this.context.setValue(value);
      });
    });
  }
}
