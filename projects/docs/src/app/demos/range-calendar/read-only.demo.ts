import { Component } from '@angular/core';
import { CalendarDate } from '@internationalized/date';

import { AvRangeCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-range-calendar
  aria-label="Trip dates"
  readonly
  [default-value]="value"
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

export const DEMO_NAME = 'range-calendar-read-only';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { CalendarDate } from '@internationalized/date';
import { AvRangeCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-read-only-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarReadOnlyDemo {
  readonly value = {
    start: new CalendarDate(2024, 6, 10),
    end: new CalendarDate(2024, 6, 18),
  };
}`;

@Component({
  selector: 'app-range-calendar-read-only-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarReadOnlyDemo {
  readonly value = {
    start: new CalendarDate(2024, 6, 10),
    end: new CalendarDate(2024, 6, 18),
  };
}
