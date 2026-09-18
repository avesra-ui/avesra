import { defineDemo } from '../define-demo';
import { AlertDialogBackdropVariantsDemo, DEMO_LANG as backdropVariantsLang, DEMO_SOURCE as backdropVariantsSource } from './backdrop-variants.demo';
import { AlertDialogBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { AlertDialogCloseMethodsDemo, DEMO_LANG as closeMethodsLang, DEMO_SOURCE as closeMethodsSource } from './close-methods.demo';
import { AlertDialogControlledDemo, DEMO_LANG as controlledLang, DEMO_SOURCE as controlledSource } from './controlled.demo';
import { AlertDialogCustomAnimationsDemo, DEMO_LANG as customAnimationsLang, DEMO_SOURCE as customAnimationsSource } from './custom-animations.demo';
import { AlertDialogCustomBackdropDemo, DEMO_LANG as customBackdropLang, DEMO_SOURCE as customBackdropSource } from './custom-backdrop.demo';
import { AlertDialogCustomIconDemo, DEMO_LANG as customIconLang, DEMO_SOURCE as customIconSource } from './custom-icon.demo';
import { AlertDialogCustomStylesDemo, DEMO_LANG as customStylesLang, DEMO_SOURCE as customStylesSource } from './custom-styles.demo';
import { AlertDialogCustomTriggerDemo, DEMO_LANG as customTriggerLang, DEMO_SOURCE as customTriggerSource } from './custom-trigger.demo';
import { AlertDialogDismissBehaviorDemo, DEMO_LANG as dismissBehaviorLang, DEMO_SOURCE as dismissBehaviorSource } from './dismiss-behavior.demo';
import { AlertDialogPlacementsDemo, DEMO_LANG as placementsLang, DEMO_SOURCE as placementsSource } from './placements.demo';
import { AlertDialogScrollBehaviorDemo, DEMO_LANG as scrollBehaviorLang, DEMO_SOURCE as scrollBehaviorSource } from './scroll-behavior.demo';
import { AlertDialogServiceDemo, DEMO_LANG as serviceLang, DEMO_SOURCE as serviceSource } from './service.demo';
import { AlertDialogSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import { AlertDialogStackedFooterActionsDemo, DEMO_LANG as stackedFooterActionsLang, DEMO_SOURCE as stackedFooterActionsSource } from './stacked-footer-actions.demo';
import { AlertDialogStatusesDemo, DEMO_LANG as statusesLang, DEMO_SOURCE as statusesSource } from './statuses.demo';

export const alertDialogDemos = {
  backdropVariants: defineDemo(AlertDialogBackdropVariantsDemo, backdropVariantsSource, backdropVariantsLang),
  basic: defineDemo(AlertDialogBasicDemo, basicSource, basicLang),
  closeMethods: defineDemo(AlertDialogCloseMethodsDemo, closeMethodsSource, closeMethodsLang),
  controlled: defineDemo(AlertDialogControlledDemo, controlledSource, controlledLang),
  customAnimations: defineDemo(AlertDialogCustomAnimationsDemo, customAnimationsSource, customAnimationsLang),
  customBackdrop: defineDemo(AlertDialogCustomBackdropDemo, customBackdropSource, customBackdropLang),
  customIcon: defineDemo(AlertDialogCustomIconDemo, customIconSource, customIconLang),
  customStyles: defineDemo(AlertDialogCustomStylesDemo, customStylesSource, customStylesLang),
  customTrigger: defineDemo(AlertDialogCustomTriggerDemo, customTriggerSource, customTriggerLang),
  dismissBehavior: defineDemo(AlertDialogDismissBehaviorDemo, dismissBehaviorSource, dismissBehaviorLang),
  placements: defineDemo(AlertDialogPlacementsDemo, placementsSource, placementsLang),
  scrollBehavior: defineDemo(AlertDialogScrollBehaviorDemo, scrollBehaviorSource, scrollBehaviorLang),
  service: defineDemo(AlertDialogServiceDemo, serviceSource, serviceLang),
  sizes: defineDemo(AlertDialogSizesDemo, sizesSource, sizesLang),
  stackedFooterActions: defineDemo(AlertDialogStackedFooterActionsDemo, stackedFooterActionsSource, stackedFooterActionsLang),
  statuses: defineDemo(AlertDialogStatusesDemo, statusesSource, statusesLang),
} as const;
