import { defineDemo } from '../define-demo';
import { TagGroupBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  TagGroupControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  TagGroupDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  TagGroupRemovableDemo,
  DEMO_LANG as removableLang,
  DEMO_SOURCE as removableSource,
} from './removable.demo';
import {
  TagGroupSelectionDemo,
  DEMO_LANG as selectionLang,
  DEMO_SOURCE as selectionSource,
} from './selection.demo';
import { TagGroupSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import {
  TagGroupVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  TagGroupWithErrorMessageDemo,
  DEMO_LANG as withErrorMessageLang,
  DEMO_SOURCE as withErrorMessageSource,
} from './with-error-message.demo';
import {
  TagGroupWithListDataDemo,
  DEMO_LANG as withListDataLang,
  DEMO_SOURCE as withListDataSource,
} from './with-list-data.demo';
import {
  TagGroupWithPrefixDemo,
  DEMO_LANG as withPrefixLang,
  DEMO_SOURCE as withPrefixSource,
} from './with-prefix.demo';

export const tagGroupDemos = {
  basic: defineDemo(TagGroupBasicDemo, basicSource, basicLang),
  sizes: defineDemo(TagGroupSizesDemo, sizesSource, sizesLang),
  variants: defineDemo(TagGroupVariantsDemo, variantsSource, variantsLang),
  disabled: defineDemo(TagGroupDisabledDemo, disabledSource, disabledLang),
  selectionModes: defineDemo(TagGroupSelectionDemo, selectionSource, selectionLang),
  controlled: defineDemo(TagGroupControlledDemo, controlledSource, controlledLang),
  withErrorMessage: defineDemo(
    TagGroupWithErrorMessageDemo,
    withErrorMessageSource,
    withErrorMessageLang,
  ),
  withListData: defineDemo(TagGroupWithListDataDemo, withListDataSource, withListDataLang),
  withPrefix: defineDemo(TagGroupWithPrefixDemo, withPrefixSource, withPrefixLang),
  withRemoveButton: defineDemo(TagGroupRemovableDemo, removableSource, removableLang),
} as const;
