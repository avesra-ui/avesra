import { Component, computed, inject } from '@angular/core';

import { AvCalendarIntl } from '../calendar/calendar.intl';
import { AvRangeCalendarContext } from './range-calendar.context';
import { avRangeCalendarYearPickerTriggerClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-range-calendar-year-picker-trigger]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[attr.aria-expanded]': 'isOpen() ? "true" : "false"',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.data-open]': 'isOpen() ? "true" : null',
    '[disabled]': 'calendar.disabled()',
    'data-slot': 'range-calendar-year-picker-trigger',
    '(click)': 'onClick()',
  },
})
export class AvRangeCalendarYearPickerTriggerComponent {
  readonly calendar = inject(AvRangeCalendarContext);
  private readonly intl = inject(AvCalendarIntl);

  protected readonly classes = computed(() => avRangeCalendarYearPickerTriggerClasses());
  protected readonly isOpen = computed(() => this.calendar.yearPickerOpen());
  protected readonly ariaLabel = computed(() =>
    this.isOpen() ? this.intl.closeYearPickerLabel : this.intl.openYearPickerLabel,
  );

  protected onClick(): void {
    if (this.calendar.disabled()) {
      return;
    }

    this.calendar.toggleYearPicker();
  }
}
