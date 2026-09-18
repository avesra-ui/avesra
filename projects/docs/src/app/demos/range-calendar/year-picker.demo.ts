import { Component } from '@angular/core';

import { AvRangeCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-range-calendar aria-label="Trip dates">
  <div av-range-calendar-header>
    <button av-range-calendar-year-picker-trigger>
      <span av-range-calendar-year-picker-trigger-heading></span>
      <span av-range-calendar-year-picker-trigger-indicator></span>
    </button>
    <button av-range-calendar-nav-button slot="previous"></button>
    <button av-range-calendar-nav-button slot="next"></button>
  </div>
  <div av-range-calendar-grid>
    <div av-range-calendar-grid-header></div>
    <div av-range-calendar-grid-body></div>
  </div>
  <div av-range-calendar-year-picker-grid></div>
</div>`;

export const DEMO_NAME = 'range-calendar-year-picker';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvRangeCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-year-picker-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarYearPickerDemo {}`;

@Component({
  selector: 'app-range-calendar-year-picker-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarYearPickerDemo {}
