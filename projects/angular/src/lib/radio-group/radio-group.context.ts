import { Injectable, signal } from '@angular/core';

import type { AvRadioGroupOrientation, AvRadioGroupVariant } from './radio-group.utils';

@Injectable()
export class AvRadioGroupContext {
  readonly variant = signal<AvRadioGroupVariant>('primary');
  readonly orientation = signal<AvRadioGroupOrientation>('vertical');
  readonly disabled = signal(false);
  readonly invalid = signal(false);
  readonly name = signal<string | undefined>(undefined);
  readonly selectedValue = signal<string | null>(null);

  private updateSelectedValue: ((value: string | null) => void) | null = null;
  private markTouchedCallback: (() => void) | null = null;

  registerSelectedValueUpdater(update: (value: string | null) => void): void {
    this.updateSelectedValue = update;
  }

  registerTouchedCallback(callback: () => void): void {
    this.markTouchedCallback = callback;
  }

  markTouched(): void {
    this.markTouchedCallback?.();
  }

  isSelected(value: string): boolean {
    return this.selectedValue() === value;
  }

  selectValue(value: string): void {
    if (this.disabled() || !value) {
      return;
    }

    if (this.selectedValue() === value) {
      return;
    }

    this.selectedValue.set(value);
    this.updateSelectedValue?.(value);
  }
}
