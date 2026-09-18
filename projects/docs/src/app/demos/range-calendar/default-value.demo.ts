import { Component } from '@angular/core';
import { parseDate } from '@internationalized/date';

import {
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-range-calendar
  aria-label="Trip dates"
  [default-value]="defaultValue"
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

export const DEMO_NAME = 'range-calendar-default-value';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { parseDate } from '@internationalized/date';
import {
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-default-value-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarDefaultValueDemo {
  readonly defaultValue: AvRangeCalendarValue = {
    start: parseDate('2025-02-03'),
    end: parseDate('2025-02-12'),
  };
}`;

@Component({
  selector: 'app-range-calendar-default-value-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarDefaultValueDemo {
  readonly defaultValue: AvRangeCalendarValue = {
    start: parseDate('2025-02-03'),
    end: parseDate('2025-02-12'),
  };
}
