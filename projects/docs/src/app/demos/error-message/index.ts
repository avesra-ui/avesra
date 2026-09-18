import { defineDemo } from '../define-demo';
import { ErrorMessageBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';

export const errorMessageDemos = {
  basic: defineDemo(ErrorMessageBasicDemo, basicSource, basicLang),
} as const;
