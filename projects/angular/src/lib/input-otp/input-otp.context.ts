import { Injectable, signal } from '@angular/core';

import type { AvInputOtpTextAlign, AvInputOtpVariant } from './input-otp.utils';
import { avResolveFocusIndex } from './input-otp.utils';

@Injectable()
export class AvInputOtpContext {
  readonly variant = signal<AvInputOtpVariant>('primary');
  readonly disabled = signal(false);
  readonly invalid = signal(false);
  readonly value = signal('');
  readonly activeIndex = signal(0);
  readonly isFocused = signal(false);
  readonly maxLength = signal(6);
  readonly placeholder = signal('');
  readonly textAlign = signal<AvInputOtpTextAlign>('left');

  private inputElement: HTMLInputElement | null = null;

  registerInput(element: HTMLInputElement): void {
    this.inputElement = element;
  }

  unregisterInput(): void {
    this.inputElement = null;
  }

  focusAt(slotIndex: number): void {
    if (!this.inputElement || this.disabled()) {
      return;
    }

    const position = avResolveFocusIndex(
      slotIndex,
      this.value().length,
      this.textAlign(),
    );

    this.inputElement.focus();
    this.inputElement.setSelectionRange(position, position);
    this.activeIndex.set(Math.min(position, Math.max(this.maxLength() - 1, 0)));
    this.isFocused.set(true);
  }

  focusAtEnd(): void {
    this.focusAt(this.value().length);
  }

  syncActiveIndex(): void {
    if (!this.inputElement) {
      return;
    }

    const position = this.inputElement.selectionStart ?? this.value().length;
    const clamped = Math.min(position, Math.max(this.maxLength() - 1, 0));

    this.activeIndex.set(clamped);
  }

  moveCaretTo(position: number): void {
    if (!this.inputElement) {
      return;
    }

    const clamped = Math.max(0, Math.min(position, this.value().length));

    this.inputElement.setSelectionRange(clamped, clamped);
    this.activeIndex.set(Math.min(clamped, Math.max(this.maxLength() - 1, 0)));
  }
}
