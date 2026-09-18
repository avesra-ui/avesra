import { Component } from '@angular/core';
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      av-calendar
      aria-label="Min max dates"
      [min-value]="minValue"
      [max-value]="maxValue"
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

export const DEMO_NAME = 'calendar-min-max';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-min-max-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarMinMaxDemo {
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  readonly maxValue = this.minValue.add({ months: 2 }) as CalendarDate;
}`;

@Component({
  selector: 'app-calendar-min-max-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarMinMaxDemo {
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  readonly maxValue = this.minValue.add({ months: 2 }) as CalendarDate;
}
