import { defineDemo } from '../define-demo';
import { CheckboxGroupBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  CheckboxGroupControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  CheckboxGroupDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  CheckboxGroupFeaturesAndAddOnsDemo,
  DEMO_LANG as featuresAndAddOnsLang,
  DEMO_SOURCE as featuresAndAddOnsSource,
} from './features-and-addons.demo';
import {
  CheckboxGroupIndeterminateDemo,
  DEMO_LANG as indeterminateLang,
  DEMO_SOURCE as indeterminateSource,
} from './indeterminate.demo';
import { CheckboxGroupOnSurfaceDemo, DEMO_LANG as onSurfaceLang, DEMO_SOURCE as onSurfaceSource } from './on-surface.demo';
import { CheckboxGroupReactiveFormDemo, DEMO_LANG as reactiveFormLang, DEMO_SOURCE as reactiveFormSource } from './reactive-form.demo';
import { CheckboxGroupValidationDemo, DEMO_LANG as validationLang, DEMO_SOURCE as validationSource } from './validation.demo';
import {
  CheckboxGroupWithCustomIndicatorDemo,
  DEMO_LANG as withCustomIndicatorLang,
  DEMO_SOURCE as withCustomIndicatorSource,
} from './with-custom-indicator.demo';

export const checkboxGroupDemos = {
  basic: defineDemo(CheckboxGroupBasicDemo, basicSource, basicLang),
  onSurface: defineDemo(CheckboxGroupOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  withCustomIndicator: defineDemo(
    CheckboxGroupWithCustomIndicatorDemo,
    withCustomIndicatorSource,
    withCustomIndicatorLang,
  ),
  indeterminate: defineDemo(CheckboxGroupIndeterminateDemo, indeterminateSource, indeterminateLang),
  controlled: defineDemo(CheckboxGroupControlledDemo, controlledSource, controlledLang),
  validation: defineDemo(CheckboxGroupValidationDemo, validationSource, validationLang),
  disabled: defineDemo(CheckboxGroupDisabledDemo, disabledSource, disabledLang),
  featuresAndAddOns: defineDemo(
    CheckboxGroupFeaturesAndAddOnsDemo,
    featuresAndAddOnsSource,
    featuresAndAddOnsLang,
  ),
  reactiveForm: defineDemo(CheckboxGroupReactiveFormDemo, reactiveFormSource, reactiveFormLang),
} as const;
