import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-[250px] space-y-5 rounded-lg bg-transparent p-4 shadow-surface">
      <div av-skeleton class="h-32 rounded-lg"></div>
      <div class="space-y-3">
        <div av-skeleton class="h-3 w-3/5 rounded-lg"></div>
        <div av-skeleton class="h-3 w-4/5 rounded-lg"></div>
        <div av-skeleton class="h-3 w-2/5 rounded-lg"></div>
      </div>
    </div>`;

export const DEMO_NAME = 'skeleton-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-basic-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block' },
  template: \`<div class="w-[250px] space-y-5 rounded-lg bg-transparent p-4 shadow-surface">
      <div av-skeleton class="h-32 rounded-lg"></div>
      <div class="space-y-3">
        <div av-skeleton class="h-3 w-3/5 rounded-lg"></div>
        <div av-skeleton class="h-3 w-4/5 rounded-lg"></div>
        <div av-skeleton class="h-3 w-2/5 rounded-lg"></div>
      </div>
    </div>\`,
})
export class SkeletonBasicDemo {}`;

@Component({
  selector: 'app-skeleton-basic-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SkeletonBasicDemo {}
