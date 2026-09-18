import { Injectable, signal, type WritableSignal } from '@angular/core';

import type { AvCalendarDateOffset, AvCalendarWeekdayStyle } from '../calendar/calendar.types';

/** Per-grid offset / weekday style for multi-month composition. */
@Injectable()
export class AvRangeCalendarGridContext {
  readonly offset: WritableSignal<AvCalendarDateOffset | null> = signal(null);
  readonly weekdayStyle: WritableSignal<AvCalendarWeekdayStyle | null> = signal(null);
}
