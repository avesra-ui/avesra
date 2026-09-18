import { Component } from '@angular/core';
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

import { AvRangeCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-range-calendar
  aria-label="Trip dates"
  [min-value]="minValue"
  [max-value]="maxValue"
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

export const DEMO_NAME = 'range-calendar-min-max';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { AvRangeCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-min-max-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarMinMaxDemo {
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  readonly maxValue = this.minValue.add({ months: 2 }) as CalendarDate;
}`;

@Component({
  selector: 'app-range-calendar-min-max-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarMinMaxDemo {
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  readonly maxValue = this.minValue.add({ months: 2 }) as CalendarDate;
}
