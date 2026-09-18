import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

/** Injectable a11y labels for DatePicker (Material Intl pattern). */
@Injectable({ providedIn: 'root' })
export class AvDatePickerIntl {
  readonly changes = new Subject<void>();

  openCalendarLabel = 'Open calendar';
  closeCalendarLabel = 'Close calendar';

  change(): void {
    this.changes.next();
  }
}

export function avDatePickerIntlFactory(parent: AvDatePickerIntl | null): AvDatePickerIntl {
  return parent || new AvDatePickerIntl();
}

export const AV_DATE_PICKER_INTL_PROVIDER = {
  provide: AvDatePickerIntl,
  deps: [[new Optional(), new SkipSelf(), AvDatePickerIntl]],
  useFactory: avDatePickerIntlFactory,
};
