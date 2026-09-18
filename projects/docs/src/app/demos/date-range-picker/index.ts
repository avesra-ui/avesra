import { defineDemo } from '../define-demo';
import {
  DateRangePickerBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  DateRangePickerControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  DateRangePickerCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  DateRangePickerDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  DateRangePickerFormExampleDemo,
  DEMO_LANG as formExampleLang,
  DEMO_SOURCE as formExampleSource,
} from './form-example.demo';
import {
  DateRangePickerWithCustomIndicatorDemo,
  DEMO_LANG as withCustomIndicatorLang,
  DEMO_SOURCE as withCustomIndicatorSource,
} from './with-custom-indicator.demo';
import {
  DateRangePickerWithValidationDemo,
  DEMO_LANG as withValidationLang,
  DEMO_SOURCE as withValidationSource,
} from './with-validation.demo';

export const dateRangePickerDemos = {
  basic: defineDemo(DateRangePickerBasicDemo, basicSource, basicLang),
  disabled: defineDemo(DateRangePickerDisabledDemo, disabledSource, disabledLang),
  controlled: defineDemo(DateRangePickerControlledDemo, controlledSource, controlledLang),
  withValidation: defineDemo(
    DateRangePickerWithValidationDemo,
    withValidationSource,
    withValidationLang,
  ),
  formExample: defineDemo(
    DateRangePickerFormExampleDemo,
    formExampleSource,
    formExampleLang,
  ),
  withCustomIndicator: defineDemo(
    DateRangePickerWithCustomIndicatorDemo,
    withCustomIndicatorSource,
    withCustomIndicatorLang,
  ),
  customStyles: defineDemo(
    DateRangePickerCustomStylesDemo,
    customStylesSource,
    customStylesLang,
  ),
} as const;
