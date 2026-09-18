import { computed, Injectable, signal } from '@angular/core';

import {
  clampProgressCircleValue,
  getProgressCirclePercentage,
  getProgressCircleStrokeDashoffset,
} from './progress-circle.utils';

@Injectable()
export class AvProgressCircleContext {
  readonly min = signal(0);
  readonly max = signal(100);
  readonly value = signal(0);
  readonly indeterminate = signal(false);

  readonly percentage = computed(() =>
    getProgressCirclePercentage(this.value(), this.min(), this.max()),
  );

  readonly strokeDashoffset = computed(() =>
    getProgressCircleStrokeDashoffset(this.percentage(), this.indeterminate()),
  );

  setValue(value: number): void {
    this.value.set(clampProgressCircleValue(value, this.min(), this.max()));
  }
}
