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
  type DateValue,
} from '@internationalized/date';

import { AvCalendarIntl } from '../calendar/calendar.intl';
import {
  isDismissKey,
  isSelectionKey,
  getNavigationStep,
  moveFocusedDate,
} from '../calendar/calendar.keyboard';
import {
  applyDateOffset,
  alignVisibleAnchor,
  clampDate,
  formatMonthYear,
} from '../calendar/calendar.model';
import type { AvCalendarDateOffset } from '../calendar/calendar.types';
import { AvDateRangePickerContext } from '../date-range-picker/date-range-picker.context';
import { AvDateRange } from './date-range';
import {
  DefaultAvCalendarRangeStrategy,
  injectAvDateRangeSelectionStrategy,
  provideDefaultAvDateRangeSelectionStrategy,
} from './date-range-selection-strategy';
import { AvRangeCalendarContext } from './range-calendar.context';
import {
  dateRangeToValue,
  defaultFocusedValue,
  isRangeDateUnavailable,
  rangeSpansUnavailable,
  rangesEqual,
  valueToDateRange,
} from './range-calendar.model';
import type {
  AvRangeCalendarFirstDayOfWeek,
  AvRangeCalendarIsDateUnavailable,
  AvRangeCalendarValue,
  AvRangeCalendarVisibleDuration,
  AvRangeCalendarWeekdayStyle,
} from './range-calendar.types';
import { avRangeCalendarClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'group',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.aria-disabled]': 'disabled() ? "true" : null',
    '[attr.aria-readonly]': 'readonly() ? "true" : null',
    '[attr.aria-invalid]': 'invalid() ? "true" : null',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
    '[attr.data-readonly]': 'readonly() ? "true" : null',
    '[attr.data-invalid]': 'invalid() ? "true" : null',
    '[attr.data-year-picker-open]': 'yearPickerOpen() ? "true" : null',
    'data-slot': 'range-calendar',
  },
  providers: [AvRangeCalendarContext, provideDefaultAvDateRangeSelectionStrategy()],
})
export class AvRangeCalendarComponent {
  private readonly context = inject(AvRangeCalendarContext);
  private readonly intl = inject(AvCalendarIntl);
  private readonly strategy = injectAvDateRangeSelectionStrategy();
  private readonly dateRangePicker = inject(AvDateRangePickerContext, { optional: true });
  private defaultsApplied = false;
  private focusedDefaultsApplied = false;
  private yearPickerDefaultsApplied = false;
  private syncingFromPicker = false;

  /** Accessible name for the calendar. */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /** Controlled selected range. */
  readonly value = model<AvRangeCalendarValue>(null);

  /** Uncontrolled initial range. */
  readonly defaultValue = input<AvRangeCalendarValue>(null, { alias: 'default-value' });

  /** Focused / navigated date (Material activeDate). */
  readonly focusedValue = model<CalendarDate | null>(null, { alias: 'focused-value' });

  /** Uncontrolled initial focused date. */
  readonly defaultFocusedValue = input<CalendarDate | null>(null, {
    alias: 'default-focused-value',
  });

  readonly minValue = input<DateValue | null>(null, { alias: 'min-value' });
  readonly maxValue = input<DateValue | null>(null, { alias: 'max-value' });

  /**
   * Return true when a date cannot be selected.
   * Second arg is the incomplete-range anchor (first selected date), or null.
   */
  readonly isDateUnavailable = input<AvRangeCalendarIsDateUnavailable | null>(null, {
    alias: 'is-date-unavailable',
  });

  /**
   * When false (default), a complete range cannot span unavailable dates
   * between start and end (`allowsNonContiguousRanges`).
   */
  readonly allowsNonContiguousRanges = input(false, {
    alias: 'allows-non-contiguous-ranges',
    transform: booleanAttribute,
  });

  readonly disabled = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });
  readonly invalid = input(false, { transform: booleanAttribute });

  readonly locale = input('en-US');
  readonly firstDayOfWeek = input<AvRangeCalendarFirstDayOfWeek>('sun', {
    alias: 'first-day-of-week',
  });
  readonly weekdayStyle = input<AvRangeCalendarWeekdayStyle>('short', {
    alias: 'weekday-style',
  });
  readonly timeZone = input(getLocalTimeZone(), { alias: 'time-zone' });

  readonly visibleDuration = input<AvRangeCalendarVisibleDuration | null>(null, {
    alias: 'visible-duration',
  });

  readonly pageBehavior = input<'visible' | 'single'>('visible', {
    alias: 'page-behavior',
  });

  readonly weeksInMonth = input<number | undefined>(undefined, {
    alias: 'weeks-in-month',
  });

  readonly yearPickerOpen = model(false, { alias: 'year-picker-open' });

  readonly defaultYearPickerOpen = input(false, {
    alias: 'default-year-picker-open',
    transform: booleanAttribute,
  });

  protected readonly classes = computed(() => avRangeCalendarClasses(this.visibleDuration()));

  constructor() {
    this.bindContextMethods();

    effect(() => {
      const picker = this.dateRangePicker;
      const minValue = picker?.minValue() ?? this.minValue();
      const maxValue = picker?.maxValue() ?? this.maxValue();
      const pickerUnavailable = picker?.isDateUnavailable();
      const isDateUnavailable = pickerUnavailable
        ? ((date: CalendarDate, _anchor: CalendarDate | null) => !!pickerUnavailable(date))
        : this.isDateUnavailable();
      const disabled = picker?.disabled() ?? this.disabled();
      const readonly = picker?.readonly() ?? this.readonly();
      const locale = picker?.locale() ?? this.locale();

      this.context.value.set(this.value());
      this.context.minValue.set(minValue);
      this.context.maxValue.set(maxValue);
      this.context.isDateUnavailable.set(isDateUnavailable);
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

    // When nested in DateRangePicker, mirror picker value → calendar selection.
    effect(() => {
      const picker = this.dateRangePicker;
      if (!picker) {
        return;
      }

      const next = picker.value();

      untracked(() => {
        if (rangesEqual(this.value(), next)) {
          return;
        }

        this.syncingFromPicker = true;
        this.value.set(next);
        queueMicrotask(() => {
          this.syncingFromPicker = false;
        });
      });
    });

    // Sync committed value → working range when controlled value changes.
    effect(() => {
      const next = this.value();
      untracked(() => {
        this.context.workingRange.set(valueToDateRange(next));
        this.context.previewRange.set(AvDateRange.empty());
      });
    });

    effect(() => {
      const focused = this.focusedValue();
      if (focused) {
        const next = clampDate(focused, this.minValue(), this.maxValue());
        this.context.focusedValue.set(next);
        // Controlled focus: keep day/week window covering the focused date.
        untracked(() => this.syncVisibleAnchorToDate(next));
      }
    });

    effect(() => {
      const defaultValue = this.defaultValue();

      if (!this.defaultsApplied && defaultValue != null && this.value() == null) {
        untracked(() => {
          this.value.set(defaultValue);
          this.context.workingRange.set(valueToDateRange(defaultValue));
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
      if (
        !this.yearPickerDefaultsApplied &&
        this.defaultYearPickerOpen() &&
        !this.yearPickerOpen()
      ) {
        untracked(() => {
          this.yearPickerOpen.set(true);
          this.yearPickerDefaultsApplied = true;
        });
      }
    });

    effect((onCleanup) => {
      const sub = this.intl.changes.subscribe(() => {
        // Subject exists for Material-compatible API
      });
      onCleanup(() => sub.unsubscribe());
    });
  }

  private bindContextMethods(): void {
    this.context.selectDate = (date, event) => this.selectDate(date, event);
    this.context.previewDate = (date, event) => this.previewDate(date, event);
    this.context.clearIncompleteSelection = (event) => this.clearIncompleteSelection(event);
    this.context.setFocusedValue = (date) => this.updateFocused(date);
    this.context.navigatePrevious = () => this.navigate(-1);
    this.context.navigateNext = () => this.navigate(1);
    this.context.setYearPickerOpen = (open) => this.yearPickerOpen.set(open);
    this.context.toggleYearPicker = () => this.yearPickerOpen.update((open) => !open);
    this.context.selectYear = (year) => this.selectYear(year);
    this.context.onGridKeydown = (event) => this.onGridKeydown(event);
    this.context.getHeadingLabel = (offset) => this.getHeadingLabel(offset);
    this.context.isUnavailable = (date) =>
      isRangeDateUnavailable(date, {
        minValue: this.minValue(),
        maxValue: this.maxValue(),
        isDateUnavailable: this.isDateUnavailable(),
        anchorDate: this.context.anchorDate(),
      });
  }

  private selectDate(date: CalendarDate, event?: Event): void {
    const picker = this.dateRangePicker;
    const disabled = picker?.disabled() ?? this.disabled();
    const readonly = picker?.readonly() ?? this.readonly();

    if (disabled || readonly) {
      return;
    }

    if (this.context.isUnavailable(date)) {
      return;
    }

    this.updateFocused(date);

    const next = this.strategy.selectionFinished(
      date,
      this.context.workingRange(),
      event ?? new Event('select'),
    );

    let resolved = next;

    if (
      resolved.isComplete &&
      resolved.start &&
      resolved.end &&
      !this.allowsNonContiguousRanges() &&
      rangeSpansUnavailable(resolved.start, resolved.end, (d) => this.context.isUnavailable(d))
    ) {
      // Contiguous-only: restart selection at the clicked date.
      resolved = new AvDateRange(date, null);
    }

    this.context.workingRange.set(resolved);
    this.context.previewRange.set(AvDateRange.empty());

    if (resolved.isComplete) {
      const committed = dateRangeToValue(resolved);
      if (!rangesEqual(this.value(), committed)) {
        this.value.set(committed);
      }

      if (picker && !this.syncingFromPicker) {
        picker.notifyRangeCalendarSelection(committed);
      }
    }
  }

  private previewDate(date: CalendarDate | null, event?: Event): void {
    if (this.disabled() || this.readonly()) {
      return;
    }

    const preview = this.strategy.createPreview(
      date,
      this.context.workingRange(),
      event ?? new Event('preview'),
    );
    this.context.previewRange.set(preview);
  }

  private clearIncompleteSelection(event?: Event): void {
    const working = this.context.workingRange();
    if (!working.isIncomplete && this.context.previewRange().isEmpty) {
      return;
    }

    const next = this.strategy.selectionFinished(
      null,
      working,
      event ?? new Event('clear'),
    );
    this.context.workingRange.set(next);
    this.context.previewRange.set(AvDateRange.empty());
  }

  private updateFocused(date: CalendarDate, options?: { skipAnchorAlign?: boolean }): void {
    const next = clampDate(date, this.minValue(), this.maxValue());
    this.focusedValue.set(next);
    this.context.focusedValue.set(next);

    if (!options?.skipAnchorAlign) {
      this.syncVisibleAnchorToDate(next);
    }

    // Keyboard focus also drives preview while incomplete.
    if (this.context.workingRange().isIncomplete) {
      this.previewDate(next, new Event('focus'));
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
    // Year jumps always re-anchor the visible window to the selected year.
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

    if (isDismissKey(event.key)) {
      if (this.context.workingRange().isIncomplete || !this.context.previewRange().isEmpty) {
        event.preventDefault();
        event.stopPropagation();
        this.clearIncompleteSelection(event);
      }

      return;
    }

    if (isSelectionKey(event.key)) {
      if (event.type === 'keydown') {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      this.selectDate(this.context.focusedValue(), event);
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

// Keep strategy class referenced for AOT / tree-shaking of provider useClass.
void DefaultAvCalendarRangeStrategy;
