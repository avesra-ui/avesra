import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full space-y-4">
      @for (item of items; track item) {
        <div class="flex items-center gap-3">
          <div av-skeleton class="h-10 w-10 shrink-0 rounded-lg"></div>
          <div class="flex-1 space-y-2">
            <div av-skeleton class="h-3 w-full rounded"></div>
            <div av-skeleton class="h-3 w-4/5 rounded"></div>
          </div>
        </div>
      }
    </div>`;

export const DEMO_NAME = 'skeleton-list';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-list-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-sm' },
  template: \`<div class="w-full space-y-4">
      @for (item of items; track item) {
        <div class="flex items-center gap-3">
          <div av-skeleton class="h-10 w-10 shrink-0 rounded-lg"></div>
          <div class="flex-1 space-y-2">
            <div av-skeleton class="h-3 w-full rounded"></div>
            <div av-skeleton class="h-3 w-4/5 rounded"></div>
          </div>
        </div>
      }
    </div>\`,
})
export class SkeletonListDemo {
  readonly items = [0, 1, 2];
}`;

@Component({
  selector: 'app-skeleton-list-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-sm' },
  template: DEMO_TEMPLATE,
})
export class SkeletonListDemo {
  readonly items = [0, 1, 2];
}
