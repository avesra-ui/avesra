import { Component, signal } from '@angular/core';
import { CalendarDate, parseDate } from '@internationalized/date';

import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvRangeCalendarImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
  <div av-range-calendar aria-label="Trip dates" [(focused-value)]="focusedDate">
    <div av-range-calendar-header>
      <div av-range-calendar-heading></div>
      <button av-range-calendar-nav-button slot="previous"></button>
      <button av-range-calendar-nav-button slot="next"></button>
    </div>
    <div av-range-calendar-grid>
      <div av-range-calendar-grid-header></div>
      <div av-range-calendar-grid-body></div>
    </div>
  </div>

  <p av-description class="text-center">Focused: {{ focusedDate()?.toString() }}</p>

  <div class="flex flex-wrap justify-center gap-2">
    <button av-button size="sm" variant="secondary" (click)="goTo('2025-01-01')">
      Go to Jan
    </button>
    <button av-button size="sm" variant="secondary" (click)="goTo('2025-06-15')">
      Go to Jun
    </button>
    <button av-button size="sm" variant="secondary" (click)="goTo('2025-12-25')">
      Go to Christmas
    </button>
  </div>
</div>`;

export const DEMO_NAME = 'range-calendar-focused-value';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { CalendarDate, parseDate } from '@internationalized/date';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvRangeCalendarImports,
} from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-focused-value-demo',
  imports: [
    AvButtonComponent,
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarFocusedValueDemo {
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-06-15'));

  goTo(iso: string): void {
    this.focusedDate.set(parseDate(iso));
  }
}`;

@Component({
  selector: 'app-range-calendar-focused-value-demo',
  imports: [
    AvButtonComponent,
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarFocusedValueDemo {
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-06-15'));

  goTo(iso: string): void {
    this.focusedDate.set(parseDate(iso));
  }
}
