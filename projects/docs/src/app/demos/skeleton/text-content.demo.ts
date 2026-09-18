import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full space-y-3">
      <div av-skeleton class="h-4 w-full rounded"></div>
      <div av-skeleton class="h-4 w-5/6 rounded"></div>
      <div av-skeleton class="h-4 w-4/6 rounded"></div>
      <div av-skeleton class="h-4 w-full rounded"></div>
      <div av-skeleton class="h-4 w-3/6 rounded"></div>
    </div>`;

export const DEMO_NAME = 'skeleton-text-content';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-text-content-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-md' },
  template: \`<div class="w-full space-y-3">
      <div av-skeleton class="h-4 w-full rounded"></div>
      <div av-skeleton class="h-4 w-5/6 rounded"></div>
      <div av-skeleton class="h-4 w-4/6 rounded"></div>
      <div av-skeleton class="h-4 w-full rounded"></div>
      <div av-skeleton class="h-4 w-3/6 rounded"></div>
    </div>\`,
})
export class SkeletonTextContentDemo {}`;

@Component({
  selector: 'app-skeleton-text-content-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-md' },
  template: DEMO_TEMPLATE,
})
export class SkeletonTextContentDemo {}
