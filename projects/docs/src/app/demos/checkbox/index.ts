import { defineDemo } from '../define-demo';
import { CheckboxBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  CheckboxControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  CheckboxCustomIndicatorDemo,
  DEMO_LANG as customIndicatorLang,
  DEMO_SOURCE as customIndicatorSource,
} from './custom-indicator.demo';
import {
  CheckboxDefaultSelectedDemo,
  DEMO_LANG as defaultSelectedLang,
  DEMO_SOURCE as defaultSelectedSource,
} from './default-selected.demo';
import { CheckboxDisabledDemo, DEMO_LANG as disabledLang, DEMO_SOURCE as disabledSource } from './disabled.demo';
import {
  CheckboxExternalLabelDemo,
  DEMO_LANG as externalLabelLang,
  DEMO_SOURCE as externalLabelSource,
} from './external-label.demo';
import {
  CheckboxIndeterminateDemo,
  DEMO_LANG as indeterminateLang,
  DEMO_SOURCE as indeterminateSource,
} from './indeterminate.demo';
import {
  CheckboxInvalidDemo,
  DEMO_LANG as invalidLang,
  DEMO_SOURCE as invalidSource,
} from './invalid.demo';
import {
  CheckboxReactiveFormDemo,
  DEMO_LANG as reactiveFormLang,
  DEMO_SOURCE as reactiveFormSource,
} from './reactive-form.demo';
import {
  CheckboxReactiveFormIndeterminateDemo,
  DEMO_LANG as reactiveFormIndeterminateLang,
  DEMO_SOURCE as reactiveFormIndeterminateSource,
} from './reactive-form-indeterminate.demo';
import { CheckboxStatesDemo, DEMO_LANG as statesLang, DEMO_SOURCE as statesSource } from './states.demo';
import {
  CheckboxValidationDemo,
  DEMO_LANG as validationLang,
  DEMO_SOURCE as validationSource,
} from './validation.demo';
import { CheckboxVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';
import {
  CheckboxWithDescriptionDemo,
  DEMO_LANG as withDescriptionLang,
  DEMO_SOURCE as withDescriptionSource,
} from './with-description.demo';

export const checkboxDemos = {
  basic: defineDemo(CheckboxBasicDemo, basicSource, basicLang),
  variants: defineDemo(CheckboxVariantsDemo, variantsSource, variantsLang),
  disabled: defineDemo(CheckboxDisabledDemo, disabledSource, disabledLang),
  externalLabel: defineDemo(CheckboxExternalLabelDemo, externalLabelSource, externalLabelLang),
  withDescription: defineDemo(CheckboxWithDescriptionDemo, withDescriptionSource, withDescriptionLang),
  defaultSelected: defineDemo(CheckboxDefaultSelectedDemo, defaultSelectedSource, defaultSelectedLang),
  invalid: defineDemo(CheckboxInvalidDemo, invalidSource, invalidLang),
  controlled: defineDemo(CheckboxControlledDemo, controlledSource, controlledLang),
  indeterminate: defineDemo(CheckboxIndeterminateDemo, indeterminateSource, indeterminateLang),
  reactiveForm: defineDemo(CheckboxReactiveFormDemo, reactiveFormSource, reactiveFormLang),
  reactiveFormIndeterminate: defineDemo(
    CheckboxReactiveFormIndeterminateDemo,
    reactiveFormIndeterminateSource,
    reactiveFormIndeterminateLang,
  ),
  validation: defineDemo(CheckboxValidationDemo, validationSource, validationLang),
  customIndicator: defineDemo(CheckboxCustomIndicatorDemo, customIndicatorSource, customIndicatorLang),
  states: defineDemo(CheckboxStatesDemo, statesSource, statesLang),
} as const;
