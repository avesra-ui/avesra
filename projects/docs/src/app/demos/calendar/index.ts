import { defineDemo } from '../define-demo';
import { CalendarBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  CalendarBookingCalendarDemo,
  DEMO_LANG as bookingLang,
  DEMO_SOURCE as bookingSource,
} from './booking-calendar.demo';
import {
  CalendarControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  CalendarCustomIconsDemo,
  DEMO_LANG as customIconsLang,
  DEMO_SOURCE as customIconsSource,
} from './custom-icons.demo';
import {
  CalendarCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  CalendarDayViewDemo,
  DEMO_LANG as dayViewLang,
  DEMO_SOURCE as dayViewSource,
} from './day-view.demo';
import {
  CalendarDefaultValueDemo,
  DEMO_LANG as defaultValueLang,
  DEMO_SOURCE as defaultValueSource,
} from './default-value.demo';
import {
  CalendarDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  CalendarFocusedValueDemo,
  DEMO_LANG as focusedValueLang,
  DEMO_SOURCE as focusedValueSource,
} from './focused-value.demo';
import {
  CalendarInternationalCalendarDemo,
  DEMO_LANG as internationalLang,
  DEMO_SOURCE as internationalSource,
} from './international-calendar.demo';
import {
  CalendarMinMaxDemo,
  DEMO_LANG as minMaxLang,
  DEMO_SOURCE as minMaxSource,
} from './min-max.demo';
import {
  CalendarMultipleDemo,
  DEMO_LANG as multipleLang,
  DEMO_SOURCE as multipleSource,
} from './multiple.demo';
import {
  CalendarMultipleMonthsDemo,
  DEMO_LANG as multipleMonthsLang,
  DEMO_SOURCE as multipleMonthsSource,
} from './multiple-months.demo';
import {
  CalendarReadOnlyDemo,
  DEMO_LANG as readOnlyLang,
  DEMO_SOURCE as readOnlySource,
} from './read-only.demo';
import {
  CalendarUnavailableDemo,
  DEMO_LANG as unavailableLang,
  DEMO_SOURCE as unavailableSource,
} from './unavailable.demo';
import {
  CalendarWeekViewDemo,
  DEMO_LANG as weekViewLang,
  DEMO_SOURCE as weekViewSource,
} from './week-view.demo';
import {
  CalendarWeeksInMonthDemo,
  DEMO_LANG as weeksInMonthLang,
  DEMO_SOURCE as weeksInMonthSource,
} from './weeks-in-month.demo';
import {
  CalendarWithIndicatorsDemo,
  DEMO_LANG as withIndicatorsLang,
  DEMO_SOURCE as withIndicatorsSource,
} from './with-indicators.demo';
import {
  CalendarYearPickerDemo,
  DEMO_LANG as yearPickerLang,
  DEMO_SOURCE as yearPickerSource,
} from './year-picker.demo';

export const calendarDemos = {
  basic: defineDemo(CalendarBasicDemo, basicSource, basicLang),
  disabled: defineDemo(CalendarDisabledDemo, disabledSource, disabledLang),
  readOnly: defineDemo(CalendarReadOnlyDemo, readOnlySource, readOnlyLang),
  defaultValue: defineDemo(CalendarDefaultValueDemo, defaultValueSource, defaultValueLang),
  yearPicker: defineDemo(CalendarYearPickerDemo, yearPickerSource, yearPickerLang),
  controlled: defineDemo(CalendarControlledDemo, controlledSource, controlledLang),
  minMax: defineDemo(CalendarMinMaxDemo, minMaxSource, minMaxLang),
  unavailable: defineDemo(CalendarUnavailableDemo, unavailableSource, unavailableLang),
  weeksInMonth: defineDemo(CalendarWeeksInMonthDemo, weeksInMonthSource, weeksInMonthLang),
  weekView: defineDemo(CalendarWeekViewDemo, weekViewSource, weekViewLang),
  dayView: defineDemo(CalendarDayViewDemo, dayViewSource, dayViewLang),
  multiple: defineDemo(CalendarMultipleDemo, multipleSource, multipleLang),
  focusedValue: defineDemo(CalendarFocusedValueDemo, focusedValueSource, focusedValueLang),
  withIndicators: defineDemo(CalendarWithIndicatorsDemo, withIndicatorsSource, withIndicatorsLang),
  customIcons: defineDemo(CalendarCustomIconsDemo, customIconsSource, customIconsLang),
  multipleMonths: defineDemo(CalendarMultipleMonthsDemo, multipleMonthsSource, multipleMonthsLang),
  bookingCalendar: defineDemo(CalendarBookingCalendarDemo, bookingSource, bookingLang),
  internationalCalendar: defineDemo(
    CalendarInternationalCalendarDemo,
    internationalSource,
    internationalLang,
  ),
  customStyles: defineDemo(CalendarCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
