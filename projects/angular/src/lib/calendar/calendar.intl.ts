import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

/** Injectable strings for calendar chrome and screen readers (Material Intl pattern). */
@Injectable({ providedIn: 'root' })
export class AvCalendarIntl {
  readonly changes = new Subject<void>();

  previousMonthLabel = 'Previous';
  nextMonthLabel = 'Next';
  openYearPickerLabel = 'Open year picker';
  closeYearPickerLabel = 'Close year picker';

  /** Notify consumers that labels changed. */
  change(): void {
    this.changes.next();
  }
}

/** Optional override provider helper. */
export function avCalendarIntlProvider(intl: AvCalendarIntl): {
  provide: typeof AvCalendarIntl;
  useValue: AvCalendarIntl;
} {
  return { provide: AvCalendarIntl, useValue: intl };
}

export function avCalendarIntlFactory(parent: AvCalendarIntl | null): AvCalendarIntl {
  return parent || new AvCalendarIntl();
}

export const AV_CALENDAR_INTL_PROVIDER = {
  provide: AvCalendarIntl,
  deps: [[new Optional(), new SkipSelf(), AvCalendarIntl]],
  useFactory: avCalendarIntlFactory,
};
