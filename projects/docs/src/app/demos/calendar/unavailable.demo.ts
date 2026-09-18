import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getDayOfWeek } from '@internationalized/date';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      av-calendar
      aria-label="Unavailable dates"
      [is-date-unavailable]="isUnavailable"
    >
      <div av-calendar-header>
        <div av-calendar-heading></div>
        <button av-calendar-nav-button slot="previous"></button>
        <button av-calendar-nav-button slot="next"></button>
      </div>
      <div av-calendar-grid>
        <div av-calendar-grid-header></div>
        <div av-calendar-grid-body></div>
      </div>
    </div>`;

export const DEMO_NAME = 'calendar-unavailable';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getDayOfWeek } from '@internationalized/date';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-unavailable-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarUnavailableDemo {
  isUnavailable = (date: CalendarDate): boolean => {
    const day = getDayOfWeek(date, 'en-US');
    return day === 0 || day === 6;
  };
}`;

@Component({
  selector: 'app-calendar-unavailable-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarUnavailableDemo {
  isUnavailable = (date: CalendarDate): boolean => {
    const day = getDayOfWeek(date, 'en-US');
    return day === 0 || day === 6;
  };
}
