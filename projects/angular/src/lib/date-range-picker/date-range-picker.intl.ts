import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

/** Injectable a11y labels for DateRangePicker (Material Intl pattern). */
@Injectable({ providedIn: 'root' })
export class AvDateRangePickerIntl {
  readonly changes = new Subject<void>();

  openCalendarLabel = 'Open calendar';
  closeCalendarLabel = 'Close calendar';

  change(): void {
    this.changes.next();
  }
}

export function avDateRangePickerIntlFactory(
  parent: AvDateRangePickerIntl | null,
): AvDateRangePickerIntl {
  return parent || new AvDateRangePickerIntl();
}

export const AV_DATE_RANGE_PICKER_INTL_PROVIDER = {
  provide: AvDateRangePickerIntl,
  deps: [[new Optional(), new SkipSelf(), AvDateRangePickerIntl]],
  useFactory: avDateRangePickerIntlFactory,
};
