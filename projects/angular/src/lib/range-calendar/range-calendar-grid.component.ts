import { Component, computed, effect, inject, input } from '@angular/core';

import type { AvCalendarDateOffset, AvCalendarWeekdayStyle } from '../calendar/calendar.types';
import { AvRangeCalendarContext } from './range-calendar.context';
import { AvRangeCalendarGridContext } from './range-calendar-grid.context';
import { avRangeCalendarGridClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar-grid], table[av-range-calendar-grid]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'grid',
    '[attr.aria-label]': 'calendar.ariaLabel() || null',
    '[attr.aria-readonly]': 'calendar.readonly() ? "true" : null',
    '[attr.aria-disabled]': 'calendar.disabled() ? "true" : null',
    'data-slot': 'range-calendar-grid',
    '(keydown)': 'onKeydown($event)',
    '(keyup)': 'onKeyup($event)',
  },
  providers: [AvRangeCalendarGridContext],
})
export class AvRangeCalendarGridComponent {
  private readonly calendar = inject(AvRangeCalendarContext);
  private readonly gridContext = inject(AvRangeCalendarGridContext);

  readonly offset = input<AvCalendarDateOffset | null>(null);

  readonly weekdayStyle = input<AvCalendarWeekdayStyle | null>(null, {
    alias: 'weekday-style',
  });

  protected readonly classes = computed(() => avRangeCalendarGridClasses());

  constructor() {
    effect(() => {
      this.gridContext.offset.set(this.offset());
      this.gridContext.weekdayStyle.set(this.weekdayStyle());
    });
  }

  protected onKeydown(event: KeyboardEvent): void {
    this.calendar.onGridKeydown(event);
  }

  protected onKeyup(event: KeyboardEvent): void {
    this.calendar.onGridKeydown(event);
  }
}
