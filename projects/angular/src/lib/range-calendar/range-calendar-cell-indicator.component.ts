import { Component, computed } from '@angular/core';

import { avRangeCalendarCellIndicatorClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-range-calendar-cell-indicator]',
  template: ``,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'range-calendar-cell-indicator',
  },
})
export class AvRangeCalendarCellIndicatorComponent {
  protected readonly classes = computed(() => avRangeCalendarCellIndicatorClasses());
}
