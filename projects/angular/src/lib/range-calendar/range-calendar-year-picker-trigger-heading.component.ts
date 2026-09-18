import { Component, computed, inject } from '@angular/core';

import { formatMonthYear } from '../calendar/calendar.model';
import { AvRangeCalendarContext } from './range-calendar.context';
import { avRangeCalendarYearPickerTriggerHeadingClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-range-calendar-year-picker-trigger-heading]',
  template: `{{ label() }}`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'range-calendar-year-picker-trigger-heading',
  },
})
export class AvRangeCalendarYearPickerTriggerHeadingComponent {
  private readonly calendar = inject(AvRangeCalendarContext);

  protected readonly classes = computed(() =>
    avRangeCalendarYearPickerTriggerHeadingClasses(),
  );

  protected readonly label = computed(() =>
    formatMonthYear(
      this.calendar.focusedValue(),
      this.calendar.locale(),
      this.calendar.timeZone(),
    ),
  );
}
