import { defineDemo } from '../define-demo';
import { FormBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  FormCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';

export const formDemos = {
  basic: defineDemo(FormBasicDemo, basicSource, basicLang),
  customStyling: defineDemo(FormCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
