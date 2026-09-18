import { defineDemo } from '../define-demo';
import {
  ModalBackdropVariantsDemo,
  DEMO_LANG as backdropVariantsLang,
  DEMO_SOURCE as backdropVariantsSource,
} from './backdrop-variants.demo';
import { ModalBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  ModalCloseMethodsDemo,
  DEMO_LANG as closeMethodsLang,
  DEMO_SOURCE as closeMethodsSource,
} from './close-methods.demo';
import {
  ModalControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  ModalCustomAnimationsDemo,
  DEMO_LANG as customAnimationsLang,
  DEMO_SOURCE as customAnimationsSource,
} from './custom-animations.demo';
import {
  ModalCustomBackdropDemo,
  DEMO_LANG as customBackdropLang,
  DEMO_SOURCE as customBackdropSource,
} from './custom-backdrop.demo';
import {
  ModalCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  ModalCustomTriggerDemo,
  DEMO_LANG as customTriggerLang,
  DEMO_SOURCE as customTriggerSource,
} from './custom-trigger.demo';
import {
  ModalDismissBehaviorDemo,
  DEMO_LANG as dismissBehaviorLang,
  DEMO_SOURCE as dismissBehaviorSource,
} from './dismiss-behavior.demo';
import {
  ModalPlacementsDemo,
  DEMO_LANG as placementsLang,
  DEMO_SOURCE as placementsSource,
} from './placements.demo';
import {
  ModalScrollBehaviorDemo,
  DEMO_LANG as scrollBehaviorLang,
  DEMO_SOURCE as scrollBehaviorSource,
} from './scroll-behavior.demo';
import {
  ModalServiceDemo,
  DEMO_LANG as serviceLang,
  DEMO_SOURCE as serviceSource,
} from './service.demo';
import { ModalSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import {
  ModalWithFormDemo,
  DEMO_LANG as withFormLang,
  DEMO_SOURCE as withFormSource,
} from './with-form.demo';

export const modalDemos = {
  basic: defineDemo(ModalBasicDemo, basicSource, basicLang),
  placements: defineDemo(ModalPlacementsDemo, placementsSource, placementsLang),
  backdropVariants: defineDemo(ModalBackdropVariantsDemo, backdropVariantsSource, backdropVariantsLang),
  sizes: defineDemo(ModalSizesDemo, sizesSource, sizesLang),
  customBackdrop: defineDemo(ModalCustomBackdropDemo, customBackdropSource, customBackdropLang),
  dismissBehavior: defineDemo(ModalDismissBehaviorDemo, dismissBehaviorSource, dismissBehaviorLang),
  closeMethods: defineDemo(ModalCloseMethodsDemo, closeMethodsSource, closeMethodsLang),
  customAnimations: defineDemo(ModalCustomAnimationsDemo, customAnimationsSource, customAnimationsLang),
  scrollBehavior: defineDemo(ModalScrollBehaviorDemo, scrollBehaviorSource, scrollBehaviorLang),
  controlled: defineDemo(ModalControlledDemo, controlledSource, controlledLang),
  withForm: defineDemo(ModalWithFormDemo, withFormSource, withFormLang),
  service: defineDemo(ModalServiceDemo, serviceSource, serviceLang),
  customTrigger: defineDemo(ModalCustomTriggerDemo, customTriggerSource, customTriggerLang),
  customStyling: defineDemo(ModalCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
