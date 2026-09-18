import { defineDemo } from '../define-demo';
import { LinkBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  LinkCustomIconDemo,
  DEMO_LANG as customIconLang,
  DEMO_SOURCE as customIconSource,
} from './custom-icon.demo';
import {
  LinkCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  LinkExternalLinksDemo,
  DEMO_LANG as externalLinksLang,
  DEMO_SOURCE as externalLinksSource,
} from './external-links.demo';
import {
  LinkIconPlacementDemo,
  DEMO_LANG as iconPlacementLang,
  DEMO_SOURCE as iconPlacementSource,
} from './icon-placement.demo';
import {
  LinkUnderlineAndOffsetDemo,
  DEMO_LANG as underlineAndOffsetLang,
  DEMO_SOURCE as underlineAndOffsetSource,
} from './underline-and-offset.demo';
import {
  LinkVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';

export const linkDemos = {
  basic: defineDemo(LinkBasicDemo, basicSource, basicLang),
  customIcon: defineDemo(LinkCustomIconDemo, customIconSource, customIconLang),
  customStyling: defineDemo(LinkCustomStylingDemo, customStylingSource, customStylingLang),
  externalLinks: defineDemo(LinkExternalLinksDemo, externalLinksSource, externalLinksLang),
  iconPlacement: defineDemo(LinkIconPlacementDemo, iconPlacementSource, iconPlacementLang),
  underlineAndOffset: defineDemo(
    LinkUnderlineAndOffsetDemo,
    underlineAndOffsetSource,
    underlineAndOffsetLang,
  ),
  variants: defineDemo(LinkVariantsDemo, variantsSource, variantsLang),
} as const;
