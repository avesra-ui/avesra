import { Component } from '@angular/core';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-calendar aria-label="Fixed weeks" [weeks-in-month]="6">
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

export const DEMO_NAME = 'calendar-weeks-in-month';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-weeks-in-month-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarWeeksInMonthDemo {}`;

@Component({
  selector: 'app-calendar-weeks-in-month-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarWeeksInMonthDemo {}
