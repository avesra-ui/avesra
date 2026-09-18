import { AvDatePickerComponent } from './date-picker.component';
import { AvDatePickerTriggerComponent } from './date-picker-trigger.component';
import { AvDatePickerTriggerIndicatorComponent } from './date-picker-trigger-indicator.component';
import { AvDatePickerPopoverComponent } from './date-picker-popover.component';
import { AvDateInputGroupImports } from '../date-input-group/date-input-group.imports';
import { AvCalendarImports } from '../calendar/calendar.imports';

export const AvDatePickerImports = [
  AvDatePickerComponent,
  AvDatePickerTriggerComponent,
  AvDatePickerTriggerIndicatorComponent,
  AvDatePickerPopoverComponent,
  ...AvDateInputGroupImports,
  ...AvCalendarImports,
] as const;
