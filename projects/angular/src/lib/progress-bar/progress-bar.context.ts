import { computed, Injectable, signal } from '@angular/core';

import {
  clampProgressBarValue,
  formatProgressBarValue,
  getProgressBarPercentage,
} from './progress-bar.utils';

@Injectable()
export class AvProgressBarContext {
  readonly min = signal(0);
  readonly max = signal(100);
  readonly value = signal(0);
  readonly disabled = signal(false);
  readonly indeterminate = signal(false);
  readonly formatOptions = signal<Intl.NumberFormatOptions | undefined>(undefined);

  readonly percentage = computed(() =>
    getProgressBarPercentage(this.value(), this.min(), this.max()),
  );

  readonly valueText = computed(() =>
    formatProgressBarValue(this.value(), this.formatOptions()),
  );

  setValue(value: number): void {
    this.value.set(clampProgressBarValue(value, this.min(), this.max()));
  }
}
