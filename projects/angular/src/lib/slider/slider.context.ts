import { computed, Injectable, signal } from '@angular/core';

import {
  clamp,
  denormalizeSliderValue,
  normalizeSliderValue,
  percentToValue,
  snapToStep,
  valueToPercent,
} from './slider.utils';
import type { AvSliderOrientation } from './slider.utils';

@Injectable()
export class AvSliderContext {
  private valueUpdater: ((values: number[]) => void) | null = null;
  private touchedCallback: (() => void) | null = null;

  readonly min = signal(0);
  readonly max = signal(100);
  readonly step = signal(1);
  readonly orientation = signal<AvSliderOrientation>('horizontal');
  readonly disabled = signal(false);
  readonly formDisabled = signal(false);
  readonly values = signal<number[]>([0]);
  readonly draggingIndex = signal<number | null>(null);
  readonly trackElement = signal<HTMLElement | null>(null);
  readonly formatOptions = signal<Intl.NumberFormatOptions | undefined>(undefined);

  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  registerValueUpdater(updater: (values: number[]) => void): void {
    this.valueUpdater = updater;
  }

  registerTouchedCallback(callback: () => void): void {
    this.touchedCallback = callback;
  }

  markTouched(): void {
    this.touchedCallback?.();
  }

  registerTrack(element: HTMLElement): void {
    this.trackElement.set(element);
  }

  getThumbPercent(index: number): number {
    const values = this.values();
    const value = values[index] ?? this.min();
    return valueToPercent(value, this.min(), this.max());
  }

  getFillOffsets(): { start: number; end: number; width: number } {
    const values = this.values();
    const isRange = values.length > 1;
    const start = isRange ? this.getThumbPercent(0) : 0;
    const end = this.getThumbPercent(values.length - 1);

    return {
      start,
      end,
      width: end - start,
    };
  }

  setThumbValue(index: number, rawValue: number): void {
    const min = this.min();
    const max = this.max();
    const step = this.step();
    const current = [...this.values()];

    while (current.length <= index) {
      current.push(min);
    }

    let nextValue = snapToStep(rawValue, min, max, step);

    if (current.length > 1) {
      if (index > 0) {
        nextValue = Math.max(nextValue, current[index - 1] ?? min);
      }

      if (index < current.length - 1) {
        nextValue = Math.min(nextValue, current[index + 1] ?? max);
      }
    }

    current[index] = clamp(nextValue, min, max);
    this.values.set(current);
    this.valueUpdater?.(current);
  }

  setValueFromPercent(index: number, percent: number): void {
    const value = percentToValue(percent, this.min(), this.max(), this.step());
    this.setThumbValue(index, value);
  }

  setValues(value: number | number[]): void {
    const normalized = normalizeSliderValue(value).map((entry) =>
      snapToStep(entry, this.min(), this.max(), this.step()),
    );

    this.values.set(normalized);
  }

  emitValue(): number | number[] {
    return denormalizeSliderValue(this.values());
  }
}
