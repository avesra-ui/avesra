import { Component, computed, signal } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvDescriptionComponent,
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-4">
  <div
    av-range-calendar
    aria-label="Trip dates"
    first-day-of-week="mon"
    [invalid]="isInvalid()"
    [(value)]="value"
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
  @if (isInvalid()) {
    <p class="text-sm text-danger">Maximum stay duration is 1 week</p>
  } @else {
    <p av-description class="text-center">Select a stay of up to 7 days</p>
  }
</div>`;

export const DEMO_NAME = 'range-calendar-invalid';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvDescriptionComponent,
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-invalid-demo',
  imports: [
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarInvalidDemo {
  private readonly now = today(getLocalTimeZone());
  readonly value = signal<AvRangeCalendarValue>({
    start: this.now.add({ days: 6 }),
    end: this.now.add({ days: 14 }),
  });
  readonly isInvalid = computed(() => {
    const range = this.value();
    return !!range && range.end.compare(range.start) > 7;
  });
}`;

@Component({
  selector: 'app-range-calendar-invalid-demo',
  imports: [
    AvDescriptionComponent,
    AvRangeCalendarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarInvalidDemo {
  private readonly now = today(getLocalTimeZone());
  readonly value = signal<AvRangeCalendarValue>({
    start: this.now.add({ days: 6 }),
    end: this.now.add({ days: 14 }),
  });
  readonly isInvalid = computed(() => {
    const range = this.value();
    return !!range && range.end.compare(range.start) > 7;
  });
}
