import { defineDemo } from '../define-demo';
import { DateFieldBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  DateFieldControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  DateFieldCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  DateFieldDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  DateFieldFormExampleDemo,
  DEMO_LANG as formExampleLang,
  DEMO_SOURCE as formExampleSource,
} from './form-example.demo';
import {
  DateFieldFullWidthDemo,
  DEMO_LANG as fullWidthLang,
  DEMO_SOURCE as fullWidthSource,
} from './full-width.demo';
import {
  DateFieldGranularityDemo,
  DEMO_LANG as granularityLang,
  DEMO_SOURCE as granularitySource,
} from './granularity.demo';
import {
  DateFieldInvalidDemo,
  DEMO_LANG as invalidLang,
  DEMO_SOURCE as invalidSource,
} from './invalid.demo';
import {
  DateFieldOnSurfaceDemo,
  DEMO_LANG as onSurfaceLang,
  DEMO_SOURCE as onSurfaceSource,
} from './on-surface.demo';
import {
  DateFieldRequiredDemo,
  DEMO_LANG as requiredLang,
  DEMO_SOURCE as requiredSource,
} from './required.demo';
import {
  DateFieldVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  DateFieldWithDescriptionDemo,
  DEMO_LANG as withDescriptionLang,
  DEMO_SOURCE as withDescriptionSource,
} from './with-description.demo';
import {
  DateFieldWithPrefixAndSuffixDemo,
  DEMO_LANG as withPrefixAndSuffixLang,
  DEMO_SOURCE as withPrefixAndSuffixSource,
} from './with-prefix-and-suffix.demo';
import {
  DateFieldWithPrefixIconDemo,
  DEMO_LANG as withPrefixIconLang,
  DEMO_SOURCE as withPrefixIconSource,
} from './with-prefix-icon.demo';
import {
  DateFieldWithSuffixIconDemo,
  DEMO_LANG as withSuffixIconLang,
  DEMO_SOURCE as withSuffixIconSource,
} from './with-suffix-icon.demo';
import {
  DateFieldWithValidationDemo,
  DEMO_LANG as withValidationLang,
  DEMO_SOURCE as withValidationSource,
} from './with-validation.demo';

export const dateFieldDemos = {
  basic: defineDemo(DateFieldBasicDemo, basicSource, basicLang),
  withPrefixIcon: defineDemo(DateFieldWithPrefixIconDemo, withPrefixIconSource, withPrefixIconLang),
  withSuffixIcon: defineDemo(DateFieldWithSuffixIconDemo, withSuffixIconSource, withSuffixIconLang),
  withPrefixAndSuffix: defineDemo(
    DateFieldWithPrefixAndSuffixDemo,
    withPrefixAndSuffixSource,
    withPrefixAndSuffixLang,
  ),
  variants: defineDemo(DateFieldVariantsDemo, variantsSource, variantsLang),
  onSurface: defineDemo(DateFieldOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  withDescription: defineDemo(
    DateFieldWithDescriptionDemo,
    withDescriptionSource,
    withDescriptionLang,
  ),
  required: defineDemo(DateFieldRequiredDemo, requiredSource, requiredLang),
  disabled: defineDemo(DateFieldDisabledDemo, disabledSource, disabledLang),
  fullWidth: defineDemo(DateFieldFullWidthDemo, fullWidthSource, fullWidthLang),
  invalid: defineDemo(DateFieldInvalidDemo, invalidSource, invalidLang),
  granularity: defineDemo(DateFieldGranularityDemo, granularitySource, granularityLang),
  controlled: defineDemo(DateFieldControlledDemo, controlledSource, controlledLang),
  formExample: defineDemo(DateFieldFormExampleDemo, formExampleSource, formExampleLang),
  withValidation: defineDemo(
    DateFieldWithValidationDemo,
    withValidationSource,
    withValidationLang,
  ),
  customStyles: defineDemo(DateFieldCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
