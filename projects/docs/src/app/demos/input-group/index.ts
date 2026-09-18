import { defineDemo } from '../define-demo';
import {
  InputGroupBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  InputGroupCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  InputGroupDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  InputGroupFullWidthDemo,
  DEMO_LANG as fullWidthLang,
  DEMO_SOURCE as fullWidthSource,
} from './full-width.demo';
import {
  InputGroupInvalidDemo,
  DEMO_LANG as invalidLang,
  DEMO_SOURCE as invalidSource,
} from './invalid.demo';
import {
  InputGroupOnSurfaceDemo,
  DEMO_LANG as onSurfaceLang,
  DEMO_SOURCE as onSurfaceSource,
} from './on-surface.demo';
import {
  InputGroupPasswordWithToggleDemo,
  DEMO_LANG as passwordWithToggleLang,
  DEMO_SOURCE as passwordWithToggleSource,
} from './password-with-toggle.demo';
import {
  InputGroupRequiredDemo,
  DEMO_LANG as requiredLang,
  DEMO_SOURCE as requiredSource,
} from './required.demo';
import {
  InputGroupVariantsDemo,
  DEMO_LANG as variantsLang,
  DEMO_SOURCE as variantsSource,
} from './variants.demo';
import {
  InputGroupWithBadgeSuffixDemo,
  DEMO_LANG as withBadgeSuffixLang,
  DEMO_SOURCE as withBadgeSuffixSource,
} from './with-badge-suffix.demo';
import {
  InputGroupWithCopySuffixDemo,
  DEMO_LANG as withCopySuffixLang,
  DEMO_SOURCE as withCopySuffixSource,
} from './with-copy-suffix.demo';
import {
  InputGroupWithIconPrefixAndCopySuffixDemo,
  DEMO_LANG as withIconPrefixAndCopySuffixLang,
  DEMO_SOURCE as withIconPrefixAndCopySuffixSource,
} from './with-icon-prefix-and-copy-suffix.demo';
import {
  InputGroupWithIconPrefixAndTextSuffixDemo,
  DEMO_LANG as withIconPrefixAndTextSuffixLang,
  DEMO_SOURCE as withIconPrefixAndTextSuffixSource,
} from './with-icon-prefix-and-text-suffix.demo';
import {
  InputGroupWithKeyboardShortcutDemo,
  DEMO_LANG as withKeyboardShortcutLang,
  DEMO_SOURCE as withKeyboardShortcutSource,
} from './with-keyboard-shortcut.demo';
import {
  InputGroupWithLoadingSuffixDemo,
  DEMO_LANG as withLoadingSuffixLang,
  DEMO_SOURCE as withLoadingSuffixSource,
} from './with-loading-suffix.demo';
import {
  InputGroupWithPrefixAndSuffixDemo,
  DEMO_LANG as withPrefixAndSuffixLang,
  DEMO_SOURCE as withPrefixAndSuffixSource,
} from './with-prefix-and-suffix.demo';
import {
  InputGroupWithPrefixIconDemo,
  DEMO_LANG as withPrefixIconLang,
  DEMO_SOURCE as withPrefixIconSource,
} from './with-prefix-icon.demo';
import {
  InputGroupWithSuffixIconDemo,
  DEMO_LANG as withSuffixIconLang,
  DEMO_SOURCE as withSuffixIconSource,
} from './with-suffix-icon.demo';
import {
  InputGroupWithTextPrefixDemo,
  DEMO_LANG as withTextPrefixLang,
  DEMO_SOURCE as withTextPrefixSource,
} from './with-text-prefix.demo';
import {
  InputGroupWithTextSuffixDemo,
  DEMO_LANG as withTextSuffixLang,
  DEMO_SOURCE as withTextSuffixSource,
} from './with-text-suffix.demo';
import {
  InputGroupWithTextareaDemo,
  DEMO_LANG as withTextareaLang,
  DEMO_SOURCE as withTextareaSource,
} from './with-textarea.demo';

export const inputGroupDemos = {
  basic: defineDemo(InputGroupBasicDemo, basicSource, basicLang),
  withPrefixIcon: defineDemo(InputGroupWithPrefixIconDemo, withPrefixIconSource, withPrefixIconLang),
  withSuffixIcon: defineDemo(InputGroupWithSuffixIconDemo, withSuffixIconSource, withSuffixIconLang),
  withPrefixAndSuffix: defineDemo(
    InputGroupWithPrefixAndSuffixDemo,
    withPrefixAndSuffixSource,
    withPrefixAndSuffixLang,
  ),
  withTextPrefix: defineDemo(InputGroupWithTextPrefixDemo, withTextPrefixSource, withTextPrefixLang),
  withTextSuffix: defineDemo(InputGroupWithTextSuffixDemo, withTextSuffixSource, withTextSuffixLang),
  withIconPrefixAndTextSuffix: defineDemo(
    InputGroupWithIconPrefixAndTextSuffixDemo,
    withIconPrefixAndTextSuffixSource,
    withIconPrefixAndTextSuffixLang,
  ),
  withCopySuffix: defineDemo(InputGroupWithCopySuffixDemo, withCopySuffixSource, withCopySuffixLang),
  withIconPrefixAndCopySuffix: defineDemo(
    InputGroupWithIconPrefixAndCopySuffixDemo,
    withIconPrefixAndCopySuffixSource,
    withIconPrefixAndCopySuffixLang,
  ),
  passwordWithToggle: defineDemo(
    InputGroupPasswordWithToggleDemo,
    passwordWithToggleSource,
    passwordWithToggleLang,
  ),
  withLoadingSuffix: defineDemo(
    InputGroupWithLoadingSuffixDemo,
    withLoadingSuffixSource,
    withLoadingSuffixLang,
  ),
  withKeyboardShortcut: defineDemo(
    InputGroupWithKeyboardShortcutDemo,
    withKeyboardShortcutSource,
    withKeyboardShortcutLang,
  ),
  withBadgeSuffix: defineDemo(
    InputGroupWithBadgeSuffixDemo,
    withBadgeSuffixSource,
    withBadgeSuffixLang,
  ),
  required: defineDemo(InputGroupRequiredDemo, requiredSource, requiredLang),
  invalid: defineDemo(InputGroupInvalidDemo, invalidSource, invalidLang),
  disabled: defineDemo(InputGroupDisabledDemo, disabledSource, disabledLang),
  fullWidth: defineDemo(InputGroupFullWidthDemo, fullWidthSource, fullWidthLang),
  variants: defineDemo(InputGroupVariantsDemo, variantsSource, variantsLang),
  onSurface: defineDemo(InputGroupOnSurfaceDemo, onSurfaceSource, onSurfaceLang),
  withTextarea: defineDemo(InputGroupWithTextareaDemo, withTextareaSource, withTextareaLang),
  customStyling: defineDemo(InputGroupCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
