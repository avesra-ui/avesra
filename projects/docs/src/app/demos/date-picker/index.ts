import { defineDemo } from '../define-demo';
import { DatePickerBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  DatePickerControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  DatePickerCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  DatePickerDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  DatePickerFormatOptionsDemo,
  DEMO_LANG as formatOptionsLang,
  DEMO_SOURCE as formatOptionsSource,
} from './format-options.demo';
import {
  DatePickerFormExampleDemo,
  DEMO_LANG as formExampleLang,
  DEMO_SOURCE as formExampleSource,
} from './form-example.demo';
import {
  DatePickerInternationalCalendarDemo,
  DEMO_LANG as internationalCalendarLang,
  DEMO_SOURCE as internationalCalendarSource,
} from './international-calendar.demo';
import {
  DatePickerRenderFunctionDemo,
  DEMO_LANG as renderFunctionLang,
  DEMO_SOURCE as renderFunctionSource,
} from './render-function.demo';
import {
  DatePickerWithCustomIndicatorDemo,
  DEMO_LANG as withCustomIndicatorLang,
  DEMO_SOURCE as withCustomIndicatorSource,
} from './with-custom-indicator.demo';
import {
  DatePickerWithValidationDemo,
  DEMO_LANG as withValidationLang,
  DEMO_SOURCE as withValidationSource,
} from './with-validation.demo';

export const datePickerDemos = {
  basic: defineDemo(DatePickerBasicDemo, basicSource, basicLang),
  disabled: defineDemo(DatePickerDisabledDemo, disabledSource, disabledLang),
  controlled: defineDemo(DatePickerControlledDemo, controlledSource, controlledLang),
  withValidation: defineDemo(
    DatePickerWithValidationDemo,
    withValidationSource,
    withValidationLang,
  ),
  formatOptions: defineDemo(
    DatePickerFormatOptionsDemo,
    formatOptionsSource,
    formatOptionsLang,
  ),
  formExample: defineDemo(DatePickerFormExampleDemo, formExampleSource, formExampleLang),
  withCustomIndicator: defineDemo(
    DatePickerWithCustomIndicatorDemo,
    withCustomIndicatorSource,
    withCustomIndicatorLang,
  ),
  renderFunction: defineDemo(
    DatePickerRenderFunctionDemo,
    renderFunctionSource,
    renderFunctionLang,
  ),
  internationalCalendar: defineDemo(
    DatePickerInternationalCalendarDemo,
    internationalCalendarSource,
    internationalCalendarLang,
  ),
  customStyles: defineDemo(DatePickerCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
