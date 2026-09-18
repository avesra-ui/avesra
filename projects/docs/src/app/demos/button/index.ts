import { defineDemo } from '../define-demo';
import { ButtonBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  ButtonCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  ButtonCustomVariantsDemo,
  DEMO_LANG as customVariantsLang,
  DEMO_SOURCE as customVariantsSource,
} from './custom-variants.demo';
import { ButtonDisabledDemo, DEMO_LANG as disabledLang, DEMO_SOURCE as disabledSource } from './disabled.demo';
import { ButtonFullWidthDemo, DEMO_LANG as fullWidthLang, DEMO_SOURCE as fullWidthSource } from './full-width.demo';
import { ButtonIconOnlyDemo, DEMO_LANG as iconOnlyLang, DEMO_SOURCE as iconOnlySource } from './icon-only.demo';
import { ButtonLoadingDemo, DEMO_LANG as loadingLang, DEMO_SOURCE as loadingSource } from './loading.demo';
import {
  ButtonLoadingStateDemo,
  DEMO_LANG as loadingStateLang,
  DEMO_SOURCE as loadingStateSource,
} from './loading-state.demo';
import { ButtonPendingDemo, DEMO_LANG as pendingLang, DEMO_SOURCE as pendingSource } from './pending.demo';
import {
  ButtonPendingWithIconDemo,
  DEMO_LANG as pendingWithIconLang,
  DEMO_SOURCE as pendingWithIconSource,
} from './pending-with-icon.demo';
import {
  ButtonRenderFunctionDemo,
  DEMO_LANG as renderFunctionLang,
  DEMO_SOURCE as renderFunctionSource,
} from './render-function.demo';
import {
  ButtonRippleEffectDemo,
  DEMO_LANG as rippleEffectLang,
  DEMO_SOURCE as rippleEffectSource,
} from './ripple-effect.demo';
import { ButtonSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import { ButtonSocialDemo, DEMO_LANG as socialLang, DEMO_SOURCE as socialSource } from './social.demo';
import { ButtonVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';
import { ButtonWithIconsDemo, DEMO_LANG as withIconsLang, DEMO_SOURCE as withIconsSource } from './with-icons.demo';

export const buttonDemos = {
  basic: defineDemo(ButtonBasicDemo, basicSource, basicLang),
  customStyles: defineDemo(ButtonCustomStylesDemo, customStylesSource, customStylesLang),
  customVariants: defineDemo(ButtonCustomVariantsDemo, customVariantsSource, customVariantsLang),
  disabled: defineDemo(ButtonDisabledDemo, disabledSource, disabledLang),
  fullWidth: defineDemo(ButtonFullWidthDemo, fullWidthSource, fullWidthLang),
  iconOnly: defineDemo(ButtonIconOnlyDemo, iconOnlySource, iconOnlyLang),
  loading: defineDemo(ButtonLoadingDemo, loadingSource, loadingLang),
  loadingState: defineDemo(ButtonLoadingStateDemo, loadingStateSource, loadingStateLang),
  pending: defineDemo(ButtonPendingDemo, pendingSource, pendingLang),
  pendingWithIcon: defineDemo(ButtonPendingWithIconDemo, pendingWithIconSource, pendingWithIconLang),
  renderFunction: defineDemo(ButtonRenderFunctionDemo, renderFunctionSource, renderFunctionLang),
  rippleEffect: defineDemo(ButtonRippleEffectDemo, rippleEffectSource, rippleEffectLang),
  sizes: defineDemo(ButtonSizesDemo, sizesSource, sizesLang),
  social: defineDemo(ButtonSocialDemo, socialSource, socialLang),
  variants: defineDemo(ButtonVariantsDemo, variantsSource, variantsLang),
  withIcons: defineDemo(ButtonWithIconsDemo, withIconsSource, withIconsLang),
} as const;
