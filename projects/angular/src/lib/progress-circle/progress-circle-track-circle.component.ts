import { Component, input, numberAttribute } from '@angular/core';

import {
  AV_PROGRESS_CIRCLE_CENTER,
  AV_PROGRESS_CIRCLE_RADIUS,
  AV_PROGRESS_CIRCLE_STROKE_WIDTH,
  avProgressCircleTrackCircleClasses,
} from './progress-circle.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'circle[av-progress-circle-track-circle]',
  template: '',
  host: {
    '[class]': 'classes',
    '[attr.cx]': 'cx()',
    '[attr.cy]': 'cy()',
    '[attr.r]': 'r()',
    '[attr.stroke-width]': 'strokeWidth()',
    'data-slot': 'progress-circle-track-circle',
  },
})
export class AvProgressCircleTrackCircleComponent {
  /** Circle center x. */
  readonly cx = input(AV_PROGRESS_CIRCLE_CENTER, { transform: numberAttribute });

  /** Circle center y. */
  readonly cy = input(AV_PROGRESS_CIRCLE_CENTER, { transform: numberAttribute });

  /** Circle radius. */
  readonly r = input(AV_PROGRESS_CIRCLE_RADIUS, { transform: numberAttribute });

  /** Stroke width of the track ring. */
  readonly strokeWidth = input(AV_PROGRESS_CIRCLE_STROKE_WIDTH, {
    transform: numberAttribute,
    alias: 'stroke-width',
  });

  protected readonly classes = avProgressCircleTrackCircleClasses();
}
