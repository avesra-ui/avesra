import { defineDemo } from '../define-demo';
import { ListBoxBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  ListBoxControlledSelectionDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled-selection.demo';
import {
  ListBoxCustomCheckIconDemo,
  DEMO_LANG as customCheckIconLang,
  DEMO_SOURCE as customCheckIconSource,
} from './custom-check-icon.demo';
import {
  ListBoxCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  ListBoxMultipleSelectionDemo,
  DEMO_LANG as multiSelectLang,
  DEMO_SOURCE as multiSelectSource,
} from './multiple-selection.demo';
import {
  ListBoxWithDisabledItemsDemo,
  DEMO_LANG as withDisabledItemsLang,
  DEMO_SOURCE as withDisabledItemsSource,
} from './with-disabled-items.demo';
import {
  ListBoxWithSectionsDemo,
  DEMO_LANG as withSectionsLang,
  DEMO_SOURCE as withSectionsSource,
} from './with-sections.demo';

export const listBoxDemos = {
  basic: defineDemo(ListBoxBasicDemo, basicSource, basicLang),
  withSections: defineDemo(ListBoxWithSectionsDemo, withSectionsSource, withSectionsLang),
  multiSelect: defineDemo(ListBoxMultipleSelectionDemo, multiSelectSource, multiSelectLang),
  withDisabledItems: defineDemo(
    ListBoxWithDisabledItemsDemo,
    withDisabledItemsSource,
    withDisabledItemsLang,
  ),
  customCheckIcon: defineDemo(
    ListBoxCustomCheckIconDemo,
    customCheckIconSource,
    customCheckIconLang,
  ),
  controlled: defineDemo(ListBoxControlledSelectionDemo, controlledSource, controlledLang),
  customStyling: defineDemo(ListBoxCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
