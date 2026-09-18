import { Component } from '@angular/core';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      av-calendar
      aria-label="Trip dates"
      class="w-full max-w-none"
      [visible-duration]="{ months: 2 }"
    >
      <div class="mx-auto flex w-max gap-8">
        <div class="w-64">
          <div av-calendar-header>
            <button av-calendar-nav-button slot="previous"></button>
            <div av-calendar-heading class="flex-none"></div>
            <div class="size-6"></div>
          </div>
          <div av-calendar-grid>
            <div av-calendar-grid-header></div>
            <div av-calendar-grid-body></div>
          </div>
        </div>
        <div class="w-64">
          <div av-calendar-header>
            <div class="size-6"></div>
            <div av-calendar-heading class="flex-none" [offset]="{ months: 1 }"></div>
            <button av-calendar-nav-button slot="next"></button>
          </div>
          <div av-calendar-grid [offset]="{ months: 1 }">
            <div av-calendar-grid-header></div>
            <div av-calendar-grid-body></div>
          </div>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'calendar-multiple-months';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-multiple-months-demo',
  imports: [AvCalendarImports],
  host: { class: 'w-full' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarMultipleMonthsDemo {}`;

@Component({
  selector: 'app-calendar-multiple-months-demo',
  imports: [AvCalendarImports],
  host: { class: 'w-full' },
  template: DEMO_TEMPLATE,
})
export class CalendarMultipleMonthsDemo {}
