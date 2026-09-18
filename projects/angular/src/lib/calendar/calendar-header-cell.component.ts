import { Component, computed } from '@angular/core';

import { avCalendarHeaderCellClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar-header-cell], th[av-calendar-header-cell]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'columnheader',
    'data-slot': 'calendar-header-cell',
  },
})
export class AvCalendarHeaderCellComponent {
  protected readonly classes = computed(() => avCalendarHeaderCellClasses());
}
