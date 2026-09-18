import { computed, Injectable, signal } from '@angular/core';

import { clampMeterValue, formatMeterValue, getMeterPercentage } from './meter.utils';

@Injectable()
export class AvMeterContext {
  readonly min = signal(0);
  readonly max = signal(100);
  readonly value = signal(0);
  readonly disabled = signal(false);
  readonly formatOptions = signal<Intl.NumberFormatOptions | undefined>(undefined);

  readonly percentage = computed(() =>
    getMeterPercentage(this.value(), this.min(), this.max()),
  );

  readonly valueText = computed(() =>
    formatMeterValue(this.value(), this.formatOptions()),
  );

  setValue(value: number): void {
    this.value.set(clampMeterValue(value, this.min(), this.max()));
  }
}
