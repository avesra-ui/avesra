import { defineDemo } from '../define-demo';
import { SwitchBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  SwitchControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  SwitchCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  SwitchDefaultSelectedDemo,
  DEMO_LANG as defaultSelectedLang,
  DEMO_SOURCE as defaultSelectedSource,
} from './default-selected.demo';
import {
  SwitchDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import { SwitchFormDemo, DEMO_LANG as formLang, DEMO_SOURCE as formSource } from './form.demo';
import { SwitchGroupDemo, DEMO_LANG as groupLang, DEMO_SOURCE as groupSource } from './group.demo';
import {
  SwitchGroupHorizontalDemo,
  DEMO_LANG as groupHorizontalLang,
  DEMO_SOURCE as groupHorizontalSource,
} from './group-horizontal.demo';
import {
  SwitchLabelPositionDemo,
  DEMO_LANG as labelPositionLang,
  DEMO_SOURCE as labelPositionSource,
} from './label-position.demo';
import {
  SwitchRenderPropsDemo,
  DEMO_LANG as renderPropsLang,
  DEMO_SOURCE as renderPropsSource,
} from './render-props.demo';
import { SwitchSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import {
  SwitchWithDescriptionDemo,
  DEMO_LANG as withDescriptionLang,
  DEMO_SOURCE as withDescriptionSource,
} from './with-description.demo';
import {
  SwitchWithIconsDemo,
  DEMO_LANG as withIconsLang,
  DEMO_SOURCE as withIconsSource,
} from './with-icons.demo';
import {
  SwitchWithoutLabelDemo,
  DEMO_LANG as withoutLabelLang,
  DEMO_SOURCE as withoutLabelSource,
} from './without-label.demo';

export const switchDemos = {
  basic: defineDemo(SwitchBasicDemo, basicSource, basicLang),
  disabled: defineDemo(SwitchDisabledDemo, disabledSource, disabledLang),
  defaultSelected: defineDemo(SwitchDefaultSelectedDemo, defaultSelectedSource, defaultSelectedLang),
  controlled: defineDemo(SwitchControlledDemo, controlledSource, controlledLang),
  withoutLabel: defineDemo(SwitchWithoutLabelDemo, withoutLabelSource, withoutLabelLang),
  sizes: defineDemo(SwitchSizesDemo, sizesSource, sizesLang),
  labelPosition: defineDemo(SwitchLabelPositionDemo, labelPositionSource, labelPositionLang),
  withIcons: defineDemo(SwitchWithIconsDemo, withIconsSource, withIconsLang),
  withDescription: defineDemo(SwitchWithDescriptionDemo, withDescriptionSource, withDescriptionLang),
  group: defineDemo(SwitchGroupDemo, groupSource, groupLang),
  groupHorizontal: defineDemo(
    SwitchGroupHorizontalDemo,
    groupHorizontalSource,
    groupHorizontalLang,
  ),
  renderProps: defineDemo(SwitchRenderPropsDemo, renderPropsSource, renderPropsLang),
  form: defineDemo(SwitchFormDemo, formSource, formLang),
  customStyles: defineDemo(SwitchCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
