import { defineDemo } from '../define-demo';
import { ToastBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  ToastCustomQueuesDemo,
  DEMO_LANG as customQueuesLang,
  DEMO_SOURCE as customQueuesSource,
} from './custom-queues.demo';
import {
  ToastHoverExpandDemo,
  DEMO_LANG as hoverExpandLang,
  DEMO_SOURCE as hoverExpandSource,
} from './hover-expand.demo';
import {
  ToastLoadingDemo,
  DEMO_LANG as loadingLang,
  DEMO_SOURCE as loadingSource,
} from './loading.demo';
import {
  ToastOtherDemo,
  DEMO_LANG as otherLang,
  DEMO_SOURCE as otherSource,
} from './other.demo';
import {
  ToastPlacementsDemo,
  DEMO_LANG as placementsLang,
  DEMO_SOURCE as placementsSource,
} from './placements.demo';
import {
  ToastPromiseDemo,
  DEMO_LANG as promiseLang,
  DEMO_SOURCE as promiseSource,
} from './promise.demo';
import {
  ToastSimpleDemo,
  DEMO_LANG as simpleLang,
  DEMO_SOURCE as simpleSource,
} from './simple.demo';
import {
  ToastTimeoutsAmpCallbacksDemo,
  DEMO_LANG as callbacksLang,
  DEMO_SOURCE as callbacksSource,
} from './timeouts-amp-callbacks.demo';
import {
  ToastUsageDemo,
  DEMO_LANG as usageLang,
  DEMO_SOURCE as usageSource,
} from './usage.demo';

export const toastDemos = {
  usage: defineDemo(ToastUsageDemo, usageSource, usageLang),
  variants: defineDemo(ToastBasicDemo, basicSource, basicLang),
  placements: defineDemo(ToastPlacementsDemo, placementsSource, placementsLang),
  simple: defineDemo(ToastSimpleDemo, simpleSource, simpleLang),
  hideIndicator: defineDemo(ToastOtherDemo, otherSource, otherLang),
  loading: defineDemo(ToastLoadingDemo, loadingSource, loadingLang),
  promise: defineDemo(ToastPromiseDemo, promiseSource, promiseLang),
  hoverExpand: defineDemo(ToastHoverExpandDemo, hoverExpandSource, hoverExpandLang),
  callbacks: defineDemo(ToastTimeoutsAmpCallbacksDemo, callbacksSource, callbacksLang),
  customQueues: defineDemo(ToastCustomQueuesDemo, customQueuesSource, customQueuesLang),
} as const;
