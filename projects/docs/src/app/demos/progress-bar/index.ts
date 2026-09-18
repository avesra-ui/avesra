import { defineDemo } from '../define-demo';
import {
  ProgressBarBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  ProgressBarColorsDemo,
  DEMO_LANG as colorsLang,
  DEMO_SOURCE as colorsSource,
} from './colors.demo';
import {
  ProgressBarCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  ProgressBarCustomValueDemo,
  DEMO_LANG as customValueLang,
  DEMO_SOURCE as customValueSource,
} from './custom-value.demo';
import {
  ProgressBarIndeterminateDemo,
  DEMO_LANG as indeterminateLang,
  DEMO_SOURCE as indeterminateSource,
} from './indeterminate.demo';
import {
  ProgressBarSizesDemo,
  DEMO_LANG as sizesLang,
  DEMO_SOURCE as sizesSource,
} from './sizes.demo';
import {
  ProgressBarWithoutLabelDemo,
  DEMO_LANG as withoutLabelLang,
  DEMO_SOURCE as withoutLabelSource,
} from './without-label.demo';

export const progressBarDemos = {
  basic: defineDemo(ProgressBarBasicDemo, basicSource, basicLang),
  sizes: defineDemo(ProgressBarSizesDemo, sizesSource, sizesLang),
  colors: defineDemo(ProgressBarColorsDemo, colorsSource, colorsLang),
  indeterminate: defineDemo(ProgressBarIndeterminateDemo, indeterminateSource, indeterminateLang),
  customValue: defineDemo(ProgressBarCustomValueDemo, customValueSource, customValueLang),
  withoutLabel: defineDemo(ProgressBarWithoutLabelDemo, withoutLabelSource, withoutLabelLang),
  customStyling: defineDemo(ProgressBarCustomStylingDemo, customStylingSource, customStylingLang),
} as const;

