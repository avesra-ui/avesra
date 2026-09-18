import { defineDemo } from '../define-demo';
import { ButtonGroupBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  ButtonGroupCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import { ButtonGroupDisabledDemo, DEMO_LANG as disabledLang, DEMO_SOURCE as disabledSource } from './disabled.demo';
import { ButtonGroupFullWidthDemo, DEMO_LANG as fullWidthLang, DEMO_SOURCE as fullWidthSource } from './full-width.demo';
import {
  ButtonGroupOrientationDemo,
  DEMO_LANG as orientationLang,
  DEMO_SOURCE as orientationSource,
} from './orientation.demo';
import { ButtonGroupSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import { ButtonGroupVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';
import { ButtonGroupWithIconsDemo, DEMO_LANG as withIconsLang, DEMO_SOURCE as withIconsSource } from './with-icons.demo';
import {
  ButtonGroupWithoutSeparatorDemo,
  DEMO_LANG as withoutSeparatorLang,
  DEMO_SOURCE as withoutSeparatorSource,
} from './without-separator.demo';

export const buttonGroupDemos = {
  basic: defineDemo(ButtonGroupBasicDemo, basicSource, basicLang),
  customStyles: defineDemo(ButtonGroupCustomStylesDemo, customStylesSource, customStylesLang),
  disabled: defineDemo(ButtonGroupDisabledDemo, disabledSource, disabledLang),
  fullWidth: defineDemo(ButtonGroupFullWidthDemo, fullWidthSource, fullWidthLang),
  orientation: defineDemo(ButtonGroupOrientationDemo, orientationSource, orientationLang),
  sizes: defineDemo(ButtonGroupSizesDemo, sizesSource, sizesLang),
  variants: defineDemo(ButtonGroupVariantsDemo, variantsSource, variantsLang),
  withIcons: defineDemo(ButtonGroupWithIconsDemo, withIconsSource, withIconsLang),
  withoutSeparator: defineDemo(
    ButtonGroupWithoutSeparatorDemo,
    withoutSeparatorSource,
    withoutSeparatorLang,
  ),
} as const;
