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

import { AvRadioGroupContext } from '../radio-group/radio-group.context';
import { AvRadioContext } from './radio.context';
import { avRadioClasses } from './radio.utils';
import type { AvRadioVariant } from './radio.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-radio]',
  template: `
    <input
      type="radio"
      class="av-radio__input"
      tabindex="-1"
      aria-hidden="true"
      [attr.name]="fieldName() || null"
      [attr.value]="value() || 'on'"
      [checked]="isSelected()"
      [disabled]="isDisabled()"
      (change)="onInputChange($event)"
      (click)="$event.stopPropagation()"
    />
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    role: 'radio',
    tabindex: '0',
    '[attr.aria-checked]': 'isSelected()',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.aria-invalid]': 'isInvalid() || null',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    'data-slot': 'radio',
    '(click)': 'select($event)',
    '(keydown)': 'onKeydown($event)',
    '(blur)': 'onBlur()',
  },
  providers: [
    AvRadioContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvRadioComponent),
      multi: true,
    },
  ],
})
export class AvRadioComponent implements ControlValueAccessor {
  private readonly group = inject(AvRadioGroupContext, { optional: true });
  private readonly context = inject(AvRadioContext);
  private defaultsApplied = false;
  private onChange: (value: boolean | string | null) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Visual style variant. Inherits from `av-radio-group` when omitted. */
  readonly variant = input<AvRadioVariant>();

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the radio as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  /** Initial selected state for uncontrolled standalone usage. */
  readonly defaultSelected = input(false, {
    alias: 'default-selected',
    transform: booleanAttribute,
  });

  /** Selected state for standalone usage. Supports two-way binding with `[(selected)]`. */
  readonly selected = model(false);

  /** Accessible label when no visible label is provided. */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /** Form field name for native form submission. */
  readonly name = input<string>();

  /** Value when used inside `av-radio-group`. */
  readonly value = input<string>('');

  protected readonly classes = computed(() =>
    avRadioClasses({
      variant: this.variant() ?? this.group?.variant() ?? 'primary',
    }),
  );

  protected readonly fieldName = computed(
    () => this.name() ?? this.group?.name() ?? undefined,
  );

  protected readonly isDisabled = computed(
    () => this.disabled() || this.formDisabled() || (this.group?.disabled() ?? false),
  );

  protected readonly isSelected = computed(() => {
    const key = this.value();
    const group = this.group;

    if (group && key) {
      return group.selectedValue() === key;
    }

    return this.selected();
  });

  protected readonly isInvalid = computed(
    () => this.invalid() || (this.group?.invalid() ?? false),
  );

  constructor() {
    effect(() => {
      this.context.isSelected.set(this.isSelected());
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

  writeValue(value: boolean | string | null): void {
    if (this.group) {
      return;
    }

    this.selected.set(!!value);
  }

  registerOnChange(fn: (value: boolean | string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  protected select(event: Event): void {
    if (this.isDisabled()) {
      event.preventDefault();
      return;
    }

    const key = this.value();
    if (this.group && key) {
      this.group.selectValue(key);
      return;
    }

    if (!this.selected()) {
      this.updateSelected(true);
    }
  }

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const key = this.value();

    if (this.group && key) {
      if (input.checked) {
        this.group.selectValue(key);
      }
      return;
    }

    if (input.checked) {
      this.updateSelected(true);
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.isDisabled()) {
      return;
    }

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.select(event);
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
