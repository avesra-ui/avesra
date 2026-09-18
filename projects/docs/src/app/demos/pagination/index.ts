import { defineDemo } from '../define-demo';
import { PaginationBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  PaginationControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  PaginationCustomIconsDemo,
  DEMO_LANG as customIconsLang,
  DEMO_SOURCE as customIconsSource,
} from './custom-icons.demo';
import {
  PaginationCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  PaginationDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import {
  PaginationSimplePrevNextDemo,
  DEMO_LANG as simplePrevNextLang,
  DEMO_SOURCE as simplePrevNextSource,
} from './simple-prev-next.demo';
import { PaginationSizesDemo, DEMO_LANG as sizesLang, DEMO_SOURCE as sizesSource } from './sizes.demo';
import {
  PaginationWithEllipsisDemo,
  DEMO_LANG as withEllipsisLang,
  DEMO_SOURCE as withEllipsisSource,
} from './with-ellipsis.demo';
import {
  PaginationWithSummaryDemo,
  DEMO_LANG as withSummaryLang,
  DEMO_SOURCE as withSummarySource,
} from './with-summary.demo';

export const paginationDemos = {
  basic: defineDemo(PaginationBasicDemo, basicSource, basicLang),
  sizes: defineDemo(PaginationSizesDemo, sizesSource, sizesLang),
  withEllipsis: defineDemo(PaginationWithEllipsisDemo, withEllipsisSource, withEllipsisLang),
  simplePrevNext: defineDemo(PaginationSimplePrevNextDemo, simplePrevNextSource, simplePrevNextLang),
  withSummary: defineDemo(PaginationWithSummaryDemo, withSummarySource, withSummaryLang),
  customIcons: defineDemo(PaginationCustomIconsDemo, customIconsSource, customIconsLang),
  controlled: defineDemo(PaginationControlledDemo, controlledSource, controlledLang),
  disabled: defineDemo(PaginationDisabledDemo, disabledSource, disabledLang),
  customStyling: defineDemo(PaginationCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
