import { Component, signal } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import {
  getLocalTimeZone,
  parseDate,
  startOfMonth,
  startOfWeek,
  today,
} from '@internationalized/date';

import {
  AvButtonGroupImports,
  AvDescriptionComponent,
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
  <av-button-group variant="tertiary">
    <button av-button (click)="focusThisWeek()">This week</button>
    <button av-button (click)="focusNextWeek()">Next week</button>
    <button av-button (click)="focusNextMonth()">Next month</button>
  </av-button-group>

  <div
    av-range-calendar
    aria-label="Trip dates"
    first-day-of-week="mon"
    [(value)]="value"
    [(focused-value)]="focusedDate"
  >
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

  <p av-description class="text-center">
    @if (value(); as range) {
      Selected range: {{ range.start }} -> {{ range.end }}
    } @else {
      Selected range: (none)
    }
  </p>

  <div class="flex gap-2">
    <button av-button size="sm" variant="secondary" (click)="setOneWeek()">Set 1 week</button>
    <button av-button size="sm" variant="secondary" (click)="setHolidays()">Set Holidays</button>
    <button av-button size="sm" variant="tertiary" (click)="clear()">Clear</button>
  </div>
</div>`;

export const DEMO_NAME = 'range-calendar-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import {
  getLocalTimeZone,
  parseDate,
  startOfMonth,
  startOfWeek,
  today,
} from '@internationalized/date';
import {
  AvButtonGroupImports,
  AvDescriptionComponent,
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-controlled-demo',
  imports: [
    AvButtonGroupImports,
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarControlledDemo {
  readonly value = signal<AvRangeCalendarValue>(null);
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-12-25'));
  private readonly locale = 'en-US';

  focusThisWeek(): void {
    this.focusedDate.set(today(getLocalTimeZone()) as CalendarDate);
  }

  focusNextWeek(): void {
    const nextWeekStart = startOfWeek(
      today(getLocalTimeZone()).add({ weeks: 1 }),
      this.locale,
      'mon',
    ) as CalendarDate;
    this.focusedDate.set(nextWeekStart);
  }

  focusNextMonth(): void {
    const nextMonthStart = startOfMonth(
      today(getLocalTimeZone()).add({ months: 1 }),
    ) as CalendarDate;
    this.focusedDate.set(nextMonthStart);
  }

  setOneWeek(): void {
    const start = today(getLocalTimeZone()) as CalendarDate;
    this.value.set({ start, end: start.add({ days: 6 }) as CalendarDate });
    this.focusedDate.set(start);
  }

  setHolidays(): void {
    const start = parseDate('2025-12-20');
    this.value.set({ start, end: parseDate('2025-12-31') });
    this.focusedDate.set(start);
  }

  clear(): void {
    this.value.set(null);
  }
}`;

@Component({
  selector: 'app-range-calendar-controlled-demo',
  imports: [
    AvButtonGroupImports,
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarControlledDemo {
  readonly value = signal<AvRangeCalendarValue>(null);
  readonly focusedDate = signal<CalendarDate | null>(parseDate('2025-12-25'));
  private readonly locale = 'en-US';

  focusThisWeek(): void {
    this.focusedDate.set(today(getLocalTimeZone()) as CalendarDate);
  }

  focusNextWeek(): void {
    const nextWeekStart = startOfWeek(
      today(getLocalTimeZone()).add({ weeks: 1 }),
      this.locale,
      'mon',
    ) as CalendarDate;
    this.focusedDate.set(nextWeekStart);
  }

  focusNextMonth(): void {
    const nextMonthStart = startOfMonth(
      today(getLocalTimeZone()).add({ months: 1 }),
    ) as CalendarDate;
    this.focusedDate.set(nextMonthStart);
  }

  setOneWeek(): void {
    const start = today(getLocalTimeZone()) as CalendarDate;
    this.value.set({ start, end: start.add({ days: 6 }) as CalendarDate });
    this.focusedDate.set(start);
  }

  setHolidays(): void {
    const start = parseDate('2025-12-20');
    this.value.set({ start, end: parseDate('2025-12-31') });
    this.focusedDate.set(start);
  }

  clear(): void {
    this.value.set(null);
  }
}
