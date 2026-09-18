import { Component, computed, inject, input, signal } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { isSameDay } from '@internationalized/date';

import { formatCellAriaLabel } from '../calendar/calendar.model';
import { AvRangeCalendarContext } from './range-calendar.context';
import { getRangeCellFlags } from './range-calendar.model';
import type { AvRangeCalendarCellMeta } from './range-calendar.types';
import {
  avRangeCalendarCellButtonClasses,
} from './range-calendar.utils';

/**
 * Range day cell — outer host is the gridcell (range track); inner span is the
 * day button (`av-range-calendar__cell` + `av-range-calendar__cell-button`).
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar-cell], td[av-range-calendar-cell]',
  template: `
    <span
      [class]="buttonClasses()"
      data-slot="range-calendar-cell-button"
      [attr.data-disabled]="isDisabled() ? 'true' : null"
      [attr.data-hovered]="hovered() ? 'true' : null"
      [attr.data-pressed]="pressed() ? 'true' : null"
      [attr.data-selected]="isEndpoint() ? 'true' : null"
    >
      <ng-content />
    </span>
  `,
  host: {
    class: 'av-range-calendar__cell',
    role: 'gridcell',
    '[attr.tabindex]': 'tabIndex()',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-selected]': 'isEndpoint() ? "true" : "false"',
    '[attr.aria-disabled]': 'isDisabled() ? "true" : null',
    '[attr.aria-current]': 'isToday() ? "date" : null',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-selection-start]': 'isSelectionStart() ? "true" : null',
    '[attr.data-selection-end]': 'isSelectionEnd() ? "true" : null',
    '[attr.data-today]': 'isToday() ? "true" : null',
    '[attr.data-outside-month]': 'isOutsideMonth() ? "true" : null',
    '[attr.data-unavailable]': 'isUnavailable() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-hovered]': 'hovered() ? "true" : null',
    '[attr.data-pressed]': 'pressed() ? "true" : null',
    '[attr.data-focused]': 'isFocused() ? "true" : null',
    'data-slot': 'range-calendar-cell',
    '(click)': 'onClick($event)',
    '(keydown)': 'onKeydown($event)',
    '(pointerenter)': 'onPointerEnter($event)',
    '(pointerleave)': 'onPointerLeave($event)',
    '(pointerdown)': 'onPointerDown($event)',
    '(pointerup)': 'onPointerUp()',
    '(pointercancel)': 'onPointerUp()',
    '(focus)': 'onFocus($event)',
    '(blur)': 'onBlur($event)',
  },
})
export class AvRangeCalendarCellComponent {
  private readonly calendar = inject(AvRangeCalendarContext);

  readonly date = input.required<CalendarDate>();
  readonly meta = input<AvRangeCalendarCellMeta | null>(null);

  protected readonly hovered = signal(false);
  protected readonly pressed = signal(false);

  protected readonly buttonClasses = computed(() => avRangeCalendarCellButtonClasses());

  protected readonly resolved = computed(() => {
    const meta = this.meta();
    const date = this.date();
    const focused = this.calendar.focusedValue();
    const flags = getRangeCellFlags(date, this.calendar.highlightRange());
    const unavailable = this.calendar.isUnavailable(date);

    if (meta) {
      return {
        ...meta,
        ...flags,
        focused: isSameDay(date, focused),
        unavailable,
      };
    }

    return {
      date,
      day: date.day,
      formattedDate: String(date.day),
      today: false,
      ...flags,
      outsideMonth: false,
      unavailable,
      disabled: unavailable || this.calendar.disabled(),
      focused: isSameDay(date, focused),
    };
  });

  protected readonly isSelected = computed(() => this.resolved().selected);
  protected readonly isSelectionStart = computed(() => this.resolved().selectionStart);
  protected readonly isSelectionEnd = computed(() => this.resolved().selectionEnd);
  protected readonly isEndpoint = computed(
    () => this.isSelectionStart() || this.isSelectionEnd(),
  );
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

  /** Outside-month spillover days are visible but not selectable. */
  private canInteract(): boolean {
    return (
      !this.calendar.disabled() &&
      !this.calendar.readonly() &&
      !this.resolved().unavailable &&
      !this.resolved().outsideMonth
    );
  }

  protected onClick(event: MouseEvent): void {
    if (!this.canInteract()) {
      return;
    }

    this.calendar.selectDate(this.date(), event);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();

    if (!this.canInteract()) {
      return;
    }

    this.calendar.selectDate(this.date(), event);
  }

  protected onPointerEnter(event: Event): void {
    this.hovered.set(true);

    if (!this.canInteract()) {
      return;
    }

    this.calendar.previewDate(this.date(), event);
  }

  protected onPointerLeave(event: Event): void {
    this.hovered.set(false);
    this.pressed.set(false);
    this.calendar.previewDate(null, event);
  }

  protected onPointerDown(event: PointerEvent): void {
    if (event.button !== 0 || this.isDisabled()) {
      return;
    }

    this.pressed.set(true);
  }

  protected onPointerUp(): void {
    this.pressed.set(false);
  }

  protected onFocus(event: FocusEvent): void {
    if (!this.canInteract()) {
      return;
    }

    this.calendar.previewDate(this.date(), event);
  }

  protected onBlur(event: FocusEvent): void {
    this.calendar.previewDate(null, event);
  }
}
