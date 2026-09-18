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

import { avTextareaClasses } from './textarea.utils';
import type { AvTextareaVariant } from './textarea.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea[av-textarea]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[disabled]': 'isDisabled()',
    '[attr.aria-invalid]': 'isInvalid() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    'data-slot': 'textarea',
    '(input)': 'onInput($event)',
    '(blur)': 'onBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvTextareaComponent),
      multi: true,
    },
  ],
})
export class AvTextareaComponent implements ControlValueAccessor {
  private readonly elementRef = inject(ElementRef<HTMLTextAreaElement>);
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Visual style variant. */
  readonly variant = input<AvTextareaVariant>('primary');

  /** Expands the textarea to the full width of its container. */
  readonly fullWidth = input(false, {
    alias: 'full-width',
    transform: booleanAttribute,
  });

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the textarea as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avTextareaClasses({
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
    const value = (event.target as HTMLTextAreaElement).value;
    this.onChange(value);
  }

  protected onBlur(): void {
    this.onTouched();
  }
}
