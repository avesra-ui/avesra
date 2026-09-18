import { Directive } from '@angular/core';

import { AvDateFieldContext } from '../date-field/date-field.context';
import { AvDateRangePickerContext } from './date-range-picker.context';

/**
 * Provides the range picker's start {@link AvDateFieldContext} to a
 * `div[av-date-input-group-input][slot=start]` host.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'div[av-date-input-group-input][slot=start]',
  providers: [
    {
      provide: AvDateFieldContext,
      useFactory: (r: AvDateRangePickerContext) => r.startField,
      deps: [AvDateRangePickerContext],
    },
  ],
})
export class AvDateRangeStartInputDirective {}

/**
 * Provides the range picker's end {@link AvDateFieldContext} to a
 * `div[av-date-input-group-input][slot=end]` host.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'div[av-date-input-group-input][slot=end]',
  providers: [
    {
      provide: AvDateFieldContext,
      useFactory: (r: AvDateRangePickerContext) => r.endField,
      deps: [AvDateRangePickerContext],
    },
  ],
})
export class AvDateRangeEndInputDirective {}
