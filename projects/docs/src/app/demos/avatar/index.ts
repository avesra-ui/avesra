import { defineDemo } from '../define-demo';
import { AvatarBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  AvatarCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import { AvatarFallbackDemo, DEMO_LANG as fallbackLang, DEMO_SOURCE as fallbackSource } from './fallback.demo';
import { AvatarGroupDemo, DEMO_LANG as groupLang, DEMO_SOURCE as groupSource } from './group.demo';
import { AvatarSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import { AvatarVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';
import { AvatarWithColorsDemo, DEMO_LANG as withColorsLang, DEMO_SOURCE as withColorsSource } from './with-colors.demo';

export const avatarDemos = {
  basic: defineDemo(AvatarBasicDemo, basicSource, basicLang),
  customStyles: defineDemo(AvatarCustomStylesDemo, customStylesSource, customStylesLang),
  fallback: defineDemo(AvatarFallbackDemo, fallbackSource, fallbackLang),
  group: defineDemo(AvatarGroupDemo, groupSource, groupLang),
  sizes: defineDemo(AvatarSizesDemo, sizesSource, sizesLang),
  variants: defineDemo(AvatarVariantsDemo, variantsSource, variantsLang),
  withColors: defineDemo(AvatarWithColorsDemo, withColorsSource, withColorsLang),
} as const;
