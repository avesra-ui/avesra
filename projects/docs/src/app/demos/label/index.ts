import { defineDemo } from '../define-demo';
import { LabelBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  LabelRequiredDemo,
  DEMO_LANG as requiredLang,
  DEMO_SOURCE as requiredSource,
} from './required.demo';
import {
  LabelDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  LabelInvalidDemo,
  DEMO_LANG as invalidLang,
  DEMO_SOURCE as invalidSource,
} from './invalid.demo';

export const labelDemos = {
  basic: defineDemo(LabelBasicDemo, basicSource, basicLang),
  required: defineDemo(LabelRequiredDemo, requiredSource, requiredLang),
  disabled: defineDemo(LabelDisabledDemo, disabledSource, disabledLang),
  invalid: defineDemo(LabelInvalidDemo, invalidSource, invalidLang),
} as const;
