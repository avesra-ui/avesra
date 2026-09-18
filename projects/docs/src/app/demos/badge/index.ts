import { defineDemo } from '../define-demo';
import { BadgeBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { BadgeColorsDemo, DEMO_LANG as colorsLang, DEMO_SOURCE as colorsSource } from './colors.demo';
import {
  BadgeCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import { BadgeDotBadgeDemo, DEMO_LANG as dotBadgeLang, DEMO_SOURCE as dotBadgeSource } from './dot-badge.demo';
import { BadgePlacementsDemo, DEMO_LANG as placementsLang, DEMO_SOURCE as placementsSource } from './placements.demo';
import { BadgeSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import { BadgeVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';
import { BadgeWithContentDemo, DEMO_LANG as withContentLang, DEMO_SOURCE as withContentSource } from './with-content.demo';

export const badgeDemos = {
  basic: defineDemo(BadgeBasicDemo, basicSource, basicLang),
  colors: defineDemo(BadgeColorsDemo, colorsSource, colorsLang),
  customStyles: defineDemo(BadgeCustomStylesDemo, customStylesSource, customStylesLang),
  dotBadge: defineDemo(BadgeDotBadgeDemo, dotBadgeSource, dotBadgeLang),
  placements: defineDemo(BadgePlacementsDemo, placementsSource, placementsLang),
  sizes: defineDemo(BadgeSizesDemo, sizesSource, sizesLang),
  variants: defineDemo(BadgeVariantsDemo, variantsSource, variantsLang),
  withContent: defineDemo(BadgeWithContentDemo, withContentSource, withContentLang),
} as const;
