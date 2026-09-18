import { defineDemo } from '../define-demo';
import { TimeFieldBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  TimeFieldControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  TimeFieldCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  TimeFieldDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  TimeFieldFormExampleDemo,
  DEMO_LANG as formExampleLang,
  DEMO_SOURCE as formExampleSource,
} from './form-example.demo';
import {
  TimeFieldFullWidthDemo,
  DEMO_LANG as fullWidthLang,
  DEMO_SOURCE as fullWidthSource,
} from './full-width.demo';
import {
  TimeFieldHourCycleDemo,
  DEMO_LANG as hourCycleLang,
  DEMO_SOURCE as hourCycleSource,
} from './hour-cycle.demo';
import {
  TimeFieldInvalidDemo,
  DEMO_LANG as invalidLang,
  DEMO_SOURCE as invalidSource,
} from './invalid.demo';
import {
  TimeFieldOnSurfaceDemo,
  DEMO_LANG as onSurfaceLang,
  DEMO_SOURCE as onSurfaceSource,
} from './on-surface.demo';
import {
  TimeFieldRequiredDemo,
  DEMO_LANG as requiredLang,
  DEMO_SOURCE as requiredSource,
} from './required.demo';
import {
  TimeFieldVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  TimeFieldWithDescriptionDemo,
  DEMO_LANG as withDescriptionLang,
  DEMO_SOURCE as withDescriptionSource,
} from './with-description.demo';
import {
  TimeFieldWithPrefixAndSuffixDemo,
  DEMO_LANG as withPrefixAndSuffixLang,
  DEMO_SOURCE as withPrefixAndSuffixSource,
} from './with-prefix-and-suffix.demo';
import {
  TimeFieldWithPrefixIconDemo,
  DEMO_LANG as withPrefixIconLang,
  DEMO_SOURCE as withPrefixIconSource,
} from './with-prefix-icon.demo';
import {
  TimeFieldWithSuffixIconDemo,
  DEMO_LANG as withSuffixIconLang,
  DEMO_SOURCE as withSuffixIconSource,
} from './with-suffix-icon.demo';
import {
  TimeFieldWithValidationDemo,
  DEMO_LANG as withValidationLang,
  DEMO_SOURCE as withValidationSource,
} from './with-validation.demo';

export const timeFieldDemos = {
  basic: defineDemo(TimeFieldBasicDemo, basicSource, basicLang),
  withPrefixIcon: defineDemo(TimeFieldWithPrefixIconDemo, withPrefixIconSource, withPrefixIconLang),
  withSuffixIcon: defineDemo(TimeFieldWithSuffixIconDemo, withSuffixIconSource, withSuffixIconLang),
  withPrefixAndSuffix: defineDemo(
    TimeFieldWithPrefixAndSuffixDemo,
    withPrefixAndSuffixSource,
    withPrefixAndSuffixLang,
  ),
  variants: defineDemo(TimeFieldVariantsDemo, variantsSource, variantsLang),
  onSurface: defineDemo(TimeFieldOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  withDescription: defineDemo(
    TimeFieldWithDescriptionDemo,
    withDescriptionSource,
    withDescriptionLang,
  ),
  required: defineDemo(TimeFieldRequiredDemo, requiredSource, requiredLang),
  disabled: defineDemo(TimeFieldDisabledDemo, disabledSource, disabledLang),
  fullWidth: defineDemo(TimeFieldFullWidthDemo, fullWidthSource, fullWidthLang),
  hourCycle: defineDemo(TimeFieldHourCycleDemo, hourCycleSource, hourCycleLang),
  invalid: defineDemo(TimeFieldInvalidDemo, invalidSource, invalidLang),
  controlled: defineDemo(TimeFieldControlledDemo, controlledSource, controlledLang),
  formExample: defineDemo(TimeFieldFormExampleDemo, formExampleSource, formExampleLang),
  withValidation: defineDemo(
    TimeFieldWithValidationDemo,
    withValidationSource,
    withValidationLang,
  ),
  customStyles: defineDemo(TimeFieldCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
