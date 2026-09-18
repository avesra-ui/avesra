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

import { AvCheckboxGroupContext } from './checkbox-group.context';
import { avCheckboxGroupClasses } from './checkbox-group.utils';
import type { AvCheckboxGroupVariant } from './checkbox-group.utils';

@Component({
  selector: 'av-checkbox-group',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'group',
    'data-slot': 'checkbox-group',
  },
  providers: [
    AvCheckboxGroupContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvCheckboxGroupComponent),
      multi: true,
    },
  ],
})
export class AvCheckboxGroupComponent implements ControlValueAccessor {
  private readonly context = inject(AvCheckboxGroupContext);
  private defaultsApplied = false;
  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  /** Shared variant for child checkboxes. */
  readonly variant = input<AvCheckboxGroupVariant>('primary');

  /** Disables all child checkboxes. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks all child checkboxes as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  /** Form field name for native form submission. */
  readonly name = input<string>();

  /** Initial selected values for uncontrolled usage. */
  readonly defaultValue = input<string[]>([], { alias: 'default-value' });

  /** Selected values. Supports two-way binding with `[(value)]`. */
  readonly value = model<string[]>([]);

  protected readonly classes = computed(() =>
    avCheckboxGroupClasses({ variant: this.variant() }),
  );

  constructor() {
    this.context.registerSelectedValuesUpdater((values) => this.setValue(values, true));
    this.context.registerTouchedCallback(() => this.onTouched());

    effect(() => {
      const variant = this.variant();
      const disabled = this.disabled();
      const invalid = this.invalid();

      untracked(() => {
        this.context.variant.set(variant);
        this.context.disabled.set(disabled);
        this.context.invalid.set(invalid);
      });
    });

    effect(() => {
      const defaults = this.defaultValue();

      if (!this.defaultsApplied && defaults.length > 0 && this.value().length === 0) {
        untracked(() => {
          this.setValue(defaults);
          this.defaultsApplied = true;
        });
      }
    });

    effect(() => {
      const values = this.value();

      untracked(() => {
        this.context.selectedValues.set(values);
      });
    });
  }

  writeValue(value: string[] | null): void {
    this.setValue(value ?? []);
  }

  private setValue(values: string[], emitChange = false): void {
    this.value.set(values);
    this.context.selectedValues.set(values);

    if (emitChange) {
      this.onChange(values);
    }
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.context.disabled.set(isDisabled);
  }
}
