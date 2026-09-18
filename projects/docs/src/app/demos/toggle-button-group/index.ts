import { defineDemo } from '../define-demo';
import {
  ToggleButtonGroupAttachedDemo,
  DEMO_LANG as attachedLang,
  DEMO_SOURCE as attachedSource,
} from './attached.demo';
import {
  ToggleButtonGroupBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  ToggleButtonGroupControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  ToggleButtonGroupCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  ToggleButtonGroupDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  ToggleButtonGroupDisallowEmptySelectionDemo,
  DEMO_LANG as disallowEmptySelectionLang,
  DEMO_SOURCE as disallowEmptySelectionSource,
} from './disallow-empty-selection.demo';
import {
  ToggleButtonGroupFullWidthDemo,
  DEMO_LANG as fullWidthLang,
  DEMO_SOURCE as fullWidthSource,
} from './full-width.demo';
import {
  ToggleButtonGroupOrientationDemo,
  DEMO_LANG as orientationLang,
  DEMO_SOURCE as orientationSource,
} from './orientation.demo';
import {
  ToggleButtonGroupSelectionModeDemo,
  DEMO_LANG as selectionModeLang,
  DEMO_SOURCE as selectionModeSource,
} from './selection-mode.demo';
import {
  ToggleButtonGroupSizesDemo,
  DEMO_LANG as sizesLang,
  DEMO_SOURCE as sizesSource,
} from './sizes.demo';
import {
  ToggleButtonGroupWithoutSeparatorDemo,
  DEMO_LANG as withoutSeparatorLang,
  DEMO_SOURCE as withoutSeparatorSource,
} from './without-separator.demo';

export const toggleButtonGroupDemos = {
  basic: defineDemo(ToggleButtonGroupBasicDemo, basicSource, basicLang),
  sizes: defineDemo(ToggleButtonGroupSizesDemo, sizesSource, sizesLang),
  orientation: defineDemo(ToggleButtonGroupOrientationDemo, orientationSource, orientationLang),
  fullWidth: defineDemo(ToggleButtonGroupFullWidthDemo, fullWidthSource, fullWidthLang),
  disabled: defineDemo(ToggleButtonGroupDisabledDemo, disabledSource, disabledLang),
  withoutSeparator: defineDemo(
    ToggleButtonGroupWithoutSeparatorDemo,
    withoutSeparatorSource,
    withoutSeparatorLang,
  ),
  detached: defineDemo(ToggleButtonGroupAttachedDemo, attachedSource, attachedLang),
  selectionMode: defineDemo(
    ToggleButtonGroupSelectionModeDemo,
    selectionModeSource,
    selectionModeLang,
  ),
  controlled: defineDemo(ToggleButtonGroupControlledDemo, controlledSource, controlledLang),
  disallowEmptySelection: defineDemo(
    ToggleButtonGroupDisallowEmptySelectionDemo,
    disallowEmptySelectionSource,
    disallowEmptySelectionLang,
  ),
  customStyles: defineDemo(
    ToggleButtonGroupCustomStylesDemo,
    customStylesSource,
    customStylesLang,
  ),
} as const;
