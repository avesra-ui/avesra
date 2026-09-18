import { Component } from '@angular/core';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-calendar aria-label="Event date">
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

export const DEMO_NAME = 'calendar-year-picker';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-year-picker-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarYearPickerDemo {}`;

@Component({
  selector: 'app-calendar-year-picker-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarYearPickerDemo {}
