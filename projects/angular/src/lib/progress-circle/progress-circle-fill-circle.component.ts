import { Component, computed, inject, input, numberAttribute } from '@angular/core';

import { AvProgressCircleContext } from './progress-circle.context';
import {
  getProgressCircleCircumference,
  getProgressCircleStrokeDashoffset,
  AV_PROGRESS_CIRCLE_CENTER,
  AV_PROGRESS_CIRCLE_RADIUS,
  AV_PROGRESS_CIRCLE_STROKE_WIDTH,
  avProgressCircleFillCircleClasses,
} from './progress-circle.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'circle[av-progress-circle-fill-circle]',
  template: '',
  host: {
    '[class]': 'classes',
    '[attr.cx]': 'cx()',
    '[attr.cy]': 'cy()',
    '[attr.r]': 'r()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-dasharray]': 'circumference()',
    '[attr.stroke-dashoffset]': 'strokeDashoffset()',
    strokeLinecap: 'round',
    '[attr.transform]': 'transform()',
    'data-slot': 'progress-circle-fill-circle',
  },
})
export class AvProgressCircleFillCircleComponent {
  private readonly context = inject(AvProgressCircleContext);

  /** Circle center x. */
  readonly cx = input(AV_PROGRESS_CIRCLE_CENTER, { transform: numberAttribute });

  /** Circle center y. */
  readonly cy = input(AV_PROGRESS_CIRCLE_CENTER, { transform: numberAttribute });

  /** Circle radius. */
  readonly r = input(AV_PROGRESS_CIRCLE_RADIUS, { transform: numberAttribute });

  /** Stroke width of the progress arc. */
  readonly strokeWidth = input(AV_PROGRESS_CIRCLE_STROKE_WIDTH, {
    transform: numberAttribute,
    alias: 'stroke-width',
  });

  protected readonly classes = avProgressCircleFillCircleClasses();

  protected readonly circumference = computed(() => getProgressCircleCircumference(this.r()));

  protected readonly transform = computed(
    () => `rotate(-90 ${this.cx()} ${this.cy()})`,
  );

  protected readonly strokeDashoffset = computed(() =>
    getProgressCircleStrokeDashoffset(
      this.context.percentage(),
      this.context.indeterminate(),
      this.circumference(),
    ),
  );
}
