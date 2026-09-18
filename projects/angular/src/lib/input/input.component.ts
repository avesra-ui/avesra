import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { avInputClasses } from './input.utils';
import type { AvInputVariant } from './input.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[av-input]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[disabled]': 'isDisabled()',
    '[attr.aria-invalid]': 'isInvalid() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    'data-slot': 'input',
    '(input)': 'onInput($event)',
    '(blur)': 'onBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvInputComponent),
      multi: true,
    },
  ],
})
export class AvInputComponent implements ControlValueAccessor {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Visual style variant. */
  readonly variant = input<AvInputVariant>('primary');

  /** Expands the input to the full width of its container. */
  readonly fullWidth = input(false, {
    alias: 'full-width',
    transform: booleanAttribute,
  });

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the input as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avInputClasses({
      variant: this.variant(),
      fullWidth: this.fullWidth(),
    }),
  );

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  protected readonly isInvalid = computed(() => this.invalid());

  writeValue(value: string | null): void {
    this.elementRef.nativeElement.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  protected onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  protected onBlur(): void {
    this.onTouched();
  }
}
