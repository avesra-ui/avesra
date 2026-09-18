import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';

import { AvInputOtpContext } from './input-otp.context';
import {
  avInputOtpCaretClasses,
  avInputOtpSlotClasses,
  avInputOtpSlotPlaceholderClasses,
  avInputOtpSlotValueClasses,
} from './input-otp.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-input-otp-slot]',
  template: `
    @if (char()) {
      <div [class]="slotValueClasses()" data-slot="input-otp-slot-value">{{ char() }}</div>
    } @else if (showPlaceholder()) {
      <div [class]="placeholderClasses()" data-slot="input-otp-slot-placeholder">
        {{ placeholderChar() }}
      </div>
    }
    @if (showCaret()) {
      <div [class]="caretClasses()" data-slot="input-otp-caret"></div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.data-active]': 'isActive() ? "true" : null',
    '[attr.data-disabled]': 'context.disabled() ? "true" : null',
    '[attr.data-filled]': 'char() ? "true" : null',
    '[attr.data-invalid]': 'context.invalid() ? "true" : null',
    'data-slot': 'input-otp-slot',
  },
})
export class AvInputOtpSlotComponent {
  protected readonly context = inject(AvInputOtpContext);

  /** Zero-based slot index. */
  readonly index = input.required<number>();

  protected readonly classes = computed(() => avInputOtpSlotClasses());
  protected readonly slotValueClasses = computed(() => avInputOtpSlotValueClasses());
  protected readonly placeholderClasses = computed(() => avInputOtpSlotPlaceholderClasses());
  protected readonly caretClasses = computed(() => avInputOtpCaretClasses());

  protected readonly char = computed(() => this.context.value()[this.index()] ?? '');

  protected readonly isActive = computed(
    () => this.context.isFocused() && this.context.activeIndex() === this.index(),
  );

  protected readonly showCaret = computed(() => this.isActive() && !this.char());

  protected readonly placeholderChar = computed(() => {
    const placeholder = this.context.placeholder();

    return placeholder ? placeholder[0] : '';
  });

  protected readonly showPlaceholder = computed(
    () => this.isActive() && !this.char() && !!this.placeholderChar(),
  );
}
