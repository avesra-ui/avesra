import { Component, signal } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isWeekend, today } from '@internationalized/date';

import {
  AvButtonComponent,
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
  <div
    av-range-calendar
    aria-label="Booking range"
    [(value)]="selectedRange"
    [min-value]="minValue"
    [is-date-unavailable]="isDateUnavailable"
  >
    <div av-range-calendar-header>
      <div av-range-calendar-heading></div>
      <button av-range-calendar-nav-button slot="previous"></button>
      <button av-range-calendar-nav-button slot="next"></button>
    </div>
    <div av-range-calendar-grid>
      <div av-range-calendar-grid-header></div>
      <div av-range-calendar-grid-body>
        <ng-template avRangeCalendarCell let-meta>
          {{ meta.formattedDate }}
          @if (isBooked(meta.date) && !meta.unavailable) {
            <span av-range-calendar-cell-indicator></span>
          }
        </ng-template>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-2 text-center">
    <div class="flex items-center justify-center gap-4 text-xs text-muted">
      <span class="flex items-center gap-1">
        <span class="size-2 rounded-full bg-muted"></span>
        Blocked dates
      </span>
      <span class="flex items-center gap-1">
        <span class="size-2 rounded-full bg-default"></span>
        Weekend/Unavailable
      </span>
    </div>
    @if (selectedRange(); as range) {
      <button av-button size="sm" variant="primary">
        Book {{ range.start }} -&gt; {{ range.end }}
      </button>
    }
  </div>
</div>`;

export const DEMO_NAME = 'range-calendar-booking-calendar';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isWeekend, today } from '@internationalized/date';
import {
  AvButtonComponent,
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-booking-calendar-demo',
  imports: [
    AvButtonComponent,
    AvRangeCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarBookingCalendarDemo {
  readonly selectedRange = signal<AvRangeCalendarValue>(null);
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  private readonly blockedDates = [5, 6, 12, 13, 14, 20];
  private readonly locale = 'en-US';

  isDateUnavailable = (date: CalendarDate): boolean =>
    isWeekend(date, this.locale) || this.blockedDates.includes(date.day);

  isBooked(date: CalendarDate): boolean {
    return this.blockedDates.includes(date.day);
  }
}`;

@Component({
  selector: 'app-range-calendar-booking-calendar-demo',
  imports: [
    AvButtonComponent,
    AvRangeCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarBookingCalendarDemo {
  readonly selectedRange = signal<AvRangeCalendarValue>(null);
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  private readonly blockedDates = [5, 6, 12, 13, 14, 20];
  private readonly locale = 'en-US';

  isDateUnavailable = (date: CalendarDate): boolean =>
    isWeekend(date, this.locale) || this.blockedDates.includes(date.day);

  isBooked(date: CalendarDate): boolean {
    return this.blockedDates.includes(date.day);
  }
}
