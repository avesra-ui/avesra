import {
  booleanAttribute,
  Component,
  computed,
  effect,
  forwardRef,
  input,
  model,
  signal,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { avSwitchClasses } from './switch.utils';
import type { AvSwitchSize } from './switch.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-switch]',
  template: `
    <input
      type="checkbox"
      class="av-switch__input"
      tabindex="-1"
      aria-hidden="true"
      [attr.name]="name() || null"
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
    role: 'switch',
    tabindex: '0',
    '[attr.aria-checked]': 'isSelected()',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    'data-slot': 'switch',
    '(click)': 'toggle($event)',
    '(keydown)': 'onKeydown($event)',
    '(blur)': 'onBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvSwitchComponent),
      multi: true,
    },
  ],
})
export class AvSwitchComponent implements ControlValueAccessor {
  private defaultsApplied = false;
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Switch size. */
  readonly size = input<AvSwitchSize>('md');

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Initial selected state for uncontrolled usage. */
  readonly defaultSelected = input(false, {
    alias: 'default-selected',
    transform: booleanAttribute,
  });

  /** Selected state. Supports two-way binding with `[(selected)]`. */
  readonly selected = model(false);

  /** Accessible label when no visible label is provided. */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /** Form field name for native form submission. */
  readonly name = input<string>();

  /** Form field value when selected in native form submission. */
  readonly value = input<string>('on');

  protected readonly classes = computed(() => avSwitchClasses({ size: this.size() }));

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  protected readonly isSelected = computed(() => this.selected());

  constructor() {
    effect(() => {
      const defaultSelected = this.defaultSelected();

      if (!this.defaultsApplied && defaultSelected && !this.selected()) {
        untracked(() => {
          this.selected.set(true);
          this.defaultsApplied = true;
        });
      }
    });
  }

  writeValue(value: boolean | null): void {
    this.selected.set(!!value);
  }

  registerOnChange(fn: (value: boolean) => void): void {
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

    this.updateSelected(!this.selected());
  }

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.updateSelected(input.checked);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.isDisabled()) {
      return;
    }

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.updateSelected(!this.selected());
    }
  }

  protected onBlur(): void {
    this.onTouched();
  }

  private updateSelected(value: boolean): void {
    this.selected.set(value);
    this.onChange(value);
  }
}
