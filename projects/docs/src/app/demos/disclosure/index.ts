import { defineDemo } from '../define-demo';
import { DisclosureBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  DisclosureCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';

export const disclosureDemos = {
  basic: defineDemo(DisclosureBasicDemo, basicSource, basicLang),
  customStyles: defineDemo(DisclosureCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
