import { Component } from '@angular/core';
import { parseDate } from '@internationalized/date';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-calendar aria-label="Event date" [default-value]="defaultValue">
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

export const DEMO_NAME = 'calendar-default-value';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { parseDate } from '@internationalized/date';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-default-value-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarDefaultValueDemo {
  readonly defaultValue = parseDate('2025-02-14');
}`;

@Component({
  selector: 'app-calendar-default-value-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarDefaultValueDemo {
  readonly defaultValue = parseDate('2025-02-14');
}
