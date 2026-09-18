import { defineDemo } from '../define-demo';
import {
  RangeCalendarAllowsNonContiguousDemo,
  DEMO_LANG as allowsNonContiguousLang,
  DEMO_SOURCE as allowsNonContiguousSource,
} from './allows-non-contiguous.demo';
import {
  RangeCalendarAnchorUnavailableDemo,
  DEMO_LANG as anchorUnavailableLang,
  DEMO_SOURCE as anchorUnavailableSource,
} from './anchor-unavailable.demo';
import {
  RangeCalendarBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  RangeCalendarBookingCalendarDemo,
  DEMO_LANG as bookingLang,
  DEMO_SOURCE as bookingSource,
} from './booking-calendar.demo';
import {
  RangeCalendarControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  RangeCalendarCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  RangeCalendarDayViewDemo,
  DEMO_LANG as dayViewLang,
  DEMO_SOURCE as dayViewSource,
} from './day-view.demo';
import {
  RangeCalendarDefaultValueDemo,
  DEMO_LANG as defaultValueLang,
  DEMO_SOURCE as defaultValueSource,
} from './default-value.demo';
import {
  RangeCalendarDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  RangeCalendarFocusedValueDemo,
  DEMO_LANG as focusedValueLang,
  DEMO_SOURCE as focusedValueSource,
} from './focused-value.demo';
import {
  RangeCalendarInternationalCalendarDemo,
  DEMO_LANG as internationalLang,
  DEMO_SOURCE as internationalSource,
} from './international-calendar.demo';
import {
  RangeCalendarInvalidDemo,
  DEMO_LANG as invalidLang,
  DEMO_SOURCE as invalidSource,
} from './invalid.demo';
import {
  RangeCalendarMinMaxDemo,
  DEMO_LANG as minMaxLang,
  DEMO_SOURCE as minMaxSource,
} from './min-max.demo';
import {
  RangeCalendarMultipleMonthsDemo,
  DEMO_LANG as multipleMonthsLang,
  DEMO_SOURCE as multipleMonthsSource,
} from './multiple-months.demo';
import {
  RangeCalendarReadOnlyDemo,
  DEMO_LANG as readOnlyLang,
  DEMO_SOURCE as readOnlySource,
} from './read-only.demo';
import {
  RangeCalendarUnavailableDemo,
  DEMO_LANG as unavailableLang,
  DEMO_SOURCE as unavailableSource,
} from './unavailable.demo';
import {
  RangeCalendarWeekViewDemo,
  DEMO_LANG as weekViewLang,
  DEMO_SOURCE as weekViewSource,
} from './week-view.demo';
import {
  RangeCalendarWeeksInMonthDemo,
  DEMO_LANG as weeksInMonthLang,
  DEMO_SOURCE as weeksInMonthSource,
} from './weeks-in-month.demo';
import {
  RangeCalendarWithIndicatorsDemo,
  DEMO_LANG as withIndicatorsLang,
  DEMO_SOURCE as withIndicatorsSource,
} from './with-indicators.demo';
import {
  RangeCalendarYearPickerDemo,
  DEMO_LANG as yearPickerLang,
  DEMO_SOURCE as yearPickerSource,
} from './year-picker.demo';

export const rangeCalendarDemos = {
  basic: defineDemo(RangeCalendarBasicDemo, basicSource, basicLang),
  disabled: defineDemo(RangeCalendarDisabledDemo, disabledSource, disabledLang),
  yearPicker: defineDemo(RangeCalendarYearPickerDemo, yearPickerSource, yearPickerLang),
  defaultValue: defineDemo(RangeCalendarDefaultValueDemo, defaultValueSource, defaultValueLang),
  controlled: defineDemo(RangeCalendarControlledDemo, controlledSource, controlledLang),
  minMax: defineDemo(RangeCalendarMinMaxDemo, minMaxSource, minMaxLang),
  unavailable: defineDemo(RangeCalendarUnavailableDemo, unavailableSource, unavailableLang),
  anchorUnavailable: defineDemo(
    RangeCalendarAnchorUnavailableDemo,
    anchorUnavailableSource,
    anchorUnavailableLang,
  ),
  weeksInMonth: defineDemo(RangeCalendarWeeksInMonthDemo, weeksInMonthSource, weeksInMonthLang),
  weekView: defineDemo(RangeCalendarWeekViewDemo, weekViewSource, weekViewLang),
  dayView: defineDemo(RangeCalendarDayViewDemo, dayViewSource, dayViewLang),
  allowsNonContiguous: defineDemo(
    RangeCalendarAllowsNonContiguousDemo,
    allowsNonContiguousSource,
    allowsNonContiguousLang,
  ),
  readOnly: defineDemo(RangeCalendarReadOnlyDemo, readOnlySource, readOnlyLang),
  invalid: defineDemo(RangeCalendarInvalidDemo, invalidSource, invalidLang),
  focusedValue: defineDemo(RangeCalendarFocusedValueDemo, focusedValueSource, focusedValueLang),
  withIndicators: defineDemo(
    RangeCalendarWithIndicatorsDemo,
    withIndicatorsSource,
    withIndicatorsLang,
  ),
  bookingCalendar: defineDemo(RangeCalendarBookingCalendarDemo, bookingSource, bookingLang),
  multipleMonths: defineDemo(
    RangeCalendarMultipleMonthsDemo,
    multipleMonthsSource,
    multipleMonthsLang,
  ),
  internationalCalendar: defineDemo(
    RangeCalendarInternationalCalendarDemo,
    internationalSource,
    internationalLang,
  ),
  customStyles: defineDemo(RangeCalendarCustomStylesDemo, customStylesSource, customStylesLang),
};
