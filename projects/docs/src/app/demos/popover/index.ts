import { defineDemo } from '../define-demo';
import { PopoverBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  PopoverCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  PopoverInteractiveDemo,
  DEMO_LANG as interactiveLang,
  DEMO_SOURCE as interactiveSource,
} from './interactive.demo';
import {
  PopoverPlacementsDemo,
  DEMO_LANG as placementsLang,
  DEMO_SOURCE as placementsSource,
} from './placements.demo';
import {
  PopoverWithArrowDemo,
  DEMO_LANG as withArrowLang,
  DEMO_SOURCE as withArrowSource,
} from './with-arrow.demo';

export const popoverDemos = {
  basic: defineDemo(PopoverBasicDemo, basicSource, basicLang),
  withArrow: defineDemo(PopoverWithArrowDemo, withArrowSource, withArrowLang),
  placements: defineDemo(PopoverPlacementsDemo, placementsSource, placementsLang),
  interactive: defineDemo(PopoverInteractiveDemo, interactiveSource, interactiveLang),
  customStyling: defineDemo(PopoverCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
