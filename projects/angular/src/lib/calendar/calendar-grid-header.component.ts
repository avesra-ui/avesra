import { Component, computed, inject, input } from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import { AvCalendarGridContext } from './calendar-grid.context';
import {
  getDayViewWeekDayLabels,
  getWeekDayLabels,
  resolveVisibleMode,
} from './calendar.model';
import { avCalendarGridHeaderClasses } from './calendar.utils';
import { AvCalendarHeaderCellComponent } from './calendar-header-cell.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar-grid-header], thead[av-calendar-grid-header]',
  imports: [AvCalendarHeaderCellComponent],
  template: `
    <div role="row" class="av-calendar__grid-row">
      @for (label of labels(); track $index) {
        <div av-calendar-header-cell>{{ label }}</div>
      }
    </div>
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'calendar-grid-header',
  },
})
export class AvCalendarGridHeaderComponent {
  private readonly calendar = inject(AvCalendarContext);
  private readonly grid = inject(AvCalendarGridContext, { optional: true });

  protected readonly classes = computed(() => avCalendarGridHeaderClasses());

  protected readonly labels = computed(() => {
    const locale = this.calendar.locale();
    const firstDay = this.calendar.firstDayOfWeek();
    const style =
      this.grid?.weekdayStyle() ?? this.calendar.weekdayStyle();
    const duration = this.calendar.visibleDuration();
    const mode = resolveVisibleMode(duration);
    const timeZone = this.calendar.timeZone();
    const anchor = this.calendar.visibleAnchor();

    if (mode === 'day' && duration && 'days' in duration && (duration.days ?? 0) >= 7) {
      return getDayViewWeekDayLabels(anchor, locale, firstDay, style, timeZone);
    }

    return getWeekDayLabels(locale, firstDay, style, timeZone);
  });
}
