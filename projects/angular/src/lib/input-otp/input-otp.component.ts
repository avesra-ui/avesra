import {
  afterNextRender,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  forwardRef,
  inject,
  input,
  model,
  output,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AvInputOtpContext } from './input-otp.context';
import { AvInputOtpValidationContext } from './input-otp.validation.context';
import {
  avCreateOtpCharPattern,
  avFilterOtpValue,
  avInputOtpClasses,
  avInputOtpContainerClasses,
  avInputOtpInputClasses,
  avIsPrintableKeyBlocked,
  avTransformPastedOtpValue,
} from './input-otp.utils';
import type { AvInputOtpInputMode, AvInputOtpTextAlign, AvInputOtpVariant } from './input-otp.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-input-otp]',
  template: `
    <div [class]="containerClasses()">
      <ng-content />
    </div>
    <input
      #otpInput
      type="text"
      data-input-otp
      autocomplete="one-time-code"
      [class]="inputClasses()"
      [attr.name]="name() || null"
      [disabled]="isDisabled()"
      [attr.maxlength]="maxLength()"
      [value]="value()"
      [attr.inputmode]="inputMode()"
      [attr.placeholder]="placeholder() || null"
      [attr.aria-invalid]="showInvalid() ? 'true' : null"
      [attr.aria-describedby]="ariaDescribedby() || null"
      [attr.autofocus]="autoFocus() ? '' : null"
      (input)="onInput($event)"
      (keydown)="onKeydown($event)"
      (focus)="onFocus()"
      (blur)="onBlur()"
      (click)="onSelectionChange()"
      (keyup)="onSelectionChange()"
      (select)="onSelectionChange()"
      (paste)="onPaste($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'showInvalid() ? "true" : null',
    'data-slot': 'input-otp',
  },
  providers: [
    AvInputOtpContext,
    AvInputOtpValidationContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvInputOtpComponent),
      multi: true,
    },
  ],
})
export class AvInputOtpComponent implements ControlValueAccessor {
  private readonly context = inject(AvInputOtpContext);
  private readonly validationContext = inject(AvInputOtpValidationContext);
  private readonly destroyRef = inject(DestroyRef);
  private readonly otpInput = viewChild.required<ElementRef<HTMLInputElement>>('otpInput');

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);
  private defaultsApplied = false;

  /** Maximum number of characters. */
  readonly maxLength = input(6, { transform: (value: number | string) => Number(value) });

  /** Visual style variant. */
  readonly variant = input<AvInputOtpVariant>('primary');

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the input as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  /** Server-side or custom validation error messages. */
  readonly validationErrors = input<string[]>([]);

  /** Regex pattern for allowed characters. */
  readonly pattern = input<string>();

  /** Form field name for native form submission. */
  readonly name = input<string>();

  /** Virtual keyboard type on mobile devices. */
  readonly inputMode = input<AvInputOtpInputMode>('numeric', { alias: 'inputmode' });

  /** Placeholder character shown in empty active slots. */
  readonly placeholder = input<string>();

  /** Caret alignment — affects slot click focus position. */
  readonly textAlign = input<AvInputOtpTextAlign>('left');

  /** Whether to focus the input on mount. */
  readonly autoFocus = input(false, { alias: 'autofocus', transform: booleanAttribute });

  /** ID of the element that describes the input (e.g. field error). */
  readonly ariaDescribedby = input<string>(undefined, { alias: 'aria-describedby' });

  /** Additional CSS classes for the inner container. */
  readonly containerClass = input<string>(undefined, { alias: 'container-class' });

  /** Additional CSS classes for the hidden input. */
  readonly inputClass = input<string>(undefined, { alias: 'input-class' });

  /** Transform pasted text before filtering (e.g. strip hyphens). */
  readonly pasteTransformer = input<(text: string) => string>();

  /** Initial value for uncontrolled usage. */
  readonly defaultValue = input('', { alias: 'default-value' });

  /** Current OTP value. Supports two-way binding with `[(value)]`. */
  readonly value = model('');

  /** Emits when all slots are filled. */
  readonly complete = output<string>();

  protected readonly classes = computed(() => avInputOtpClasses({ variant: this.variant() }));

  protected readonly containerClasses = computed(() =>
    avInputOtpContainerClasses(this.containerClass()),
  );

  protected readonly inputClasses = computed(() => avInputOtpInputClasses(this.inputClass()));

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  protected readonly showInvalid = computed(
    () => this.invalid() || this.validationErrors().length > 0,
  );

  private readonly charPattern = computed(() => avCreateOtpCharPattern(this.pattern()));

  constructor() {
    effect(() => {
      const variant = this.variant();
      const disabled = this.isDisabled();
      const invalid = this.showInvalid();
      const maxLength = this.maxLength();
      const currentValue = this.value();
      const placeholder = this.placeholder() ?? '';
      const textAlign = this.textAlign();
      const validationErrors = this.validationErrors();

      untracked(() => {
        this.context.variant.set(variant);
        this.context.disabled.set(disabled);
        this.context.invalid.set(invalid);
        this.context.maxLength.set(maxLength);
        this.context.value.set(currentValue);
        this.context.placeholder.set(placeholder);
        this.context.textAlign.set(textAlign);

        this.validationContext.invalid.set(invalid);
        this.validationContext.validationErrors.set(validationErrors);
      });
    });

    effect(() => {
      const defaults = this.defaultValue();

      if (!this.defaultsApplied && defaults.length > 0 && this.value().length === 0) {
        untracked(() => {
          this.setValue(defaults, false);
          this.defaultsApplied = true;
        });
      }
    });

    afterNextRender(() => {
      const input = this.otpInput().nativeElement;

      this.context.registerInput(input);
      input.value = this.value();

      if (this.autoFocus()) {
        input.focus();
        this.context.syncActiveIndex();
      }

      this.destroyRef.onDestroy(() => {
        this.context.unregisterInput();
      });
    });

    effect(() => {
      const currentValue = this.value();

      untracked(() => {
        const input = this.otpInput()?.nativeElement;

        if (input && input.value !== currentValue) {
          input.value = currentValue;
        }
      });
    });
  }

  writeValue(value: string | null): void {
    this.setValue(value ?? '', false);
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
    const inputEvent = event as InputEvent;
    const input = event.target as HTMLInputElement;
    const previousValue = this.value();
    let nextValue = avFilterOtpValue(input.value, this.charPattern(), this.maxLength());

    if (
      inputEvent.inputType === 'deleteContentBackward' &&
      nextValue.length === previousValue.length &&
      (input.selectionStart ?? 0) > 0
    ) {
      const position = input.selectionStart ?? 0;
      nextValue =
        previousValue.slice(0, position - 1) + previousValue.slice(position);
      nextValue = avFilterOtpValue(nextValue, this.charPattern(), this.maxLength());
      input.value = nextValue;
      this.setValue(nextValue, true);
      this.context.moveCaretTo(Math.max(position - 1, 0));
      return;
    }

    input.value = nextValue;
    this.setValue(nextValue, true);
    this.context.syncActiveIndex();
    this.emitCompleteIfNeeded(nextValue);
  }

  protected onPaste(event: ClipboardEvent): void {
    event.preventDefault();

    const raw = event.clipboardData?.getData('text') ?? '';
    const pasted = avTransformPastedOtpValue(raw, this.pasteTransformer());
    const input = this.otpInput().nativeElement;
    const start = input.selectionStart ?? this.value().length;
    const end = input.selectionEnd ?? start;
    const merged = this.value().slice(0, start) + pasted + this.value().slice(end);
    const nextValue = avFilterOtpValue(merged, this.charPattern(), this.maxLength());

    input.value = nextValue;
    this.setValue(nextValue, true);

    const nextPosition = Math.min(nextValue.length, this.maxLength());
    this.context.moveCaretTo(nextPosition);
    this.context.isFocused.set(true);
    this.emitCompleteIfNeeded(nextValue);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.isDisabled()) {
      return;
    }

    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const input = this.otpInput().nativeElement;
    const currentValue = this.value();

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const position = Math.max((input.selectionStart ?? 0) - 1, 0);
      this.context.moveCaretTo(position);
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const position = Math.min((input.selectionStart ?? 0) + 1, currentValue.length);
      this.context.moveCaretTo(position);
      return;
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      return;
    }

    if (event.key === 'Backspace') {
      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? start;

      if (start === end && start === 0) {
        event.preventDefault();
        return;
      }

      if (start === end && start > currentValue.length) {
        event.preventDefault();
        this.context.moveCaretTo(currentValue.length);
        return;
      }

      if (start === end && start > 0 && start === currentValue.length) {
        return;
      }

      if (start === end && start > 0 && !currentValue[start - 1]) {
        event.preventDefault();
        this.context.moveCaretTo(start - 1);
        return;
      }

      return;
    }

    if (event.key === 'Delete') {
      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? start;

      if (start === end && start >= currentValue.length) {
        event.preventDefault();
      }

      return;
    }

    if (avIsPrintableKeyBlocked(event, input, currentValue, this.maxLength(), this.charPattern())) {
      event.preventDefault();
    }
  }

  protected onFocus(): void {
    this.context.isFocused.set(true);
    this.context.syncActiveIndex();
  }

  protected onBlur(): void {
    this.context.isFocused.set(false);
    this.onTouched();
  }

  protected onSelectionChange(): void {
    this.context.syncActiveIndex();
  }

  private emitCompleteIfNeeded(nextValue: string): void {
    if (nextValue.length === this.maxLength()) {
      this.complete.emit(nextValue);
    }
  }

  private setValue(nextValue: string, emitChange: boolean): void {
    const filtered = avFilterOtpValue(nextValue, this.charPattern(), this.maxLength());

    this.value.set(filtered);
    this.context.value.set(filtered);

    if (emitChange) {
      this.onChange(filtered);
    }
  }
}
