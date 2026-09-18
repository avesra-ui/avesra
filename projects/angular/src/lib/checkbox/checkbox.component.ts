import {
  booleanAttribute,
  Component,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  signal,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AvCheckboxGroupContext } from '../checkbox-group/checkbox-group.context';
import { AvCheckboxContext } from './checkbox.context';
import { avCheckboxClasses } from './checkbox.utils';
import type { AvCheckboxVariant } from './checkbox.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-checkbox]',
  template: `
    <input
      type="checkbox"
      class="av-checkbox__input"
      tabindex="-1"
      aria-hidden="true"
      [attr.name]="name() || null"
      [attr.value]="value() || 'on'"
      [checked]="isSelected()"
      [indeterminate]="isIndeterminate()"
      [disabled]="isDisabled()"
      (change)="onInputChange($event)"
      (click)="$event.stopPropagation()"
    />
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    role: 'checkbox',
    tabindex: '0',
    '[attr.aria-checked]': 'ariaChecked()',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.aria-invalid]': 'isInvalid() || null',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-indeterminate]': 'isIndeterminate() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    'data-slot': 'checkbox',
    '(click)': 'toggle($event)',
    '(keydown)': 'onKeydown($event)',
    '(blur)': 'onBlur()',
  },
  providers: [
    AvCheckboxContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvCheckboxComponent),
      multi: true,
    },
  ],
})
export class AvCheckboxComponent implements ControlValueAccessor {
  private readonly group = inject(AvCheckboxGroupContext, { optional: true });
  private readonly context = inject(AvCheckboxContext);
  private defaultsApplied = false;
  private onChange: (value: boolean | string[]) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Visual style variant. Inherits from `av-checkbox-group` when omitted. */
  readonly variant = input<AvCheckboxVariant>();

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the checkbox as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  /** Initial selected state for uncontrolled standalone usage. */
  readonly defaultSelected = input(false, {
    alias: 'default-selected',
    transform: booleanAttribute,
  });

  /** Selected state for standalone usage. Supports two-way binding with `[(selected)]`. */
  readonly selected = model(false);

  /** Indeterminate state (partially selected). */
  readonly indeterminate = input(false, { transform: booleanAttribute });

  /** Accessible label when no visible label is provided. */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /** Form field name for native form submission. */
  readonly name = input<string>();

  /** Value when used inside `av-checkbox-group`. */
  readonly value = input<string>('');

  protected readonly classes = computed(() =>
    avCheckboxClasses({
      variant: this.variant() ?? this.group?.variant() ?? 'primary',
    }),
  );

  protected readonly isDisabled = computed(
    () => this.disabled() || this.formDisabled() || (this.group?.disabled() ?? false),
  );

  protected readonly isSelected = computed(() => {
    const key = this.value();
    const group = this.group;

    if (group && key) {
      return group.selectedValues().includes(key);
    }

    return this.selected();
  });

  protected readonly isIndeterminate = computed(() => this.indeterminate());

  protected readonly isInvalid = computed(
    () => this.invalid() || (this.group?.invalid() ?? false),
  );

  protected readonly ariaChecked = computed(() => {
    if (this.isIndeterminate()) {
      return 'mixed';
    }

    return this.isSelected() ? 'true' : 'false';
  });

  constructor() {
    effect(() => {
      this.context.isSelected.set(this.isSelected());
      this.context.isIndeterminate.set(this.isIndeterminate());
    });

    effect(() => {
      const defaultSelected = this.defaultSelected();

      if (!this.group && !this.defaultsApplied && defaultSelected && !this.selected()) {
        untracked(() => {
          this.selected.set(true);
          this.defaultsApplied = true;
        });
      }
    });
  }

  writeValue(value: boolean | string[] | null): void {
    if (this.group) {
      return;
    }

    this.selected.set(!!value);
  }

  registerOnChange(fn: (value: boolean | string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  protected toggle(event: Event): void {
    if (this.isDisabled()) {
      event.preventDefault();
      return;
    }

    const key = this.value();
    if (this.group && key) {
      this.group.toggleValue(key);
      return;
    }

    this.updateSelected(!this.selected());
  }

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const key = this.value();

    if (this.group && key) {
      this.group.toggleValue(key, input.checked);
      return;
    }

    this.updateSelected(input.checked);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.isDisabled()) {
      return;
    }

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle(event);
    }
  }

  protected onBlur(): void {
    if (this.group) {
      this.group.markTouched();
      return;
    }

    this.onTouched();
  }

  private updateSelected(value: boolean): void {
    this.selected.set(value);
    this.onChange(value);
  }
}
