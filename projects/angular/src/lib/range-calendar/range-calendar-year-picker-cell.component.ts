import { Component, computed, inject, input } from '@angular/core';

import { AvRangeCalendarContext } from './range-calendar.context';
import { avRangeCalendarYearPickerCellClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-range-calendar-year-picker-cell]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    type: 'button',
    role: 'option',
    '[attr.aria-selected]': 'selected() ? "true" : "false"',
    '[attr.tabindex]': 'selected() ? 0 : -1',
    '[attr.data-selected]': 'selected() ? "true" : null',
    '[disabled]': 'disabled() || calendar.disabled()',
    'data-slot': 'range-calendar-year-picker-cell',
    '(click)': 'onClick()',
  },
})
export class AvRangeCalendarYearPickerCellComponent {
  readonly calendar = inject(AvRangeCalendarContext);

  readonly year = input.required<number>();
  readonly selected = input(false);
  readonly disabled = input(false);

  protected readonly classes = computed(() => avRangeCalendarYearPickerCellClasses());

  protected onClick(): void {
    if (this.disabled() || this.calendar.disabled()) {
      return;
    }

    this.calendar.selectYear(this.year());
  }
}
