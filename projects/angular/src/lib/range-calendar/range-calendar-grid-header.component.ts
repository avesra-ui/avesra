import { Component, computed, inject } from '@angular/core';

import {
  getDayViewWeekDayLabels,
  getWeekDayLabels,
  resolveVisibleMode,
} from '../calendar/calendar.model';
import { AvRangeCalendarContext } from './range-calendar.context';
import { AvRangeCalendarGridContext } from './range-calendar-grid.context';
import { avRangeCalendarGridHeaderClasses } from './range-calendar.utils';
import { AvRangeCalendarHeaderCellComponent } from './range-calendar-header-cell.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar-grid-header], thead[av-range-calendar-grid-header]',
  imports: [AvRangeCalendarHeaderCellComponent],
  template: `
    <div role="row" class="av-range-calendar__grid-row">
      @for (label of labels(); track $index) {
        <div av-range-calendar-header-cell>{{ label }}</div>
      }
    </div>
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'range-calendar-grid-header',
  },
})
export class AvRangeCalendarGridHeaderComponent {
  private readonly calendar = inject(AvRangeCalendarContext);
  private readonly grid = inject(AvRangeCalendarGridContext, { optional: true });

  protected readonly classes = computed(() => avRangeCalendarGridHeaderClasses());

  protected readonly labels = computed(() => {
    const locale = this.calendar.locale();
    const firstDay = this.calendar.firstDayOfWeek();
    const style = this.grid?.weekdayStyle() ?? this.calendar.weekdayStyle();
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
