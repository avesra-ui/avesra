import { defineDemo } from '../define-demo';
import { InputBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  InputControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  InputCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  InputFullWidthDemo,
  DEMO_LANG as fullWidthLang,
  DEMO_SOURCE as fullWidthSource,
} from './full-width.demo';
import {
  InputInputTypesDemo,
  DEMO_LANG as inputTypesLang,
  DEMO_SOURCE as inputTypesSource,
} from './input-types.demo';
import {
  InputOnSurfaceDemo,
  DEMO_LANG as onSurfaceLang,
  DEMO_SOURCE as onSurfaceSource,
} from './on-surface.demo';
import {
  InputVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';

export const inputDemos = {
  basic: defineDemo(InputBasicDemo, basicSource, basicLang),
  inputTypes: defineDemo(InputInputTypesDemo, inputTypesSource, inputTypesLang),
  controlled: defineDemo(InputControlledDemo, controlledSource, controlledLang),
  fullWidth: defineDemo(InputFullWidthDemo, fullWidthSource, fullWidthLang),
  variants: defineDemo(InputVariantsDemo, variantsSource, variantsLang),
  onSurface: defineDemo(InputOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  customStyling: defineDemo(InputCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
