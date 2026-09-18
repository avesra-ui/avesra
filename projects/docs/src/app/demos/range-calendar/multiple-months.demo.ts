import { Component } from '@angular/core';

import { AvRangeCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-range-calendar
  aria-label="Trip dates"
  class="w-full max-w-none"
  [visible-duration]="{ months: 2 }"
>
  <div class="mx-auto flex w-max gap-8">
    <div class="w-64">
      <div av-range-calendar-header>
        <button av-range-calendar-nav-button slot="previous"></button>
        <div av-range-calendar-heading class="flex-none"></div>
        <div class="size-6"></div>
      </div>
      <div av-range-calendar-grid>
        <div av-range-calendar-grid-header></div>
        <div av-range-calendar-grid-body></div>
      </div>
    </div>
    <div class="w-64">
      <div av-range-calendar-header>
        <div class="size-6"></div>
        <div av-range-calendar-heading class="flex-none" [offset]="{ months: 1 }"></div>
        <button av-range-calendar-nav-button slot="next"></button>
      </div>
      <div av-range-calendar-grid [offset]="{ months: 1 }">
        <div av-range-calendar-grid-header></div>
        <div av-range-calendar-grid-body></div>
      </div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'range-calendar-multiple-months';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvRangeCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-multiple-months-demo',
  imports: [AvRangeCalendarImports],
  host: { class: 'w-full' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarMultipleMonthsDemo {}`;

@Component({
  selector: 'app-range-calendar-multiple-months-demo',
  imports: [AvRangeCalendarImports],
  host: { class: 'w-full' },
  template: DEMO_TEMPLATE,
})
export class RangeCalendarMultipleMonthsDemo {}
