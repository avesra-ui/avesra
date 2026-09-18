import { defineDemo } from '../define-demo';
import { TextareaBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  TextareaControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  TextareaFullWidthDemo,
  DEMO_LANG as fullWidthLang,
  DEMO_SOURCE as fullWidthSource,
} from './full-width.demo';
import {
  TextareaOnSurfaceDemo,
  DEMO_LANG as onSurfaceLang,
  DEMO_SOURCE as onSurfaceSource,
} from './on-surface.demo';
import { TextareaRowsDemo, DEMO_LANG as rowsLang, DEMO_SOURCE as rowsSource } from './rows.demo';
import {
  TextareaVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';

export const textareaDemos = {
  basic: defineDemo(TextareaBasicDemo, basicSource, basicLang),
  variants: defineDemo(TextareaVariantsDemo, variantsSource, variantsLang),
  onSurface: defineDemo(TextareaOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  fullWidth: defineDemo(TextareaFullWidthDemo, fullWidthSource, fullWidthLang),
  controlled: defineDemo(TextareaControlledDemo, controlledSource, controlledLang),
  rows: defineDemo(TextareaRowsDemo, rowsSource, rowsLang),
} as const;
