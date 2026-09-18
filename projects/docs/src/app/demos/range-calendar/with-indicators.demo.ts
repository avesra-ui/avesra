import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isToday } from '@internationalized/date';

import { AvRangeCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-range-calendar aria-label="Trip dates">
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
        @if (showIndicator(meta.date)) {
          <span av-range-calendar-cell-indicator></span>
        }
      </ng-template>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'range-calendar-with-indicators';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isToday } from '@internationalized/date';
import { AvRangeCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-range-calendar-with-indicators-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarWithIndicatorsDemo {
  private readonly datesWithEvents = [3, 7, 12, 15, 21, 28];

  showIndicator(date: CalendarDate): boolean {
    return isToday(date, getLocalTimeZone()) || this.datesWithEvents.includes(date.day);
  }
}`;

@Component({
  selector: 'app-range-calendar-with-indicators-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarWithIndicatorsDemo {
  private readonly datesWithEvents = [3, 7, 12, 15, 21, 28];

  showIndicator(date: CalendarDate): boolean {
    return isToday(date, getLocalTimeZone()) || this.datesWithEvents.includes(date.day);
  }
}
