import { defineDemo } from '../define-demo';
import { AccordionBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  AccordionControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  AccordionCustomFaqDemo,
  DEMO_LANG as customFaqLang,
  DEMO_SOURCE as customFaqSource,
} from './custom-faq.demo';
import {
  AccordionCustomIndicatorDemo,
  DEMO_LANG as customIndicatorLang,
  DEMO_SOURCE as customIndicatorSource,
} from './custom-indicator.demo';
import {
  AccordionCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  AccordionDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  AccordionMultipleDemo,
  DEMO_LANG as multipleLang,
  DEMO_SOURCE as multipleSource,
} from './multiple.demo';
import {
  AccordionSurfaceDemo,
  DEMO_LANG as surfaceLang,
  DEMO_SOURCE as surfaceSource,
} from './surface.demo';
import {
  AccordionWithoutSeparatorDemo,
  DEMO_LANG as withoutSeparatorLang,
  DEMO_SOURCE as withoutSeparatorSource,
} from './without-separator.demo';

export const accordionDemos = {
  basic: defineDemo(AccordionBasicDemo, basicSource, basicLang),
  surface: defineDemo(AccordionSurfaceDemo, surfaceSource, surfaceLang),
  withoutSeparator: defineDemo(AccordionWithoutSeparatorDemo, withoutSeparatorSource, withoutSeparatorLang),
  multiple: defineDemo(AccordionMultipleDemo, multipleSource, multipleLang),
  disabled: defineDemo(AccordionDisabledDemo, disabledSource, disabledLang),
  controlled: defineDemo(AccordionControlledDemo, controlledSource, controlledLang),
  customIndicator: defineDemo(AccordionCustomIndicatorDemo, customIndicatorSource, customIndicatorLang),
  customFaq: defineDemo(AccordionCustomFaqDemo, customFaqSource, customFaqLang),
  customStyles: defineDemo(AccordionCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
