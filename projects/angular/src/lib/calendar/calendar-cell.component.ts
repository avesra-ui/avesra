import { Component, computed, inject, input } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { isSameDay } from '@internationalized/date';

import { AvCalendarContext } from './calendar.context';
import { formatCellAriaLabel } from './calendar.model';
import type { AvCalendarCellMeta } from './calendar.types';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-calendar-cell], td[av-calendar-cell]',
  template: `<ng-content />`,
  host: {
    class: 'av-calendar__cell',
    type: 'button',
    role: 'gridcell',
    '[attr.tabindex]': 'tabIndex()',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-selected]': 'isSelected() ? "true" : "false"',
    '[attr.aria-disabled]': 'isDisabled() ? "true" : null',
    '[attr.aria-current]': 'isToday() ? "date" : null',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-today]': 'isToday() ? "true" : null',
    '[attr.data-outside-month]': 'isOutsideMonth() ? "true" : null',
    '[attr.data-unavailable]': 'isUnavailable() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-focused]': 'isFocused() ? "true" : null',
    '[disabled]': 'isDisabled()',
    'data-slot': 'calendar-cell',
    '(click)': 'onClick()',
  },
})
export class AvCalendarCellComponent {
  private readonly calendar = inject(AvCalendarContext);

  readonly date = input.required<CalendarDate>();
  readonly meta = input<AvCalendarCellMeta | null>(null);

  protected readonly resolved = computed(() => {
    const meta = this.meta();
    const date = this.date();
    const focused = this.calendar.focusedValue();

    if (meta) {
      return {
        ...meta,
        selected: this.calendar.isSelected(date),
        focused: isSameDay(date, focused),
        unavailable: this.calendar.isUnavailable(date),
      };
    }

    return {
      date,
      day: date.day,
      formattedDate: String(date.day),
      today: false,
      selected: this.calendar.isSelected(date),
      outsideMonth: false,
      unavailable: this.calendar.isUnavailable(date),
      disabled: this.calendar.isUnavailable(date) || this.calendar.disabled(),
      focused: isSameDay(date, focused),
    };
  });

  protected readonly isSelected = computed(() => this.resolved().selected);
  protected readonly isToday = computed(() => this.resolved().today);
  protected readonly isOutsideMonth = computed(() => this.resolved().outsideMonth);
  protected readonly isUnavailable = computed(() => this.resolved().unavailable);
  protected readonly isFocused = computed(() => this.resolved().focused);
  protected readonly isDisabled = computed(
    () =>
      this.calendar.disabled() ||
      this.resolved().unavailable ||
      this.resolved().disabled ||
      this.resolved().outsideMonth,
  );

  protected readonly tabIndex = computed(() => {
    if (this.calendar.disabled() || this.isDisabled()) {
      return -1;
    }

    return this.isFocused() ? 0 : -1;
  });

  protected readonly ariaLabel = computed(() =>
    formatCellAriaLabel(this.date(), this.calendar.locale(), this.calendar.timeZone()),
  );

  protected onClick(): void {
    if (
      this.calendar.disabled() ||
      this.calendar.readonly() ||
      this.resolved().unavailable ||
      this.resolved().outsideMonth
    ) {
      return;
    }

    this.calendar.selectDate(this.date());
  }
}
