import { Component, computed } from '@angular/core';

import { avMeterTrackClasses } from './meter.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-meter-track]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'meter-track',
  },
})
export class AvMeterTrackComponent {
  protected readonly classes = computed(() => avMeterTrackClasses());
}
