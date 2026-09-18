import { defineDemo } from '../define-demo';
import { TabsBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  TabsDisabledTabDemo,
  DEMO_LANG as disabledTabLang,
  DEMO_SOURCE as disabledTabSource,
} from './disabled-tab.demo';
import {
  TabsOverflowDemo,
  DEMO_LANG as overflowLang,
  DEMO_SOURCE as overflowSource,
} from './overflow.demo';
import {
  TabsSecondaryDemo,
  DEMO_LANG as secondaryLang,
  DEMO_SOURCE as secondarySource,
} from './secondary.demo';
import {
  TabsSecondaryVerticalDemo,
  DEMO_LANG as secondaryVerticalLang,
  DEMO_SOURCE as secondaryVerticalSource,
} from './secondary-vertical.demo';
import {
  TabsVerticalDemo,
  DEMO_LANG as verticalLang,
  DEMO_SOURCE as verticalSource,
} from './vertical.demo';
import {
  TabsWithSeparatorDemo,
  DEMO_LANG as withSeparatorLang,
  DEMO_SOURCE as withSeparatorSource,
} from './with-separator.demo';

export const tabsDemos = {
  basic: defineDemo(TabsBasicDemo, basicSource, basicLang),
  vertical: defineDemo(TabsVerticalDemo, verticalSource, verticalLang),
  overflow: defineDemo(TabsOverflowDemo, overflowSource, overflowLang),
  disabledTab: defineDemo(TabsDisabledTabDemo, disabledTabSource, disabledTabLang),
  withSeparator: defineDemo(TabsWithSeparatorDemo, withSeparatorSource, withSeparatorLang),
  secondary: defineDemo(TabsSecondaryDemo, secondarySource, secondaryLang),
  secondaryVertical: defineDemo(
    TabsSecondaryVerticalDemo,
    secondaryVerticalSource,
    secondaryVerticalLang,
  ),
} as const;
