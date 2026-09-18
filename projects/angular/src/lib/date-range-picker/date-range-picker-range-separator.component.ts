import { Component, computed } from '@angular/core';

import { avDateRangePickerRangeSeparatorClasses } from './date-range-picker.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-date-range-picker-range-separator]',
  template: `<ng-content> - </ng-content>`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'date-range-picker-range-separator',
    'aria-hidden': 'true',
  },
})
export class AvDateRangePickerRangeSeparatorComponent {
  protected readonly classes = computed(() => avDateRangePickerRangeSeparatorClasses());
}
