import { defineDemo } from '../define-demo';
import { AlertBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  AlertCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';

export const alertDemos = {
  basic: defineDemo(AlertBasicDemo, basicSource, basicLang),
  customStyles: defineDemo(AlertCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
