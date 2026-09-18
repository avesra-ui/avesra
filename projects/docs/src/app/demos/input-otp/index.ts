import { defineDemo } from '../define-demo';
import { InputOtpBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  InputOtpControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  InputOtpCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  InputOtpDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  InputOtpFormExampleDemo,
  DEMO_LANG as formExampleLang,
  DEMO_SOURCE as formExampleSource,
} from './form-example.demo';
import {
  InputOtpFourDigitsDemo,
  DEMO_LANG as fourDigitsLang,
  DEMO_SOURCE as fourDigitsSource,
} from './four-digits.demo';
import {
  InputOtpOnCompleteDemo,
  DEMO_LANG as onCompleteLang,
  DEMO_SOURCE as onCompleteSource,
} from './on-complete.demo';
import {
  InputOtpOnSurfaceDemo,
  DEMO_LANG as onSurfaceLang,
  DEMO_SOURCE as onSurfaceSource,
} from './on-surface.demo';
import {
  InputOtpVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  InputOtpWithPatternDemo,
  DEMO_LANG as withPatternLang,
  DEMO_SOURCE as withPatternSource,
} from './with-pattern.demo';
import {
  InputOtpWithValidationDemo,
  DEMO_LANG as withValidationLang,
  DEMO_SOURCE as withValidationSource,
} from './with-validation.demo';

export const inputOtpDemos = {
  basic: defineDemo(InputOtpBasicDemo, basicSource, basicLang),
  fourDigits: defineDemo(InputOtpFourDigitsDemo, fourDigitsSource, fourDigitsLang),
  disabled: defineDemo(InputOtpDisabledDemo, disabledSource, disabledLang),
  withPattern: defineDemo(InputOtpWithPatternDemo, withPatternSource, withPatternLang),
  controlled: defineDemo(InputOtpControlledDemo, controlledSource, controlledLang),
  withValidation: defineDemo(InputOtpWithValidationDemo, withValidationSource, withValidationLang),
  onComplete: defineDemo(InputOtpOnCompleteDemo, onCompleteSource, onCompleteLang),
  formExample: defineDemo(InputOtpFormExampleDemo, formExampleSource, formExampleLang),
  variants: defineDemo(InputOtpVariantsDemo, variantsSource, variantsLang),
  onSurface: defineDemo(InputOtpOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  customStyling: defineDemo(InputOtpCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
