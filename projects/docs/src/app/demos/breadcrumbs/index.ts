import { defineDemo } from '../define-demo';
import { BreadcrumbsBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  BreadcrumbsCustomRenderFunctionDemo,
  DEMO_LANG as customRenderFunctionLang,
  DEMO_SOURCE as customRenderFunctionSource,
} from './custom-render-function.demo';
import {
  BreadcrumbsCustomSeparatorDemo,
  DEMO_LANG as customSeparatorLang,
  DEMO_SOURCE as customSeparatorSource,
} from './custom-separator.demo';
import {
  BreadcrumbsCustomStylesDemo,
  DEMO_LANG as customStylesLang,
  DEMO_SOURCE as customStylesSource,
} from './custom-styles.demo';
import { BreadcrumbsDisabledDemo, DEMO_LANG as disabledLang, DEMO_SOURCE as disabledSource } from './disabled.demo';
import { BreadcrumbsLevel2Demo, DEMO_LANG as level2Lang, DEMO_SOURCE as level2Source } from './level-2.demo';
import { BreadcrumbsLevel3Demo, DEMO_LANG as level3Lang, DEMO_SOURCE as level3Source } from './level-3.demo';

export const breadcrumbsDemos = {
  basic: defineDemo(BreadcrumbsBasicDemo, basicSource, basicLang),
  customRenderFunction: defineDemo(
    BreadcrumbsCustomRenderFunctionDemo,
    customRenderFunctionSource,
    customRenderFunctionLang,
  ),
  customSeparator: defineDemo(BreadcrumbsCustomSeparatorDemo, customSeparatorSource, customSeparatorLang),
  customStyles: defineDemo(BreadcrumbsCustomStylesDemo, customStylesSource, customStylesLang),
  disabled: defineDemo(BreadcrumbsDisabledDemo, disabledSource, disabledLang),
  level2: defineDemo(BreadcrumbsLevel2Demo, level2Source, level2Lang),
  level3: defineDemo(BreadcrumbsLevel3Demo, level3Source, level3Lang),
} as const;
