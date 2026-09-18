import { Component } from '@angular/core';
import { CalendarDate } from '@internationalized/date';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      av-calendar
      aria-label="Read-only calendar"
      readonly
      [default-value]="value"
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

export const DEMO_NAME = 'calendar-read-only';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { CalendarDate } from '@internationalized/date';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-read-only-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarReadOnlyDemo {
  readonly value = new CalendarDate(2024, 6, 15);
}`;

@Component({
  selector: 'app-calendar-read-only-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarReadOnlyDemo {
  readonly value = new CalendarDate(2024, 6, 15);
}
