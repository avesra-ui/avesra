import { defineDemo } from '../define-demo';
import { DisclosureGroupBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { DisclosureGroupControlledDemo, DEMO_LANG as controlledLang, DEMO_SOURCE as controlledSource } from './controlled.demo';

export const disclosureGroupDemos = {
  basic: defineDemo(DisclosureGroupBasicDemo, basicSource, basicLang),
  controlled: defineDemo(DisclosureGroupControlledDemo, controlledSource, controlledLang),
} as const;
