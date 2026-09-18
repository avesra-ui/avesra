import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      class="av-skeleton--shimmer relative grid w-full grid-cols-3 gap-4 overflow-hidden rounded-xl"
    >
      <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
      <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
      <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
    </div>`;

export const DEMO_NAME = 'skeleton-single-shimmer';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-single-shimmer-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-xl' },
  template: \`<div
      class="av-skeleton--shimmer relative grid w-full grid-cols-3 gap-4 overflow-hidden rounded-xl"
    >
      <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
      <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
      <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
    </div>\`,
})
export class SkeletonSingleShimmerDemo {}`;

@Component({
  selector: 'app-skeleton-single-shimmer-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-xl' },
  template: DEMO_TEMPLATE,
})
export class SkeletonSingleShimmerDemo {}
