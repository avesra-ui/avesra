import { defineDemo } from '../define-demo';
import {
  ToolbarAttachedDemo,
  DEMO_LANG as attachedLang,
  DEMO_SOURCE as attachedSource,
} from './attached.demo';
import { ToolbarBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  ToolbarCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import {
  ToolbarVerticalDemo,
  DEMO_LANG as verticalLang,
  DEMO_SOURCE as verticalSource,
} from './vertical.demo';
import {
  ToolbarWithButtonGroupsDemo,
  DEMO_LANG as withButtonGroupsLang,
  DEMO_SOURCE as withButtonGroupsSource,
} from './with-button-groups.demo';

export const toolbarDemos = {
  basic: defineDemo(ToolbarBasicDemo, basicSource, basicLang),
  vertical: defineDemo(ToolbarVerticalDemo, verticalSource, verticalLang),
  attached: defineDemo(ToolbarAttachedDemo, attachedSource, attachedLang),
  withButtonGroups: defineDemo(
    ToolbarWithButtonGroupsDemo,
    withButtonGroupsSource,
    withButtonGroupsLang,
  ),
  customStyles: defineDemo(ToolbarCustomStylesDemo, customStylesSource, customStylesLang),
} as const;
