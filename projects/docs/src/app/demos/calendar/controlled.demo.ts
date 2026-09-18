import { Component, signal } from '@angular/core';
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
  startOfMonth,
  startOfWeek,
  today,
} from '@internationalized/date';

import {
  AvButtonGroupImports,
  AvCalendarImports,
  AvDescriptionComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
      <av-button-group full-width size="sm" variant="tertiary">
        <button av-button (click)="setToday()">Today</button>
        <button av-button (click)="setWeek()">Week</button>
        <button av-button (click)="setMonth()">Month</button>
      </av-button-group>

      <div
        av-calendar
        aria-label="Event date"
        [(value)]="value"
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

      <p av-description class="text-center">
        Selected date: {{ value() ? value()!.toString() : '(none)' }}
      </p>

      <div class="flex gap-2">
        <button av-button size="sm" variant="secondary" (click)="setToday()">Set Today</button>
        <button av-button size="sm" variant="secondary" (click)="setChristmas()">
          Set Christmas
        </button>
        <button av-button size="sm" variant="tertiary" (click)="clear()">Clear</button>
      </div>
    </div>`;

export const DEMO_NAME = 'calendar-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
  startOfMonth,
  startOfWeek,
  today,
} from '@internationalized/date';
import {
  AvButtonGroupImports,
  AvCalendarImports,
  AvDescriptionComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-calendar-controlled-demo',
  imports: [
    AvButtonGroupImports,
    AvDescriptionComponent,
    AvCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarControlledDemo {
  readonly value = signal<CalendarDate | null>(null);
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-12-25'));
  private readonly locale = 'en-US';

  setToday(): void {
    const date = today(getLocalTimeZone()) as CalendarDate;
    this.value.set(date);
    this.focusedDate.set(date);
  }

  setWeek(): void {
    const date = startOfWeek(today(getLocalTimeZone()), this.locale) as CalendarDate;
    this.value.set(date);
    this.focusedDate.set(date);
  }

  setMonth(): void {
    const date = startOfMonth(today(getLocalTimeZone())) as CalendarDate;
    this.value.set(date);
    this.focusedDate.set(date);
  }

  setChristmas(): void {
    const date = parseDate('2025-12-25');
    this.value.set(date);
    this.focusedDate.set(date);
  }

  clear(): void {
    this.value.set(null);
  }
}`;

@Component({
  selector: 'app-calendar-controlled-demo',
  imports: [
    AvButtonGroupImports,
    AvDescriptionComponent,
    AvCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class CalendarControlledDemo {
  readonly value = signal<CalendarDate | null>(null);
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-12-25'));
  private readonly locale = 'en-US';

  setToday(): void {
    const date = today(getLocalTimeZone()) as CalendarDate;
    this.value.set(date);
    this.focusedDate.set(date);
  }

  setWeek(): void {
    const date = startOfWeek(today(getLocalTimeZone()), this.locale) as CalendarDate;
    this.value.set(date);
    this.focusedDate.set(date);
  }

  setMonth(): void {
    const date = startOfMonth(today(getLocalTimeZone())) as CalendarDate;
    this.value.set(date);
    this.focusedDate.set(date);
  }

  setChristmas(): void {
    const date = parseDate('2025-12-25');
    this.value.set(date);
    this.focusedDate.set(date);
  }

  clear(): void {
    this.value.set(null);
  }
}
