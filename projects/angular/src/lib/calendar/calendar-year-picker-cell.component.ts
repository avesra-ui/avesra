import { Component, computed, inject, input } from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import { avCalendarYearPickerCellClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-calendar-year-picker-cell]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    type: 'button',
    role: 'option',
    '[attr.aria-selected]': 'selected() ? "true" : "false"',
    '[attr.tabindex]': 'selected() ? 0 : -1',
    '[attr.data-selected]': 'selected() ? "true" : null',
    '[disabled]': 'disabled() || calendar.disabled()',
    'data-slot': 'calendar-year-picker-cell',
    '(click)': 'onClick()',
  },
})
export class AvCalendarYearPickerCellComponent {
  readonly calendar = inject(AvCalendarContext);

  readonly year = input.required<number>();
  readonly selected = input(false);
  readonly disabled = input(false);

  protected readonly classes = computed(() => avCalendarYearPickerCellClasses());

  protected onClick(): void {
    if (this.disabled() || this.calendar.disabled()) {
      return;
    }

    this.calendar.selectYear(this.year());
  }
}
