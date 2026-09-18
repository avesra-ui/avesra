import {
  booleanAttribute,
  Component,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  signal,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AvSliderContext } from './slider.context';
import { denormalizeSliderValue, avSliderClasses } from './slider.utils';
import type { AvSliderOrientation } from './slider.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-slider]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.data-orientation]': 'orientation()',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.aria-disabled]': 'isDisabled() || null',
    'data-slot': 'slider',
  },
  providers: [
    AvSliderContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvSliderComponent),
      multi: true,
    },
  ],
})
export class AvSliderComponent implements ControlValueAccessor {
  private readonly context = inject(AvSliderContext);
  private defaultsApplied = false;
  private onChange: (value: number | number[]) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Minimum slider value. */
  readonly min = input(0, { transform: numberAttribute });

  /** Maximum slider value. */
  readonly max = input(100, { transform: numberAttribute });

  /** Value change step. */
  readonly step = input(1, { transform: numberAttribute });

  /** Layout direction. */
  readonly orientation = input<AvSliderOrientation>('horizontal');

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Initial value for uncontrolled usage. */
  readonly defaultValue = input<number | number[]>(0, {
    alias: 'default-value',
  });

  /** Current value. Supports two-way binding with `[(value)]`. */
  readonly value = model<number | number[] | undefined>(undefined);

  /** Number formatting options for the output display. */
  readonly formatOptions = input<Intl.NumberFormatOptions>(undefined, {
    alias: 'format-options',
  });

  protected readonly classes = computed(() => avSliderClasses({ orientation: this.orientation() }));

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  constructor() {
    this.context.registerValueUpdater((values) => {
      const nextValue = denormalizeSliderValue(values);
      this.value.set(nextValue);
      this.onChange(nextValue);
    });

    this.context.registerTouchedCallback(() => this.onTouched());

    effect(() => {
      const min = this.min();
      const max = this.max();
      const step = this.step();
      const orientation = this.orientation();
      const disabled = this.disabled();
      const formatOptions = this.formatOptions();
      const value = this.value();
      const formDisabled = this.formDisabled();

      untracked(() => {
        this.context.min.set(min);
        this.context.max.set(max);
        this.context.step.set(step);
        this.context.orientation.set(orientation);
        this.context.disabled.set(disabled);
        this.context.formDisabled.set(formDisabled);
        this.context.formatOptions.set(formatOptions);

        if (value !== undefined) {
          this.context.setValues(value);
        }
      });
    });

    effect(() => {
      const defaultValue = this.defaultValue();

      if (!this.defaultsApplied) {
        untracked(() => {
          const initialValue = this.value() ?? defaultValue;
          this.value.set(initialValue);
          this.context.setValues(initialValue);
          this.defaultsApplied = true;
        });
      }
    });
  }

  writeValue(value: number | number[] | null): void {
    if (value == null) {
      return;
    }

    this.value.set(value);
    this.context.setValues(value);
  }

  registerOnChange(fn: (value: number | number[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

}
