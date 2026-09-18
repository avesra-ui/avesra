import { Component, computed, inject } from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import { formatMonthYear } from './calendar.model';
import { avCalendarYearPickerTriggerHeadingClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-calendar-year-picker-trigger-heading]',
  template: `{{ label() }}`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'calendar-year-picker-trigger-heading',
  },
})
export class AvCalendarYearPickerTriggerHeadingComponent {
  private readonly calendar = inject(AvCalendarContext);

  protected readonly classes = computed(() => avCalendarYearPickerTriggerHeadingClasses());

  protected readonly label = computed(() =>
    formatMonthYear(
      this.calendar.focusedValue(),
      this.calendar.locale(),
      this.calendar.timeZone(),
    ),
  );
}
