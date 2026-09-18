import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

/**
 * Shared bone classes for the custom-styles layout.
 * Animation comes from Avesra’s default `shimmer` (`av-skeleton--shimmer`).
 */
const bone = 'rounded-lg bg-neutral-200/90 dark:bg-neutral-800/90';

const DEMO_TEMPLATE = `<div
  class="w-[250px] space-y-5 rounded-xl border border-border/80 bg-surface p-4 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
>
  <div av-skeleton class="h-32 ${bone}"></div>
  <div class="space-y-3">
    <div av-skeleton class="h-3 w-3/5 ${bone}"></div>
    <div av-skeleton class="h-3 w-4/5 ${bone}"></div>
    <div av-skeleton class="h-3 w-2/5 ${bone}"></div>
  </div>
</div>`;

export const DEMO_NAME = 'skeleton-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-custom-styling-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SkeletonCustomStylingDemo {}`;

@Component({
  selector: 'app-skeleton-custom-styling-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SkeletonCustomStylingDemo {}
