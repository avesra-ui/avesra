import { defineDemo } from '../define-demo';
import { SurfaceBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  SurfaceCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  SurfaceVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  SurfaceWithFormComponentsDemo,
  DEMO_LANG as withFormComponentsLang,
  DEMO_SOURCE as withFormComponentsSource,
} from './with-form-components.demo';

export const surfaceDemos = {
  basic: defineDemo(SurfaceBasicDemo, basicSource, basicLang),
  variants: defineDemo(SurfaceVariantsDemo, variantsSource, variantsLang),
  withFormComponents: defineDemo(
    SurfaceWithFormComponentsDemo,
    withFormComponentsSource,
    withFormComponentsLang,
  ),
  customStyling: defineDemo(SurfaceCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
