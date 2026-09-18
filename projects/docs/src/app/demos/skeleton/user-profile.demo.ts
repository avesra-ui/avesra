import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex w-full items-center gap-3">
      <div av-skeleton class="h-10 w-10 shrink-0 rounded-full"></div>
      <div class="flex-1 space-y-2">
        <div av-skeleton class="h-3 w-36 rounded-lg"></div>
        <div av-skeleton class="h-3 w-24 rounded-lg"></div>
      </div>
    </div>`;

export const DEMO_NAME = 'skeleton-user-profile';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-user-profile-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-sm' },
  template: \`<div class="flex w-full items-center gap-3">
      <div av-skeleton class="h-10 w-10 shrink-0 rounded-full"></div>
      <div class="flex-1 space-y-2">
        <div av-skeleton class="h-3 w-36 rounded-lg"></div>
        <div av-skeleton class="h-3 w-24 rounded-lg"></div>
      </div>
    </div>\`,
})
export class SkeletonUserProfileDemo {}`;

@Component({
  selector: 'app-skeleton-user-profile-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-sm' },
  template: DEMO_TEMPLATE,
})
export class SkeletonUserProfileDemo {}
