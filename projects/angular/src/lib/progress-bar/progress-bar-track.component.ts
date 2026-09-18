import { Component, computed } from '@angular/core';

import { avProgressBarTrackClasses } from './progress-bar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-progress-bar-track]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'progress-bar-track',
  },
})
export class AvProgressBarTrackComponent {
  protected readonly classes = computed(() => avProgressBarTrackClasses());
}
