import { Component, computed } from '@angular/core';

import { avCalendarCellIndicatorClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-calendar-cell-indicator]',
  template: ``,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'calendar-cell-indicator',
  },
})
export class AvCalendarCellIndicatorComponent {
  protected readonly classes = computed(() => avCalendarCellIndicatorClasses());
}
