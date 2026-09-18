import { AvDateRangePickerComponent } from './date-range-picker.component';
import {
  AvDateRangeStartInputDirective,
  AvDateRangeEndInputDirective,
} from './date-range-picker-input-slot.directive';
import { AvDateRangePickerTriggerComponent } from './date-range-picker-trigger.component';
import { AvDateRangePickerTriggerIndicatorComponent } from './date-range-picker-trigger-indicator.component';
import { AvDateRangePickerRangeSeparatorComponent } from './date-range-picker-range-separator.component';
import { AvDateRangePickerPopoverComponent } from './date-range-picker-popover.component';
import { AvDateInputGroupImports } from '../date-input-group/date-input-group.imports';
import { AvRangeCalendarImports } from '../range-calendar/range-calendar.imports';

export const AvDateRangePickerImports = [
  AvDateRangePickerComponent,
  AvDateRangeStartInputDirective,
  AvDateRangeEndInputDirective,
  AvDateRangePickerTriggerComponent,
  AvDateRangePickerTriggerIndicatorComponent,
  AvDateRangePickerRangeSeparatorComponent,
  AvDateRangePickerPopoverComponent,
  ...AvDateInputGroupImports,
  ...AvRangeCalendarImports,
] as const;
