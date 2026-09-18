import { Component, signal } from '@angular/core';
import { CalendarDate, parseDate } from '@internationalized/date';

import {
  AvButtonComponent,
  AvCalendarImports,
  AvDescriptionComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
      <div
        av-calendar
        aria-label="Event date"
        [(focused-value)]="focusedDate"
      >
        <div av-calendar-header>
          <div av-calendar-heading></div>
          <button av-calendar-nav-button slot="previous"></button>
          <button av-calendar-nav-button slot="next"></button>
        </div>
        <div av-calendar-grid>
          <div av-calendar-grid-header></div>
          <div av-calendar-grid-body></div>
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

export const DEMO_NAME = 'calendar-focused-value';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { CalendarDate, parseDate } from '@internationalized/date';
import {
  AvButtonComponent,
  AvCalendarImports,
  AvDescriptionComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-calendar-focused-value-demo',
  imports: [
    AvButtonComponent,
    AvDescriptionComponent,
    AvCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarFocusedValueDemo {
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-06-15'));

  goTo(iso: string): void {
    this.focusedDate.set(parseDate(iso));
  }
}`;

@Component({
  selector: 'app-calendar-focused-value-demo',
  imports: [
    AvButtonComponent,
    AvDescriptionComponent,
    AvCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class CalendarFocusedValueDemo {
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-06-15'));

  goTo(iso: string): void {
    this.focusedDate.set(parseDate(iso));
  }
}
