import { defineDemo } from '../define-demo';
import { FieldErrorBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  FieldErrorBasicValidationDemo,
  DEMO_LANG as basicValidationLang,
  DEMO_SOURCE as basicValidationSource,
} from './basic-validation.demo';
import {
  FieldErrorDynamicMessagesDemo,
  DEMO_LANG as dynamicMessagesLang,
  DEMO_SOURCE as dynamicMessagesSource,
} from './dynamic-messages.demo';
import {
  FieldErrorMultipleErrorsDemo,
  DEMO_LANG as multipleErrorsLang,
  DEMO_SOURCE as multipleErrorsSource,
} from './multiple-errors.demo';

export const fieldErrorDemos = {
  basic: defineDemo(FieldErrorBasicDemo, basicSource, basicLang),
  basicValidation: defineDemo(
    FieldErrorBasicValidationDemo,
    basicValidationSource,
    basicValidationLang,
  ),
  dynamicMessages: defineDemo(
    FieldErrorDynamicMessagesDemo,
    dynamicMessagesSource,
    dynamicMessagesLang,
  ),
  multipleErrors: defineDemo(
    FieldErrorMultipleErrorsDemo,
    multipleErrorsSource,
    multipleErrorsLang,
  ),
} as const;
