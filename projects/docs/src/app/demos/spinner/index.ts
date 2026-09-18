import { defineDemo } from '../define-demo';
import { SpinnerBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  SpinnerColorsDemo,
  DEMO_LANG as colorsLang,
  DEMO_SOURCE as colorsSource,
} from './colors.demo';
import {
  SpinnerCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import { SpinnerSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';

export const spinnerDemos = {
  basic: defineDemo(SpinnerBasicDemo, basicSource, basicLang),
  colors: defineDemo(SpinnerColorsDemo, colorsSource, colorsLang),
  sizes: defineDemo(SpinnerSizesDemo, sizesSource, sizesLang),
  customStyling: defineDemo(SpinnerCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
