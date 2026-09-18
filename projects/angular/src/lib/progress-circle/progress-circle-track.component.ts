import { Component, input } from '@angular/core';

import {
  AV_PROGRESS_CIRCLE_CENTER,
  avProgressCircleTrackClasses,
} from './progress-circle.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'svg[av-progress-circle-track]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes',
    fill: 'none',
    '[attr.viewBox]': 'viewBox()',
    'data-slot': 'progress-circle-track',
  },
})
export class AvProgressCircleTrackComponent {
  /** SVG viewBox. Defaults to the built-in 36×36 coordinate system. */
  readonly viewBox = input(`0 0 ${AV_PROGRESS_CIRCLE_CENTER * 2} ${AV_PROGRESS_CIRCLE_CENTER * 2}`);

  protected readonly classes = avProgressCircleTrackClasses();
}
