import { defineDemo } from '../define-demo';
import {
  SeparatorBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  SeparatorCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  SeparatorVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  SeparatorVerticalDemo,
  DEMO_LANG as verticalLang,
  DEMO_SOURCE as verticalSource,
} from './vertical.demo';
import {
  SeparatorWithContentDemo,
  DEMO_LANG as withContentLang,
  DEMO_SOURCE as withContentSource,
} from './with-content.demo';
import {
  SeparatorWithLabelDemo,
  DEMO_LANG as withLabelLang,
  DEMO_SOURCE as withLabelSource,
} from './with-label.demo';
import {
  SeparatorWithSurfaceDemo,
  DEMO_LANG as withSurfaceLang,
  DEMO_SOURCE as withSurfaceSource,
} from './with-surface.demo';

export const separatorDemos = {
  basic: defineDemo(SeparatorBasicDemo, basicSource, basicLang),
  vertical: defineDemo(SeparatorVerticalDemo, verticalSource, verticalLang),
  withContent: defineDemo(SeparatorWithContentDemo, withContentSource, withContentLang),
  withLabel: defineDemo(SeparatorWithLabelDemo, withLabelSource, withLabelLang),
  variants: defineDemo(SeparatorVariantsDemo, variantsSource, variantsLang),
  withSurface: defineDemo(SeparatorWithSurfaceDemo, withSurfaceSource, withSurfaceLang),
  customStyling: defineDemo(
    SeparatorCustomStylingDemo,
    customStylingSource,
    customStylingLang,
  ),
} as const;
