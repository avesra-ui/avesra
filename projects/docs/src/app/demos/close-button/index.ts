import { defineDemo } from '../define-demo';
import { CloseButtonBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { CloseButtonCustomStylingDemo, DEMO_LANG as customStylingLang, DEMO_SOURCE as customStylingSource } from './custom-styling.demo';
import { CloseButtonDefaultDemo, DEMO_LANG as defaultLang, DEMO_SOURCE as defaultSource } from './default.demo';
import { CloseButtonDisabledDemo, DEMO_LANG as disabledLang, DEMO_SOURCE as disabledSource } from './disabled.demo';
import { CloseButtonInteractiveDemo, DEMO_LANG as interactiveLang, DEMO_SOURCE as interactiveSource } from './interactive.demo';
import { CloseButtonPendingDemo, DEMO_LANG as pendingLang, DEMO_SOURCE as pendingSource } from './pending.demo';
import { CloseButtonWithCustomIconDemo, DEMO_LANG as withCustomIconLang, DEMO_SOURCE as withCustomIconSource } from './with-custom-icon.demo';

export const closeButtonDemos = {
  basic: defineDemo(CloseButtonBasicDemo, basicSource, basicLang),
  customStyling: defineDemo(CloseButtonCustomStylingDemo, customStylingSource, customStylingLang),
  default: defineDemo(CloseButtonDefaultDemo, defaultSource, defaultLang),
  disabled: defineDemo(CloseButtonDisabledDemo, disabledSource, disabledLang),
  interactive: defineDemo(CloseButtonInteractiveDemo, interactiveSource, interactiveLang),
  pending: defineDemo(CloseButtonPendingDemo, pendingSource, pendingLang),
  withCustomIcon: defineDemo(CloseButtonWithCustomIconDemo, withCustomIconSource, withCustomIconLang),
} as const;
