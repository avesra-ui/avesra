import { defineDemo } from '../define-demo';
import { DropdownBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { DropdownControlledDemo, DEMO_LANG as controlledLang, DEMO_SOURCE as controlledSource } from './controlled.demo';
import {
  DropdownControlledOpenStateDemo,
  DEMO_LANG as controlledOpenStateLang,
  DEMO_SOURCE as controlledOpenStateSource,
} from './controlled-open-state.demo';
import { DropdownCustomTriggerDemo, DEMO_LANG as customTriggerLang, DEMO_SOURCE as customTriggerSource } from './custom-trigger.demo';
import { DropdownMultipleSelectionDemo, DEMO_LANG as multipleSelectionLang, DEMO_SOURCE as multipleSelectionSource } from './multiple-selection.demo';
import {
  DropdownSingleCustomIndicatorDemo,
  DEMO_LANG as singleCustomIndicatorLang,
  DEMO_SOURCE as singleCustomIndicatorSource,
} from './single-custom-indicator.demo';
import { DropdownSingleSelectionDemo, DEMO_LANG as singleSelectionLang, DEMO_SOURCE as singleSelectionSource } from './single-selection.demo';
import { DropdownWithDescriptionsDemo, DEMO_LANG as withDescriptionsLang, DEMO_SOURCE as withDescriptionsSource } from './with-descriptions.demo';
import { DropdownWithDisabledItemsDemo, DEMO_LANG as withDisabledItemsLang, DEMO_SOURCE as withDisabledItemsSource } from './with-disabled-items.demo';
import { DropdownWithIconsDemo, DEMO_LANG as withIconsLang, DEMO_SOURCE as withIconsSource } from './with-icons.demo';
import {
  DropdownWithKeyboardShortcutsDemo,
  DEMO_LANG as withKeyboardShortcutsLang,
  DEMO_SOURCE as withKeyboardShortcutsSource,
} from './with-keyboard-shortcuts.demo';
import { DropdownWithSectionsDemo, DEMO_LANG as withSectionsLang, DEMO_SOURCE as withSectionsSource } from './with-sections.demo';

export const dropdownDemos = {
  basic: defineDemo(DropdownBasicDemo, basicSource, basicLang),
  controlled: defineDemo(DropdownControlledDemo, controlledSource, controlledLang),
  controlledOpenState: defineDemo(
    DropdownControlledOpenStateDemo,
    controlledOpenStateSource,
    controlledOpenStateLang,
  ),
  customTrigger: defineDemo(DropdownCustomTriggerDemo, customTriggerSource, customTriggerLang),
  multipleSelection: defineDemo(DropdownMultipleSelectionDemo, multipleSelectionSource, multipleSelectionLang),
  singleCustomIndicator: defineDemo(
    DropdownSingleCustomIndicatorDemo,
    singleCustomIndicatorSource,
    singleCustomIndicatorLang,
  ),
  singleSelection: defineDemo(DropdownSingleSelectionDemo, singleSelectionSource, singleSelectionLang),
  withDescriptions: defineDemo(DropdownWithDescriptionsDemo, withDescriptionsSource, withDescriptionsLang),
  withDisabledItems: defineDemo(DropdownWithDisabledItemsDemo, withDisabledItemsSource, withDisabledItemsLang),
  withIcons: defineDemo(DropdownWithIconsDemo, withIconsSource, withIconsLang),
  withKeyboardShortcuts: defineDemo(
    DropdownWithKeyboardShortcutsDemo,
    withKeyboardShortcutsSource,
    withKeyboardShortcutsLang,
  ),
  withSections: defineDemo(DropdownWithSectionsDemo, withSectionsSource, withSectionsLang),
} as const;
