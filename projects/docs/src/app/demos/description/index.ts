import { defineDemo } from '../define-demo';
import { DescriptionBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  DescriptionWithFormFieldsDemo,
  DEMO_LANG as withFormFieldsLang,
  DEMO_SOURCE as withFormFieldsSource,
} from './with-form-fields.demo';

export const descriptionDemos = {
  basic: defineDemo(DescriptionBasicDemo, basicSource, basicLang),
  withFormFields: defineDemo(
    DescriptionWithFormFieldsDemo,
    withFormFieldsSource,
    withFormFieldsLang,
  ),
} as const;
