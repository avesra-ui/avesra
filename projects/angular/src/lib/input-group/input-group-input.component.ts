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

import { AvInputGroupContext } from './input-group.context';
import { avInputGroupInputClasses } from './input-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[av-input-group-input]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[disabled]': 'isDisabled()',
    '[attr.aria-invalid]': 'isInvalid() ? "true" : null',
    'data-slot': 'input-group-input',
    '(input)': 'onInput($event)',
    '(blur)': 'onBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvInputGroupInputComponent),
      multi: true,
    },
  ],
})
export class AvInputGroupInputComponent implements ControlValueAccessor {
  private readonly group = inject(AvInputGroupContext);
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Disables interaction. Inherits from `av-input-group` when omitted. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the input as invalid. Inherits from `av-input-group` when omitted. */
  readonly invalid = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() => avInputGroupInputClasses());

  protected readonly isDisabled = computed(
    () => this.disabled() || this.group.disabled() || this.formDisabled(),
  );

  protected readonly isInvalid = computed(() => this.invalid() || this.group.invalid());

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
