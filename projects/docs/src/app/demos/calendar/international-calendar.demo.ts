import { Component } from '@angular/core';
import {
  getLocalTimeZone,
  IndianCalendar,
  toCalendar,
  today,
} from '@internationalized/date';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      av-calendar
      aria-label="Event date"
      locale="hi-IN-u-ca-indian"
      [default-value]="defaultValue"
      [default-focused-value]="defaultValue"
    >
      <div av-calendar-header>
        <button av-calendar-year-picker-trigger>
          <span av-calendar-year-picker-trigger-heading></span>
          <span av-calendar-year-picker-trigger-indicator></span>
        </button>
        <button av-calendar-nav-button slot="previous"></button>
        <button av-calendar-nav-button slot="next"></button>
      </div>
      <div av-calendar-grid>
        <div av-calendar-grid-header></div>
        <div av-calendar-grid-body></div>
      </div>
      <div av-calendar-year-picker-grid></div>
    </div>`;

export const DEMO_NAME = 'calendar-international-calendar';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  getLocalTimeZone,
  IndianCalendar,
  toCalendar,
  today,
} from '@internationalized/date';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-international-calendar-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarInternationalCalendarDemo {
  readonly defaultValue = toCalendar(today(getLocalTimeZone()), new IndianCalendar());
}`;

@Component({
  selector: 'app-calendar-international-calendar-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarInternationalCalendarDemo {
  readonly defaultValue = toCalendar(today(getLocalTimeZone()), new IndianCalendar());
}
