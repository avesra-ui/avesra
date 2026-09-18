import { defineDemo } from '../define-demo';
import {
  ProgressCircleBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  ProgressCircleColorsDemo,
  DEMO_LANG as colorsLang,
  DEMO_SOURCE as colorsSource,
} from './colors.demo';
import {
  ProgressCircleCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  ProgressCircleCustomSvgDemo,
  DEMO_LANG as customSvgLang,
  DEMO_SOURCE as customSvgSource,
} from './custom-svg.demo';
import {
  ProgressCircleIndeterminateDemo,
  DEMO_LANG as indeterminateLang,
  DEMO_SOURCE as indeterminateSource,
} from './indeterminate.demo';
import {
  ProgressCircleSizesDemo,
  DEMO_LANG as sizesLang,
  DEMO_SOURCE as sizesSource,
} from './sizes.demo';
import {
  ProgressCircleWithLabelDemo,
  DEMO_LANG as withLabelLang,
  DEMO_SOURCE as withLabelSource,
} from './with-label.demo';

export const progressCircleDemos = {
  basic: defineDemo(ProgressCircleBasicDemo, basicSource, basicLang),
  sizes: defineDemo(ProgressCircleSizesDemo, sizesSource, sizesLang),
  colors: defineDemo(ProgressCircleColorsDemo, colorsSource, colorsLang),
  indeterminate: defineDemo(ProgressCircleIndeterminateDemo, indeterminateSource, indeterminateLang),
  withLabel: defineDemo(ProgressCircleWithLabelDemo, withLabelSource, withLabelLang),
  customSvg: defineDemo(ProgressCircleCustomSvgDemo, customSvgSource, customSvgLang),
  customStyling: defineDemo(ProgressCircleCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
