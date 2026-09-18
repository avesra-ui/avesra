import {
  booleanAttribute,
  Component,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AvRadioGroupContext } from './radio-group.context';
import { avRadioGroupClasses } from './radio-group.utils';
import type { AvRadioGroupOrientation, AvRadioGroupVariant } from './radio-group.utils';

@Component({
  selector: 'av-radio-group',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'radiogroup',
    '[attr.data-orientation]': 'orientation()',
    'data-slot': 'radio-group',
  },
  providers: [
    AvRadioGroupContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvRadioGroupComponent),
      multi: true,
    },
  ],
})
export class AvRadioGroupComponent implements ControlValueAccessor {
  private readonly context = inject(AvRadioGroupContext);
  private defaultsApplied = false;
  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  /** Shared variant for child radios. */
  readonly variant = input<AvRadioGroupVariant>('primary');

  /** Layout direction of grouped radios. */
  readonly orientation = input<AvRadioGroupOrientation>('vertical');

  /** Disables all child radios. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks all child radios as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  /** Form field name for native form submission. */
  readonly name = input<string>();

  /** Initial selected value for uncontrolled usage. */
  readonly defaultValue = input<string | null>(null, { alias: 'default-value' });

  /** Selected value. Supports two-way binding with `[(value)]`. */
  readonly value = model<string | null>(null);

  protected readonly classes = computed(() =>
    avRadioGroupClasses({
      variant: this.variant(),
      orientation: this.orientation(),
    }),
  );

  constructor() {
    this.context.registerSelectedValueUpdater((value) => this.setValue(value, true));
    this.context.registerTouchedCallback(() => this.onTouched());

    effect(() => {
      const variant = this.variant();
      const orientation = this.orientation();
      const disabled = this.disabled();
      const invalid = this.invalid();
      const name = this.name();

      untracked(() => {
        this.context.variant.set(variant);
        this.context.orientation.set(orientation);
        this.context.disabled.set(disabled);
        this.context.invalid.set(invalid);
        this.context.name.set(name);
      });
    });

    effect(() => {
      const defaultValue = this.defaultValue();

      if (!this.defaultsApplied && defaultValue && this.value() === null) {
        untracked(() => {
          this.setValue(defaultValue);
          this.defaultsApplied = true;
        });
      }
    });

    effect(() => {
      const value = this.value();

      untracked(() => {
        this.context.selectedValue.set(value);
      });
    });
  }

  writeValue(value: string | null): void {
    this.setValue(value);
  }

  private setValue(value: string | null, emitChange = false): void {
    this.value.set(value);
    this.context.selectedValue.set(value);

    if (emitChange) {
      this.onChange(value);
    }
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.context.disabled.set(isDisabled);
  }
}
