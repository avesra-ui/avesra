import { Component, computed, inject } from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import { AvCalendarIntl } from './calendar.intl';
import { avCalendarYearPickerTriggerClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-calendar-year-picker-trigger]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[attr.aria-expanded]': 'isOpen() ? "true" : "false"',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.data-open]': 'isOpen() ? "true" : null',
    '[disabled]': 'calendar.disabled()',
    'data-slot': 'calendar-year-picker-trigger',
    '(click)': 'onClick()',
  },
})
export class AvCalendarYearPickerTriggerComponent {
  readonly calendar = inject(AvCalendarContext);
  private readonly intl = inject(AvCalendarIntl);

  protected readonly classes = computed(() => avCalendarYearPickerTriggerClasses());
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
