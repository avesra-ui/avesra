import { Injectable, signal } from '@angular/core';

import type { AvCheckboxVariant } from '../checkbox/checkbox.utils';

@Injectable()
export class AvCheckboxGroupContext {
  readonly variant = signal<AvCheckboxVariant>('primary');
  readonly disabled = signal(false);
  readonly invalid = signal(false);
  readonly selectedValues = signal<string[]>([]);

  private updateSelectedValues: ((values: string[]) => void) | null = null;
  private markTouchedCallback: (() => void) | null = null;

  registerSelectedValuesUpdater(update: (values: string[]) => void): void {
    this.updateSelectedValues = update;
  }

  registerTouchedCallback(callback: () => void): void {
    this.markTouchedCallback = callback;
  }

  markTouched(): void {
    this.markTouchedCallback?.();
  }

  isSelected(value: string): boolean {
    return this.selectedValues().includes(value);
  }

  toggleValue(value: string, checked?: boolean): void {
    if (this.disabled() || !value) {
      return;
    }

    let values = [...this.selectedValues()];
    const isCurrentlySelected = values.includes(value);
    const nextSelected = checked ?? !isCurrentlySelected;

    if (nextSelected && !isCurrentlySelected) {
      values = [...values, value];
    } else if (!nextSelected && isCurrentlySelected) {
      values = values.filter((item) => item !== value);
    } else {
      return;
    }

    this.selectedValues.set(values);
    this.updateSelectedValues?.(values);
  }
}
