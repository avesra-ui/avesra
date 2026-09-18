import { defineDemo } from '../define-demo';
import { DrawerBackdropVariantsDemo, DEMO_LANG as backdropVariantsLang, DEMO_SOURCE as backdropVariantsSource } from './backdrop-variants.demo';
import { DrawerBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { DrawerControlledDemo, DEMO_LANG as controlledLang, DEMO_SOURCE as controlledSource } from './controlled.demo';
import {
  DrawerCustomBackdropDemo,
  DEMO_LANG as customBackdropLang,
  DEMO_SOURCE as customBackdropSource,
} from './custom-backdrop.demo';
import {
  DrawerCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import { DrawerNavigationDrawerDemo, DEMO_LANG as navigationDrawerLang, DEMO_SOURCE as navigationDrawerSource } from './navigation-drawer.demo';
import { DrawerNonDismissableDemo, DEMO_LANG as nonDismissableLang, DEMO_SOURCE as nonDismissableSource } from './non-dismissable.demo';
import { DrawerPlacementsDemo, DEMO_LANG as placementsLang, DEMO_SOURCE as placementsSource } from './placements.demo';
import { DrawerScrollableContentDemo, DEMO_LANG as scrollableContentLang, DEMO_SOURCE as scrollableContentSource } from './scrollable-content.demo';
import { DrawerServiceDemo, DEMO_LANG as serviceLang, DEMO_SOURCE as serviceSource } from './service.demo';
import { DrawerWithFormDemo, DEMO_LANG as withFormLang, DEMO_SOURCE as withFormSource } from './with-form.demo';

export const drawerDemos = {
  backdropVariants: defineDemo(DrawerBackdropVariantsDemo, backdropVariantsSource, backdropVariantsLang),
  basic: defineDemo(DrawerBasicDemo, basicSource, basicLang),
  controlled: defineDemo(DrawerControlledDemo, controlledSource, controlledLang),
  customBackdrop: defineDemo(DrawerCustomBackdropDemo, customBackdropSource, customBackdropLang),
  customStyling: defineDemo(DrawerCustomStylingDemo, customStylingSource, customStylingLang),
  navigationDrawer: defineDemo(DrawerNavigationDrawerDemo, navigationDrawerSource, navigationDrawerLang),
  nonDismissable: defineDemo(DrawerNonDismissableDemo, nonDismissableSource, nonDismissableLang),
  placements: defineDemo(DrawerPlacementsDemo, placementsSource, placementsLang),
  scrollableContent: defineDemo(DrawerScrollableContentDemo, scrollableContentSource, scrollableContentLang),
  service: defineDemo(DrawerServiceDemo, serviceSource, serviceLang),
  withForm: defineDemo(DrawerWithFormDemo, withFormSource, withFormLang),
} as const;
