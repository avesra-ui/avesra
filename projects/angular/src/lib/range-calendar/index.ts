export type {
  AvRangeCalendarCellMeta,
  AvRangeCalendarDateOffset,
  AvRangeCalendarFirstDayOfWeek,
  AvRangeCalendarIsDateUnavailable,
  AvRangeCalendarMonthGrid,
  AvRangeCalendarValue,
  AvRangeCalendarVisibleDuration,
  AvRangeCalendarWeekdayStyle,
} from './range-calendar.types';

export { AvDateRange, isDateInRange, normalizeDateRange } from './date-range';

export {
  AV_DATE_RANGE_SELECTION_STRATEGY,
  DefaultAvCalendarRangeStrategy,
  provideDefaultAvDateRangeSelectionStrategy,
  injectAvDateRangeSelectionStrategy,
  type AvDateRangeSelectionStrategy,
} from './date-range-selection-strategy';

export {
  buildRangeVisibleGrid,
  dateRangeToValue,
  defaultFocusedValue as defaultRangeCalendarFocusedValue,
  getRangeCellFlags,
  isRangeDateUnavailable,
  rangesEqual,
  rangeSpansUnavailable,
  valueToDateRange,
} from './range-calendar.model';

export {
  avRangeCalendarCellButtonClasses,
  avRangeCalendarCellClasses,
  avRangeCalendarCellIndicatorClasses,
  avRangeCalendarClasses,
  avRangeCalendarGridBodyClasses,
  avRangeCalendarGridClasses,
  avRangeCalendarGridHeaderClasses,
  avRangeCalendarGridRowClasses,
  avRangeCalendarHeaderCellClasses,
  avRangeCalendarHeaderClasses,
  avRangeCalendarHeadingClasses,
  avRangeCalendarNavButtonClasses,
  avRangeCalendarNavButtonIconClasses,
  avRangeCalendarYearPickerCellClasses,
  avRangeCalendarYearPickerGridClasses,
  avRangeCalendarYearPickerTriggerClasses,
  avRangeCalendarYearPickerTriggerHeadingClasses,
  avRangeCalendarYearPickerTriggerIndicatorClasses,
} from './range-calendar.utils';

export { AvRangeCalendarContext } from './range-calendar.context';
export { AvRangeCalendarGridContext } from './range-calendar-grid.context';

export { AvRangeCalendarComponent } from './range-calendar.component';
export { AvRangeCalendarHeaderComponent } from './range-calendar-header.component';
export { AvRangeCalendarHeadingComponent } from './range-calendar-heading.component';
export { AvRangeCalendarNavButtonComponent } from './range-calendar-nav-button.component';
export { AvRangeCalendarGridComponent } from './range-calendar-grid.component';
export { AvRangeCalendarGridHeaderComponent } from './range-calendar-grid-header.component';
export {
  AvRangeCalendarCellDefDirective,
  AvRangeCalendarCellElementDefDirective,
  AvRangeCalendarGridBodyComponent,
  type AvRangeCalendarCellTemplateContext,
} from './range-calendar-grid-body.component';
export { AvRangeCalendarHeaderCellComponent } from './range-calendar-header-cell.component';
export { AvRangeCalendarCellComponent } from './range-calendar-cell.component';
export { AvRangeCalendarCellIndicatorComponent } from './range-calendar-cell-indicator.component';
export { AvRangeCalendarYearPickerTriggerComponent } from './range-calendar-year-picker-trigger.component';
export { AvRangeCalendarYearPickerTriggerHeadingComponent } from './range-calendar-year-picker-trigger-heading.component';
export { AvRangeCalendarYearPickerTriggerIndicatorComponent } from './range-calendar-year-picker-trigger-indicator.component';
export { AvRangeCalendarYearPickerGridComponent } from './range-calendar-year-picker-grid.component';
export { AvRangeCalendarYearPickerCellComponent } from './range-calendar-year-picker-cell.component';
export { AvRangeCalendarImports } from './range-calendar.imports';
