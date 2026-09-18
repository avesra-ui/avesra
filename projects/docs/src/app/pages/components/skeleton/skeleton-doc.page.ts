import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { skeletonDemos } from '../../../demos/skeleton';

@Component({
  selector: 'app-skeleton-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './skeleton-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class SkeletonDocPage {
  readonly demos = skeletonDemos;
  readonly apiProps = getComponentProps('skeleton');

  readonly globalAnimationExample = `/* In your global CSS / theme file */
:root {
  /* Possible values: shimmer, pulse, none */
  --av-skeleton-animation: pulse;
}

/* You can also set different values for light/dark themes */
[data-av-theme='light'],
.av-light {
  --av-skeleton-animation: shimmer;
}

[data-av-theme='dark'],
.dark,
.av-dark {
  --av-skeleton-animation: pulse;
}`;

  readonly cssOverrideExample = `@layer components {
  /* Base skeleton styles */
  .av-skeleton {
    @apply bg-surface-secondary/50; /* Change base background */
  }

  /* Shimmer animation gradient */
  .av-skeleton--shimmer::after {
    @apply via-surface; /* Change shimmer gradient color */
  }

  /* Pulse animation */
  .av-skeleton--pulse {
    @apply animate-pulse opacity-75; /* Customize pulse animation */
  }

  /* No animation variant */
  .av-skeleton--none {
    @apply opacity-50; /* Style for static skeleton */
  }
}`;

  readonly shimmerAnimationExample = `.av-skeleton--shimmer::after {
  @apply absolute inset-0 -translate-x-full animate-skeleton
         bg-linear-to-r from-transparent via-surface-tertiary to-transparent
         content-[''];
}`;

  readonly shimmerKeyframesExample = `@theme inline {
  --animate-skeleton: skeleton 2s linear infinite;

  @keyframes skeleton {
    100% {
      transform: translateX(200%);
    }
  }
}`;

  readonly pulseAnimationExample = `.av-skeleton--pulse {
  @apply animate-pulse;
}`;

  readonly noneAnimationExample = `.av-skeleton--none {
  /* No animation styles applied */
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'text-content', title: 'Text Content' },
    { id: 'user-profile', title: 'User Profile' },
    { id: 'list', title: 'List Items' },
    { id: 'grid', title: 'Grid' },
    { id: 'single-shimmer', title: 'Single Shimmer' },
    { id: 'animation-types', title: 'Animation Types' },
    { id: 'styling', title: 'Styling' },
    { id: 'global-animation', title: 'Global Animation Configuration', depth: 2 },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'animation', title: 'Animation', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
