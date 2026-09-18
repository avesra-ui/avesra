import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getDayOfWeek } from '@internationalized/date';

import { AvRangeCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-range-calendar
  aria-label="Trip dates"
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
</div>`;

export const DEMO_NAME = 'range-calendar-unavailable';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getDayOfWeek } from '@internationalized/date';
import { AvRangeCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-unavailable-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarUnavailableDemo {
  isUnavailable = (date: CalendarDate): boolean => {
    const day = getDayOfWeek(date, 'en-US');
    return day === 0 || day === 6;
  };
}`;

@Component({
  selector: 'app-range-calendar-unavailable-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarUnavailableDemo {
  isUnavailable = (date: CalendarDate): boolean => {
    const day = getDayOfWeek(date, 'en-US');
    return day === 0 || day === 6;
  };
}
