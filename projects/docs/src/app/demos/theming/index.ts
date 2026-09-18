import { defineDemo } from '../define-demo';
import { ThemingModesDemo, DEMO_LANG as modesLang, DEMO_SOURCE as modesSource } from './modes.demo';

export const themingDemos = {
  modes: defineDemo(ThemingModesDemo, modesSource, modesLang),
} as const;
