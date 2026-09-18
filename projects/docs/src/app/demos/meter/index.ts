import { defineDemo } from '../define-demo';
import { MeterBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  MeterColorsDemo,
  DEMO_LANG as colorsLang,
  DEMO_SOURCE as colorsSource,
} from './colors.demo';
import {
  MeterCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  MeterCustomValueDemo,
  DEMO_LANG as customValueLang,
  DEMO_SOURCE as customValueSource,
} from './custom-value.demo';
import { MeterSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import {
  MeterWithoutLabelDemo,
  DEMO_LANG as withoutLabelLang,
  DEMO_SOURCE as withoutLabelSource,
} from './without-label.demo';

export const meterDemos = {
  basic: defineDemo(MeterBasicDemo, basicSource, basicLang),
  sizes: defineDemo(MeterSizesDemo, sizesSource, sizesLang),
  colors: defineDemo(MeterColorsDemo, colorsSource, colorsLang),
  customValue: defineDemo(MeterCustomValueDemo, customValueSource, customValueLang),
  withoutLabel: defineDemo(MeterWithoutLabelDemo, withoutLabelSource, withoutLabelLang),
  customStyling: defineDemo(MeterCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
