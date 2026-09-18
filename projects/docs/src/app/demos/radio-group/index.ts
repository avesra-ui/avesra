import { defineDemo } from '../define-demo';
import { RadioGroupBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  RadioGroupControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  RadioGroupCustomIndicatorDemo,
  DEMO_LANG as customIndicatorLang,
  DEMO_SOURCE as customIndicatorSource,
} from './custom-indicator.demo';
import {
  RadioGroupCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  RadioGroupDeliveryAndPaymentDemo,
  DEMO_LANG as deliveryAndPaymentLang,
  DEMO_SOURCE as deliveryAndPaymentSource,
} from './delivery-and-payment.demo';
import {
  RadioGroupDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  RadioGroupHorizontalDemo,
  DEMO_LANG as horizontalLang,
  DEMO_SOURCE as horizontalSource,
} from './horizontal.demo';
import {
  RadioGroupOnSurfaceDemo,
  DEMO_LANG as onSurfaceLang,
  DEMO_SOURCE as onSurfaceSource,
} from './on-surface.demo';
import {
  RadioGroupReactiveFormDemo,
  DEMO_LANG as reactiveFormLang,
  DEMO_SOURCE as reactiveFormSource,
} from './reactive-form.demo';
import {
  RadioGroupUncontrolledDemo,
  DEMO_LANG as uncontrolledLang,
  DEMO_SOURCE as uncontrolledSource,
} from './uncontrolled.demo';
import {
  RadioGroupValidationDemo,
  DEMO_LANG as validationLang,
  DEMO_SOURCE as validationSource,
} from './validation.demo';
import {
  RadioGroupVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';

export const radioGroupDemos = {
  basic: defineDemo(RadioGroupBasicDemo, basicSource, basicLang),
  customIndicator: defineDemo(
    RadioGroupCustomIndicatorDemo,
    customIndicatorSource,
    customIndicatorLang,
  ),
  horizontal: defineDemo(RadioGroupHorizontalDemo, horizontalSource, horizontalLang),
  controlled: defineDemo(RadioGroupControlledDemo, controlledSource, controlledLang),
  uncontrolled: defineDemo(RadioGroupUncontrolledDemo, uncontrolledSource, uncontrolledLang),
  reactiveForm: defineDemo(RadioGroupReactiveFormDemo, reactiveFormSource, reactiveFormLang),
  validation: defineDemo(RadioGroupValidationDemo, validationSource, validationLang),
  disabled: defineDemo(RadioGroupDisabledDemo, disabledSource, disabledLang),
  variants: defineDemo(RadioGroupVariantsDemo, variantsSource, variantsLang),
  onSurface: defineDemo(RadioGroupOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  deliveryAndPayment: defineDemo(
    RadioGroupDeliveryAndPaymentDemo,
    deliveryAndPaymentSource,
    deliveryAndPaymentLang,
  ),
  customStyling: defineDemo(RadioGroupCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
