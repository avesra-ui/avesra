import { Component, computed, effect, inject, input } from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import { AvCalendarGridContext } from './calendar-grid.context';
import type { AvCalendarDateOffset, AvCalendarWeekdayStyle } from './calendar.types';
import { avCalendarGridClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar-grid], table[av-calendar-grid]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'grid',
    '[attr.aria-label]': 'calendar.ariaLabel() || null',
    '[attr.aria-readonly]': 'calendar.readonly() ? "true" : null',
    '[attr.aria-disabled]': 'calendar.disabled() ? "true" : null',
    'data-slot': 'calendar-grid',
    '(keydown)': 'onKeydown($event)',
    '(keyup)': 'onKeyup($event)',
  },
  providers: [AvCalendarGridContext],
})
export class AvCalendarGridComponent {
  private readonly calendar = inject(AvCalendarContext);
  private readonly gridContext = inject(AvCalendarGridContext);

  /** Offset for multi-month layouts. */
  readonly offset = input<AvCalendarDateOffset | null>(null);

  /** Weekday label style for nested headers. */
  readonly weekdayStyle = input<AvCalendarWeekdayStyle | null>(null, {
    alias: 'weekday-style',
  });

  protected readonly classes = computed(() => avCalendarGridClasses());

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
