import { Component } from '@angular/core';

import { AvRangeCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-range-calendar aria-label="Trip dates" disabled>
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

export const DEMO_NAME = 'range-calendar-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvRangeCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-disabled-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarDisabledDemo {}`;

@Component({
  selector: 'app-range-calendar-disabled-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarDisabledDemo {}
