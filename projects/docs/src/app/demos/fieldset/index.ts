import { defineDemo } from '../define-demo';
import { FieldsetBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { FieldsetDisabledDemo, DEMO_LANG as disabledLang, DEMO_SOURCE as disabledSource } from './disabled.demo';
import { FieldsetOnSurfaceDemo, DEMO_LANG as onSurfaceLang, DEMO_SOURCE as onSurfaceSource } from './on-surface.demo';

export const fieldsetDemos = {
  basic: defineDemo(FieldsetBasicDemo, basicSource, basicLang),
  disabled: defineDemo(FieldsetDisabledDemo, disabledSource, disabledLang),
  onSurface: defineDemo(FieldsetOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
} as const;
