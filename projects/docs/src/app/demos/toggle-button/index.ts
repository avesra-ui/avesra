import { defineDemo } from '../define-demo';
import { ToggleButtonBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { ToggleButtonControlledDemo, DEMO_LANG as controlledLang, DEMO_SOURCE as controlledSource } from './controlled.demo';
import { ToggleButtonCustomStylingDemo, DEMO_LANG as customStylingLang, DEMO_SOURCE as customStylingSource } from './custom-styling.demo';
import { ToggleButtonDisabledDemo, DEMO_LANG as disabledLang, DEMO_SOURCE as disabledSource } from './disabled.demo';
import { ToggleButtonIconOnlyDemo, DEMO_LANG as iconOnlyLang, DEMO_SOURCE as iconOnlySource } from './icon-only.demo';
import { ToggleButtonSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import { ToggleButtonVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';

export const toggleButtonDemos = {
  basic: defineDemo(ToggleButtonBasicDemo, basicSource, basicLang),
  controlled: defineDemo(ToggleButtonControlledDemo, controlledSource, controlledLang),
  customStyling: defineDemo(ToggleButtonCustomStylingDemo, customStylingSource, customStylingLang),
  disabled: defineDemo(ToggleButtonDisabledDemo, disabledSource, disabledLang),
  iconOnly: defineDemo(ToggleButtonIconOnlyDemo, iconOnlySource, iconOnlyLang),
  sizes: defineDemo(ToggleButtonSizesDemo, sizesSource, sizesLang),
  variants: defineDemo(ToggleButtonVariantsDemo, variantsSource, variantsLang),
} as const;
