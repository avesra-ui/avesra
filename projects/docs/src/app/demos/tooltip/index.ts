import { defineDemo } from '../define-demo';
import {
  TooltipAutoHideDemo,
  DEMO_LANG as autoHideLang,
  DEMO_SOURCE as autoHideSource,
} from './auto-hide.demo';
import { TooltipBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  TooltipCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  TooltipCustomTriggerDemo,
  DEMO_LANG as customTriggerLang,
  DEMO_SOURCE as customTriggerSource,
} from './custom-trigger.demo';
import {
  TooltipDelaysDemo,
  DEMO_LANG as delaysLang,
  DEMO_SOURCE as delaysSource,
} from './delays.demo';
import {
  TooltipDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  TooltipDynamicContentDemo,
  DEMO_LANG as dynamicContentLang,
  DEMO_SOURCE as dynamicContentSource,
} from './dynamic-content.demo';
import {
  TooltipEventsDemo,
  DEMO_LANG as eventsLang,
  DEMO_SOURCE as eventsSource,
} from './events.demo';
import {
  TooltipHideOnEscapeDemo,
  DEMO_LANG as hideOnEscapeLang,
  DEMO_SOURCE as hideOnEscapeSource,
} from './hide-on-escape.demo';
import {
  TooltipLongTextDemo,
  DEMO_LANG as longTextLang,
  DEMO_SOURCE as longTextSource,
} from './long-text.demo';
import {
  TooltipPositionOffsetDemo,
  DEMO_LANG as positionOffsetLang,
  DEMO_SOURCE as positionOffsetSource,
} from './position-offset.demo';
import {
  TooltipPositionsDemo,
  DEMO_LANG as positionsLang,
  DEMO_SOURCE as positionsSource,
} from './positions.demo';
import {
  TooltipTemplateContentDemo,
  DEMO_LANG as templateContentLang,
  DEMO_SOURCE as templateContentSource,
} from './template-content.demo';
import {
  TooltipViewportFlipDemo,
  DEMO_LANG as viewportFlipLang,
  DEMO_SOURCE as viewportFlipSource,
} from './viewport-flip.demo';

export const tooltipDemos = {
  basic: defineDemo(TooltipBasicDemo, basicSource, basicLang),
  placement: defineDemo(TooltipPositionsDemo, positionsSource, positionsLang),
  customTrigger: defineDemo(TooltipCustomTriggerDemo, customTriggerSource, customTriggerLang),
  events: defineDemo(TooltipEventsDemo, eventsSource, eventsLang),
  delays: defineDemo(TooltipDelaysDemo, delaysSource, delaysLang),
  autoHide: defineDemo(TooltipAutoHideDemo, autoHideSource, autoHideLang),
  hideOnEscape: defineDemo(TooltipHideOnEscapeDemo, hideOnEscapeSource, hideOnEscapeLang),
  positionOffset: defineDemo(TooltipPositionOffsetDemo, positionOffsetSource, positionOffsetLang),
  templateContent: defineDemo(
    TooltipTemplateContentDemo,
    templateContentSource,
    templateContentLang,
  ),
  dynamicContent: defineDemo(TooltipDynamicContentDemo, dynamicContentSource, dynamicContentLang),
  longText: defineDemo(TooltipLongTextDemo, longTextSource, longTextLang),
  disabled: defineDemo(TooltipDisabledDemo, disabledSource, disabledLang),
  viewportFlip: defineDemo(TooltipViewportFlipDemo, viewportFlipSource, viewportFlipLang),
  customStyles: defineDemo(TooltipCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
