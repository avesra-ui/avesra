import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvDescriptionComponent,
  AvRangeCalendarImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
  <div
    av-range-calendar
    aria-label="Trip dates"
    [min-value]="minValue"
    [is-date-unavailable]="isUnavailable"
  >
    <div av-range-calendar-header>
      <div av-range-calendar-heading></div>
      <button av-range-calendar-nav-button slot="previous"></button>
      <button av-range-calendar-nav-button slot="next"></button>
    </div>
    <div av-range-calendar-grid>
      <div av-range-calendar-grid-header></div>
      <div av-range-calendar-grid-body></div>
    </div>
  </div>
  <p av-description class="text-center">
    After selecting a start date, only dates within 7 days are available
  </p>
</div>`;

export const DEMO_NAME = 'range-calendar-anchor-unavailable';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvDescriptionComponent,
  AvRangeCalendarImports,
} from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-anchor-unavailable-demo',
  imports: [
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarAnchorUnavailableDemo {
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;

  isUnavailable = (date: CalendarDate, anchorDate: CalendarDate | null): boolean => {
    return anchorDate != null && Math.abs(date.compare(anchorDate)) > 7;
  };
}`;

@Component({
  selector: 'app-range-calendar-anchor-unavailable-demo',
  imports: [
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarAnchorUnavailableDemo {
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;

  isUnavailable = (date: CalendarDate, anchorDate: CalendarDate | null): boolean => {
    return anchorDate != null && Math.abs(date.compare(anchorDate)) > 7;
  };
}
