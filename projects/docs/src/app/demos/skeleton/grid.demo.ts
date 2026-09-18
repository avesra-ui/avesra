import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="grid w-full grid-cols-3 gap-4">
      <div av-skeleton class="h-24 rounded-xl"></div>
      <div av-skeleton class="h-24 rounded-xl"></div>
      <div av-skeleton class="h-24 rounded-xl"></div>
    </div>`;

export const DEMO_NAME = 'skeleton-grid';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-grid-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-xl' },
  template: \`<div class="grid w-full grid-cols-3 gap-4">
      <div av-skeleton class="h-24 rounded-xl"></div>
      <div av-skeleton class="h-24 rounded-xl"></div>
      <div av-skeleton class="h-24 rounded-xl"></div>
    </div>\`,
})
export class SkeletonGridDemo {}`;

@Component({
  selector: 'app-skeleton-grid-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-xl' },
  template: DEMO_TEMPLATE,
})
export class SkeletonGridDemo {}
