import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isToday } from '@internationalized/date';

import { AvCalendarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-calendar aria-label="Event date">
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
            @if (showIndicator(meta.date)) {
              <span av-calendar-cell-indicator></span>
            }
          </ng-template>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'calendar-with-indicators';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { getLocalTimeZone, isToday } from '@internationalized/date';
import { AvCalendarImports } from '@avesra/angular';

@Component({
  selector: 'app-calendar-with-indicators-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarWithIndicatorsDemo {
  private readonly datesWithEvents = [3, 7, 12, 15, 21, 28];

  showIndicator(date: CalendarDate): boolean {
    return isToday(date, getLocalTimeZone()) || this.datesWithEvents.includes(date.day);
  }
}`;

@Component({
  selector: 'app-calendar-with-indicators-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarWithIndicatorsDemo {
  private readonly datesWithEvents = [3, 7, 12, 15, 21, 28];

  showIndicator(date: CalendarDate): boolean {
    return isToday(date, getLocalTimeZone()) || this.datesWithEvents.includes(date.day);
  }
}
