import { defineDemo } from '../define-demo';
import { KbdBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  KbdCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  KbdInlineUsageDemo,
  DEMO_LANG as inlineUsageLang,
  DEMO_SOURCE as inlineUsageSource,
} from './inline-usage.demo';
import {
  KbdInstructionalTextDemo,
  DEMO_LANG as instructionalTextLang,
  DEMO_SOURCE as instructionalTextSource,
} from './instructional-text.demo';
import {
  KbdNavigationKeysDemo,
  DEMO_LANG as navigationKeysLang,
  DEMO_SOURCE as navigationKeysSource,
} from './navigation-keys.demo';
import {
  KbdSpecialKeysDemo,
  DEMO_LANG as specialKeysLang,
  DEMO_SOURCE as specialKeysSource,
} from './special-keys.demo';
import {
  KbdVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';

export const kbdDemos = {
  basic: defineDemo(KbdBasicDemo, basicSource, basicLang),
  navigationKeys: defineDemo(KbdNavigationKeysDemo, navigationKeysSource, navigationKeysLang),
  inlineUsage: defineDemo(KbdInlineUsageDemo, inlineUsageSource, inlineUsageLang),
  instructionalText: defineDemo(
    KbdInstructionalTextDemo,
    instructionalTextSource,
    instructionalTextLang,
  ),
  specialKeys: defineDemo(KbdSpecialKeysDemo, specialKeysSource, specialKeysLang),
  variants: defineDemo(KbdVariantsDemo, variantsSource, variantsLang),
  customStyling: defineDemo(KbdCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
