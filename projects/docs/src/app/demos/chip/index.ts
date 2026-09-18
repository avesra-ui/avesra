import { defineDemo } from '../define-demo';
import { ChipBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { ChipStatusesDemo, DEMO_LANG as statusesLang, DEMO_SOURCE as statusesSource } from './statuses.demo';
import { ChipVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';
import { ChipWithIconDemo, DEMO_LANG as withIconLang, DEMO_SOURCE as withIconSource } from './with-icon.demo';

export const chipDemos = {
  basic: defineDemo(ChipBasicDemo, basicSource, basicLang),
  statuses: defineDemo(ChipStatusesDemo, statusesSource, statusesLang),
  variants: defineDemo(ChipVariantsDemo, variantsSource, variantsLang),
  withIcon: defineDemo(ChipWithIconDemo, withIconSource, withIconLang),
} as const;
