import { defineDemo } from '../define-demo';
import {
  SkeletonAnimationTypesDemo,
  DEMO_LANG as animationTypesLang,
  DEMO_SOURCE as animationTypesSource,
} from './animation-types.demo';
import { SkeletonBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { SkeletonCardDemo, DEMO_LANG as cardLang, DEMO_SOURCE as cardSource } from './card.demo';
import {
  SkeletonCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import { SkeletonGridDemo, DEMO_LANG as gridLang, DEMO_SOURCE as gridSource } from './grid.demo';
import { SkeletonListDemo, DEMO_LANG as listLang, DEMO_SOURCE as listSource } from './list.demo';
import {
  SkeletonSingleShimmerDemo,
  DEMO_LANG as singleShimmerLang,
  DEMO_SOURCE as singleShimmerSource,
} from './single-shimmer.demo';
import {
  SkeletonTextContentDemo,
  DEMO_LANG as textContentLang,
  DEMO_SOURCE as textContentSource,
} from './text-content.demo';
import {
  SkeletonUserProfileDemo,
  DEMO_LANG as userProfileLang,
  DEMO_SOURCE as userProfileSource,
} from './user-profile.demo';

export const skeletonDemos = {
  basic: defineDemo(SkeletonBasicDemo, basicSource, basicLang),
  textContent: defineDemo(SkeletonTextContentDemo, textContentSource, textContentLang),
  userProfile: defineDemo(SkeletonUserProfileDemo, userProfileSource, userProfileLang),
  list: defineDemo(SkeletonListDemo, listSource, listLang),
  animationTypes: defineDemo(SkeletonAnimationTypesDemo, animationTypesSource, animationTypesLang),
  grid: defineDemo(SkeletonGridDemo, gridSource, gridLang),
  singleShimmer: defineDemo(SkeletonSingleShimmerDemo, singleShimmerSource, singleShimmerLang),
  customStyling: defineDemo(SkeletonCustomStylingDemo, customStylingSource, customStylingLang),
  card: defineDemo(SkeletonCardDemo, cardSource, cardLang),
} as const;
