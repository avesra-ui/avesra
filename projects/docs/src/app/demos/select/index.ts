import { defineDemo } from '../define-demo';
import { SelectBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  SelectControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  SelectControlledMultipleDemo,
  DEMO_LANG as controlledMultipleLang,
  DEMO_SOURCE as controlledMultipleSource,
} from './controlled-multiple.demo';
import {
  SelectControlledOpenStateDemo,
  DEMO_LANG as controlledOpenStateLang,
  DEMO_SOURCE as controlledOpenStateSource,
} from './controlled-open-state.demo';
import {
  SelectCustomIndicatorDemo,
  DEMO_LANG as customIndicatorLang,
  DEMO_SOURCE as customIndicatorSource,
} from './custom-indicator.demo';
import {
  SelectCustomValueDemo,
  DEMO_LANG as customValueLang,
  DEMO_SOURCE as customValueSource,
} from './custom-value.demo';
import {
  SelectDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  SelectFullWidthDemo,
  DEMO_LANG as fullWidthLang,
  DEMO_SOURCE as fullWidthSource,
} from './full-width.demo';
import {
  SelectInSurfaceDemo,
  DEMO_LANG as inSurfaceLang,
  DEMO_SOURCE as inSurfaceSource,
} from './in-surface.demo';
import {
  SelectMultipleDemo,
  DEMO_LANG as multipleLang,
  DEMO_SOURCE as multipleSource,
} from './multiple.demo';
import {
  SelectRequiredDemo,
  DEMO_LANG as requiredLang,
  DEMO_SOURCE as requiredSource,
} from './required.demo';
import {
  SelectVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  SelectWithDescriptionDemo,
  DEMO_LANG as withDescriptionLang,
  DEMO_SOURCE as withDescriptionSource,
} from './with-description.demo';
import {
  SelectWithDisabledOptionsDemo,
  DEMO_LANG as withDisabledOptionsLang,
  DEMO_SOURCE as withDisabledOptionsSource,
} from './with-disabled-options.demo';
import {
  SelectWithSectionsDemo,
  DEMO_LANG as withSectionsLang,
  DEMO_SOURCE as withSectionsSource,
} from './with-sections.demo';

export const selectDemos = {
  basic: defineDemo(SelectBasicDemo, basicSource, basicLang),
  withDescription: defineDemo(
    SelectWithDescriptionDemo,
    withDescriptionSource,
    withDescriptionLang,
  ),
  multiple: defineDemo(SelectMultipleDemo, multipleSource, multipleLang),
  withSections: defineDemo(SelectWithSectionsDemo, withSectionsSource, withSectionsLang),
  withDisabledOptions: defineDemo(
    SelectWithDisabledOptionsDemo,
    withDisabledOptionsSource,
    withDisabledOptionsLang,
  ),
  customIndicator: defineDemo(
    SelectCustomIndicatorDemo,
    customIndicatorSource,
    customIndicatorLang,
  ),
  required: defineDemo(SelectRequiredDemo, requiredSource, requiredLang),
  fullWidth: defineDemo(SelectFullWidthDemo, fullWidthSource, fullWidthLang),
  variants: defineDemo(SelectVariantsDemo, variantsSource, variantsLang),
  inSurface: defineDemo(SelectInSurfaceDemo, inSurfaceSource, inSurfaceLang),
  customValue: defineDemo(SelectCustomValueDemo, customValueSource, customValueLang),
  controlled: defineDemo(SelectControlledDemo, controlledSource, controlledLang),
  controlledMultiple: defineDemo(
    SelectControlledMultipleDemo,
    controlledMultipleSource,
    controlledMultipleLang,
  ),
  controlledOpenState: defineDemo(
    SelectControlledOpenStateDemo,
    controlledOpenStateSource,
    controlledOpenStateLang,
  ),
  disabled: defineDemo(SelectDisabledDemo, disabledSource, disabledLang),
} as const;
