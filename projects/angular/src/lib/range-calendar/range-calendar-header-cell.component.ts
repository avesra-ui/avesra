import { Component, computed } from '@angular/core';

import { avRangeCalendarHeaderCellClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar-header-cell], th[av-range-calendar-header-cell]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'columnheader',
    'data-slot': 'range-calendar-header-cell',
  },
})
export class AvRangeCalendarHeaderCellComponent {
  protected readonly classes = computed(() => avRangeCalendarHeaderCellClasses());
}
