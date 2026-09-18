import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

/** Injectable a11y labels for DateField (Material Intl pattern). */
@Injectable({ providedIn: 'root' })
export class AvDateFieldIntl {
  readonly changes = new Subject<void>();

  fieldLabel = 'Date';
  clearLabel = 'Clear';
  dayPeriodAm = 'AM';
  dayPeriodPm = 'PM';

  change(): void {
    this.changes.next();
  }
}

export function avDateFieldIntlFactory(parent: AvDateFieldIntl | null): AvDateFieldIntl {
  return parent || new AvDateFieldIntl();
}

export const AV_DATE_FIELD_INTL_PROVIDER = {
  provide: AvDateFieldIntl,
  deps: [[new Optional(), new SkipSelf(), AvDateFieldIntl]],
  useFactory: avDateFieldIntlFactory,
};
