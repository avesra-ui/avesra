import { defineDemo } from '../define-demo';
import { TypographyBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  TypographyCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  TypographyPrimitivesDemo,
  DEMO_LANG as primitivesLang,
  DEMO_SOURCE as primitivesSource,
} from './primitives.demo';
import { TypographyProseDemo, DEMO_LANG as proseLang, DEMO_SOURCE as proseSource } from './prose.demo';
import {
  TypographyTypographyScaleDemo,
  DEMO_LANG as typographyScaleLang,
  DEMO_SOURCE as typographyScaleSource,
} from './typography-scale.demo';

export const typographyDemos = {
  basic: defineDemo(TypographyBasicDemo, basicSource, basicLang),
  primitives: defineDemo(TypographyPrimitivesDemo, primitivesSource, primitivesLang),
  prose: defineDemo(TypographyProseDemo, proseSource, proseLang),
  typographyScale: defineDemo(TypographyTypographyScaleDemo, typographyScaleSource, typographyScaleLang),
  customStyles: defineDemo(TypographyCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
