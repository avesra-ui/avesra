import { Component } from '@angular/core';
import type { DateValue } from '@internationalized/date';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvDescriptionComponent,
  AvRangeCalendarImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
  <div
    av-range-calendar
    aria-label="Trip dates"
    allows-non-contiguous-ranges
    first-day-of-week="mon"
    [default-value]="defaultValue"
    [is-date-unavailable]="isUnavailable"
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
    Non-contiguous ranges are allowed across unavailable dates
  </p>
</div>`;

export const DEMO_NAME = 'range-calendar-allows-non-contiguous';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import type { DateValue } from '@internationalized/date';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvDescriptionComponent,
  AvRangeCalendarImports,
} from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-allows-non-contiguous-demo',
  imports: [
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarAllowsNonContiguousDemo {
  private readonly now = today(getLocalTimeZone());
  private readonly blockedRanges = [
    [this.now.add({ days: 2 }), this.now.add({ days: 5 })],
    [this.now.add({ days: 12 }), this.now.add({ days: 13 })],
  ] as const;

  readonly defaultValue = {
    start: this.now.add({ days: 1 }),
    end: this.now.add({ days: 9 }),
  };

  isUnavailable = (date: DateValue): boolean =>
    this.blockedRanges.some(
      ([start, end]) => date.compare(start) >= 0 && date.compare(end) <= 0,
    );
}`;

@Component({
  selector: 'app-range-calendar-allows-non-contiguous-demo',
  imports: [
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarAllowsNonContiguousDemo {
  private readonly now = today(getLocalTimeZone());
  private readonly blockedRanges = [
    [this.now.add({ days: 2 }), this.now.add({ days: 5 })],
    [this.now.add({ days: 12 }), this.now.add({ days: 13 })],
  ] as const;

  readonly defaultValue = {
    start: this.now.add({ days: 1 }),
    end: this.now.add({ days: 9 }),
  };

  isUnavailable = (date: DateValue): boolean =>
    this.blockedRanges.some(
      ([start, end]) => date.compare(start) >= 0 && date.compare(end) <= 0,
    );
}
