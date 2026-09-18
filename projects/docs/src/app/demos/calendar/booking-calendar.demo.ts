import { Component, signal } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isWeekend, today } from '@internationalized/date';

import {
  AvButtonComponent,
  AvCalendarImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
      <div
        av-calendar
        aria-label="Booking date"
        [(value)]="selectedDate"
        [min-value]="minValue"
        [is-date-unavailable]="isDateUnavailable"
      >
        <div av-calendar-header>
          <div av-calendar-heading></div>
          <button av-calendar-nav-button slot="previous"></button>
          <button av-calendar-nav-button slot="next"></button>
        </div>
        <div av-calendar-grid>
          <div av-calendar-grid-header></div>
          <div av-calendar-grid-body>
            <ng-template avCalendarCell let-meta>
              {{ meta.formattedDate }}
              @if (isBooked(meta.date)) {
                <span av-calendar-cell-indicator></span>
              }
            </ng-template>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 text-center">
        <div class="flex items-center justify-center gap-4 text-xs text-muted">
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-full bg-muted"></span>
            Has bookings
          </span>
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-full bg-default"></span>
            Weekend/Unavailable
          </span>
        </div>
        @if (selectedDate(); as date) {
          <button av-button size="sm" variant="primary">Book {{ date.toString() }}</button>
        }
      </div>
    </div>`;

export const DEMO_NAME = 'calendar-booking-calendar';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isWeekend, today } from '@internationalized/date';
import {
  AvButtonComponent,
  AvCalendarImports,
} from '@avesra/angular';

@Component({
  selector: 'app-calendar-booking-calendar-demo',
  imports: [
    AvButtonComponent,
    AvCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarBookingCalendarDemo {
  readonly selectedDate = signal<CalendarDate | null>(null);
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  private readonly bookedDates = [5, 6, 12, 13, 14, 20];
  private readonly locale = 'en-US';

  isDateUnavailable = (date: CalendarDate): boolean =>
    isWeekend(date, this.locale) || this.bookedDates.includes(date.day);

  isBooked(date: CalendarDate): boolean {
    return this.bookedDates.includes(date.day);
  }
}`;

@Component({
  selector: 'app-calendar-booking-calendar-demo',
  imports: [
    AvButtonComponent,
    AvCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class CalendarBookingCalendarDemo {
  readonly selectedDate = signal<CalendarDate | null>(null);
  readonly minValue = today(getLocalTimeZone()) as CalendarDate;
  private readonly bookedDates = [5, 6, 12, 13, 14, 20];
  private readonly locale = 'en-US';

  isDateUnavailable = (date: CalendarDate): boolean =>
    isWeekend(date, this.locale) || this.bookedDates.includes(date.day);

  isBooked(date: CalendarDate): boolean {
    return this.bookedDates.includes(date.day);
  }
}
