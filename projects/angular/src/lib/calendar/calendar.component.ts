import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  untracked,
} from '@angular/core';
import {
  CalendarDate,
  getLocalTimeZone,
  isSameDay,
  toCalendarDate,
  type DateValue,
} from '@internationalized/date';

import { AvDatePickerContext } from '../date-picker/date-picker.context';
import { AvCalendarContext } from './calendar.context';
import { AvCalendarIntl } from './calendar.intl';
import {
  isDismissKey,
  isSelectionKey,
  getNavigationStep,
  moveFocusedDate,
} from './calendar.keyboard';
import {
  alignVisibleAnchor,
  applyDateOffset,
  clampDate,
  defaultFocusedValue,
  formatMonthYear,
  isDateSelected,
  isDateUnavailableOrOutOfBounds,
} from './calendar.model';
import type {
  AvCalendarDateOffset,
  AvCalendarFirstDayOfWeek,
  AvCalendarSelectionMode,
  AvCalendarValue,
  AvCalendarVisibleDuration,
  AvCalendarWeekdayStyle,
} from './calendar.types';
import { avCalendarClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'group',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.aria-disabled]': 'disabled() ? "true" : null',
    '[attr.aria-readonly]': 'readonly() ? "true" : null',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
    '[attr.data-readonly]': 'readonly() ? "true" : null',
    '[attr.data-year-picker-open]': 'yearPickerOpen() ? "true" : null',
    'data-slot': 'calendar',
  },
  providers: [AvCalendarContext],
})
export class AvCalendarComponent {
  private readonly context = inject(AvCalendarContext);
  private readonly intl = inject(AvCalendarIntl);
  private readonly datePicker = inject(AvDatePickerContext, { optional: true });
  private defaultsApplied = false;
  private focusedDefaultsApplied = false;
  private yearPickerDefaultsApplied = false;
  private syncingFromPicker = false;

  /** Accessible name for the calendar. */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /** Selection behavior. */
  readonly selectionMode = input<AvCalendarSelectionMode>('single', {
    alias: 'selection-mode',
  });

  /** Controlled selected value. */
  readonly value = model<AvCalendarValue>(null);

  /** Uncontrolled initial value. */
  readonly defaultValue = input<AvCalendarValue>(null, { alias: 'default-value' });

  /** Focused / navigated date (Material activeDate). */
  readonly focusedValue = model<CalendarDate | null>(null, { alias: 'focused-value' });

  /** Uncontrolled initial focused date. */
  readonly defaultFocusedValue = input<CalendarDate | null>(null, {
    alias: 'default-focused-value',
  });

  readonly minValue = input<DateValue | null>(null, { alias: 'min-value' });
  readonly maxValue = input<DateValue | null>(null, { alias: 'max-value' });

  /** Return true when a date cannot be selected. */
  readonly isDateUnavailable = input<((date: CalendarDate) => boolean) | null>(null, {
    alias: 'is-date-unavailable',
  });

  readonly disabled = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });

  readonly locale = input('en-US');
  readonly firstDayOfWeek = input<AvCalendarFirstDayOfWeek>('sun', {
    alias: 'first-day-of-week',
  });
  readonly weekdayStyle = input<AvCalendarWeekdayStyle>('short', {
    alias: 'weekday-style',
  });
  readonly timeZone = input(getLocalTimeZone(), { alias: 'time-zone' });

  /** Visible span: months, weeks, or days. */
  readonly visibleDuration = input<AvCalendarVisibleDuration | null>(null, {
    alias: 'visible-duration',
  });

  /** Whether paging advances by the visible duration or one unit. */
  readonly pageBehavior = input<'visible' | 'single'>('visible', {
    alias: 'page-behavior',
  });

  /** Fix month grid row count (e.g. 6) to avoid layout jump. */
  readonly weeksInMonth = input<number | undefined>(undefined, {
    alias: 'weeks-in-month',
  });

  /** Controlled year-picker open state. */
  readonly yearPickerOpen = model(false, { alias: 'year-picker-open' });

  /** Uncontrolled initial year-picker open state. */
  readonly defaultYearPickerOpen = input(false, {
    alias: 'default-year-picker-open',
    transform: booleanAttribute,
  });

  protected readonly classes = computed(() =>
    avCalendarClasses(this.visibleDuration()),
  );

  constructor() {
    this.bindContextMethods();

    effect(() => {
      const picker = this.datePicker;
      const minValue = picker?.minValue() ?? this.minValue();
      const maxValue = picker?.maxValue() ?? this.maxValue();
      const isDateUnavailable = picker?.isDateUnavailable() ?? this.isDateUnavailable();
      const disabled = picker?.disabled() ?? this.disabled();
      const readonly = picker?.readonly() ?? this.readonly();
      const locale = picker?.locale() ?? this.locale();

      this.context.selectionMode.set(this.selectionMode());
      this.context.value.set(this.value());
      this.context.minValue.set(minValue);
      this.context.maxValue.set(maxValue);
      this.context.isDateUnavailable.set(
        isDateUnavailable
          ? (date: CalendarDate) => !!isDateUnavailable(date)
          : null,
      );
      this.context.disabled.set(disabled);
      this.context.readonly.set(readonly);
      this.context.locale.set(locale);
      this.context.firstDayOfWeek.set(this.firstDayOfWeek());
      this.context.weekdayStyle.set(this.weekdayStyle());
      this.context.visibleDuration.set(this.visibleDuration());
      this.context.pageBehavior.set(this.pageBehavior());
      this.context.weeksInMonth.set(this.weeksInMonth());
      this.context.yearPickerOpen.set(this.yearPickerOpen());
      this.context.timeZone.set(this.timeZone());
      this.context.ariaLabel.set(this.ariaLabel());
    });

    // When nested in DatePicker, mirror picker value → calendar selection + focus.
    effect(() => {
      const picker = this.datePicker;
      if (!picker) {
        return;
      }

      const pickerValue = picker.value();
      const next = pickerValue ? toCalendarDate(pickerValue) : null;

      untracked(() => {
        const current = this.value();
        if (!this.calendarDatesEqual(current, next)) {
          this.syncingFromPicker = true;
          this.value.set(next);
          queueMicrotask(() => {
            this.syncingFromPicker = false;
          });
        }

        if (next) {
          this.syncPickerCalendarFocus(picker, next);
        }
      });
    });

    // When the popover opens, navigate to the field value (or today when empty).
    effect(() => {
      const picker = this.datePicker;
      if (!picker?.isOpen()) {
        return;
      }

      const pickerValue = picker.value();
      const target = pickerValue
        ? toCalendarDate(pickerValue)
        : defaultFocusedValue(null, this.timeZone());

      untracked(() => this.syncPickerCalendarFocus(picker, target));
    });

    effect(() => {
      const focused = this.focusedValue();
      if (focused) {
        const next = clampDate(focused, this.minValue(), this.maxValue());
        this.context.focusedValue.set(next);
        untracked(() => this.syncVisibleAnchorToDate(next));
      }
    });

    effect(() => {
      const defaultValue = this.defaultValue();

      if (!this.defaultsApplied && defaultValue != null && this.value() == null) {
        untracked(() => {
          this.value.set(defaultValue);
          this.defaultsApplied = true;
        });
      }
    });

    effect(() => {
      const current = this.focusedValue();
      const fallback =
        this.defaultFocusedValue() ??
        defaultFocusedValue(this.value() ?? this.defaultValue(), this.timeZone());

      if (!this.focusedDefaultsApplied && current == null) {
        untracked(() => {
          const next = clampDate(fallback, this.minValue(), this.maxValue());
          this.focusedValue.set(next);
          this.context.focusedValue.set(next);
          this.context.visibleAnchor.set(next);
          this.focusedDefaultsApplied = true;
        });
      }
    });

    effect(() => {
      if (!this.yearPickerDefaultsApplied && this.defaultYearPickerOpen() && !this.yearPickerOpen()) {
        untracked(() => {
          this.yearPickerOpen.set(true);
          this.yearPickerDefaultsApplied = true;
        });
      }
    });

    // Keep intl subscription alive for OnPush header refreshes if labels change.
    effect((onCleanup) => {
      const sub = this.intl.changes.subscribe(() => {
        // no-op: signals drive UI; Subject exists for Material-compatible API
      });
      onCleanup(() => sub.unsubscribe());
    });
  }

  private bindContextMethods(): void {
    this.context.selectDate = (date) => this.selectDate(date);
    this.context.setFocusedValue = (date) => this.updateFocused(date);
    this.context.navigatePrevious = () => this.navigate(-1);
    this.context.navigateNext = () => this.navigate(1);
    this.context.setYearPickerOpen = (open) => this.yearPickerOpen.set(open);
    this.context.toggleYearPicker = () => this.yearPickerOpen.update((open) => !open);
    this.context.selectYear = (year) => this.selectYear(year);
    this.context.onGridKeydown = (event) => this.onGridKeydown(event);
    this.context.getHeadingLabel = (offset) => this.getHeadingLabel(offset);
    this.context.isSelected = (date) =>
      isDateSelected(date, this.value(), this.selectionMode());
    this.context.isUnavailable = (date) =>
      isDateUnavailableOrOutOfBounds(date, {
        minValue: this.minValue(),
        maxValue: this.maxValue(),
        isDateUnavailable: this.isDateUnavailable(),
      });
  }

  private syncPickerCalendarFocus(
    picker: AvDatePickerContext,
    date: CalendarDate,
  ): void {
    const next = clampDate(date, picker.minValue(), picker.maxValue());
    this.focusedValue.set(next);
    this.context.focusedValue.set(next);
    this.syncVisibleAnchorToDate(next);
  }

  private selectDate(date: CalendarDate): void {
    const picker = this.datePicker;
    const disabled = picker?.disabled() ?? this.disabled();
    const readonly = picker?.readonly() ?? this.readonly();

    if (disabled || readonly) {
      return;
    }

    if (this.context.isUnavailable(date)) {
      return;
    }

    this.updateFocused(date);

    const mode = this.selectionMode();

    if (mode === 'multiple') {
      const current = this.value();
      const list = Array.isArray(current) ? [...current] : current ? [current] : [];
      const index = list.findIndex((item) => isSameDay(item, date));

      if (index >= 0) {
        list.splice(index, 1);
      } else {
        list.push(date);
      }

      this.value.set(list);
      return;
    }

    this.value.set(date);

    if (picker && !this.syncingFromPicker) {
      picker.notifyCalendarSelection(date);
    }
  }

  private calendarDatesEqual(
    current: AvCalendarValue,
    next: CalendarDate | null,
  ): boolean {
    if (current == null && next == null) {
      return true;
    }

    if (current == null || next == null || Array.isArray(current)) {
      return false;
    }

    return isSameDay(current, next);
  }

  private updateFocused(date: CalendarDate, options?: { skipAnchorAlign?: boolean }): void {
    const next = clampDate(date, this.minValue(), this.maxValue());
    this.focusedValue.set(next);
    this.context.focusedValue.set(next);

    if (!options?.skipAnchorAlign) {
      this.syncVisibleAnchorToDate(next);
    }
  }

  private syncVisibleAnchorToDate(date: CalendarDate): void {
    const aligned = alignVisibleAnchor(
      date,
      this.context.visibleAnchor(),
      this.visibleDuration(),
      {
        locale: this.locale(),
        firstDayOfWeek: this.firstDayOfWeek(),
      },
    );
    this.context.visibleAnchor.set(aligned);
  }

  private navigate(direction: 1 | -1): void {
    if (this.disabled()) {
      return;
    }

    const step = getNavigationStep(this.visibleDuration(), this.pageBehavior());
    const focused = this.context.focusedValue();
    const delta =
      direction < 0
        ? {
            months: step.months ? -step.months : undefined,
            weeks: step.weeks ? -step.weeks : undefined,
            days: step.days ? -step.days : undefined,
          }
        : step;

    const nextAnchor = clampDate(
      this.context.visibleAnchor().add(delta) as CalendarDate,
      this.minValue(),
      this.maxValue(),
    );
    this.context.visibleAnchor.set(nextAnchor);
    this.updateFocused(focused.add(delta) as CalendarDate, { skipAnchorAlign: true });
  }

  private selectYear(year: number): void {
    const focused = this.context.focusedValue();
    let next: CalendarDate;

    try {
      next = focused.set({ year }) as CalendarDate;
    } catch {
      next = new CalendarDate(focused.calendar, focused.era, year, focused.month, 1);
    }

    const clamped = clampDate(next, this.minValue(), this.maxValue());
    this.context.visibleAnchor.set(clamped);
    this.updateFocused(clamped, { skipAnchorAlign: true });
    this.yearPickerOpen.set(false);
  }

  private getHeadingLabel(offset?: AvCalendarDateOffset | null): string {
    const base = applyDateOffset(this.context.visibleAnchor(), offset);
    return formatMonthYear(base, this.locale(), this.timeZone());
  }

  private onGridKeydown(event: KeyboardEvent): void {
    if (this.disabled()) {
      return;
    }

    if (this.yearPickerOpen()) {
      if (isDismissKey(event.key)) {
        event.preventDefault();
        this.yearPickerOpen.set(false);
      }

      return;
    }

    if (isSelectionKey(event.key)) {
      if (event.type === 'keydown') {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      this.selectDate(this.context.focusedValue());
      return;
    }

    if (event.type !== 'keydown') {
      return;
    }

    const next = moveFocusedDate(
      this.context.focusedValue(),
      event.key,
      this.firstDayOfWeek(),
      this.locale(),
      this.visibleDuration(),
      event.altKey,
      this.pageBehavior(),
    );

    if (next) {
      event.preventDefault();
      this.updateFocused(next);
    }
  }
}
