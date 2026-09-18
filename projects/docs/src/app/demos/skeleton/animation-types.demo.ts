import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="space-y-2">
        <p class="truncate text-xs text-muted">Shimmer</p>
        <div class="space-y-3 rounded-lg bg-transparent p-4 shadow-surface">
          <div av-skeleton animation-type="shimmer" class="h-20 rounded-lg"></div>
          <div av-skeleton animation-type="shimmer" class="h-3 w-3/5 rounded-lg"></div>
          <div av-skeleton animation-type="shimmer" class="h-3 w-4/5 rounded-lg"></div>
        </div>
      </div>

      <div class="space-y-2">
        <p class="truncate text-xs text-muted">Pulse</p>
        <div class="space-y-3 rounded-lg bg-transparent p-4 shadow-surface">
          <div av-skeleton animation-type="pulse" class="h-20 rounded-lg"></div>
          <div av-skeleton animation-type="pulse" class="h-3 w-3/5 rounded-lg"></div>
          <div av-skeleton animation-type="pulse" class="h-3 w-4/5 rounded-lg"></div>
        </div>
      </div>

      <div class="space-y-2">
        <p class="truncate text-xs text-muted">None</p>
        <div class="space-y-3 rounded-lg bg-transparent p-4 shadow-surface">
          <div av-skeleton animation-type="none" class="h-20 rounded-lg"></div>
          <div av-skeleton animation-type="none" class="h-3 w-3/5 rounded-lg"></div>
          <div av-skeleton animation-type="none" class="h-3 w-4/5 rounded-lg"></div>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'skeleton-animation-types';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSkeletonComponent } from '@avesra/angular';

@Component({
  selector: 'app-skeleton-animation-types-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-xl' },
  template: \`<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="space-y-2">
        <p class="truncate text-xs text-muted">Shimmer</p>
        <div class="space-y-3 rounded-lg bg-transparent p-4 shadow-surface">
          <div av-skeleton animation-type="shimmer" class="h-20 rounded-lg"></div>
          <div av-skeleton animation-type="shimmer" class="h-3 w-3/5 rounded-lg"></div>
          <div av-skeleton animation-type="shimmer" class="h-3 w-4/5 rounded-lg"></div>
        </div>
      </div>

      <div class="space-y-2">
        <p class="truncate text-xs text-muted">Pulse</p>
        <div class="space-y-3 rounded-lg bg-transparent p-4 shadow-surface">
          <div av-skeleton animation-type="pulse" class="h-20 rounded-lg"></div>
          <div av-skeleton animation-type="pulse" class="h-3 w-3/5 rounded-lg"></div>
          <div av-skeleton animation-type="pulse" class="h-3 w-4/5 rounded-lg"></div>
        </div>
      </div>

      <div class="space-y-2">
        <p class="truncate text-xs text-muted">None</p>
        <div class="space-y-3 rounded-lg bg-transparent p-4 shadow-surface">
          <div av-skeleton animation-type="none" class="h-20 rounded-lg"></div>
          <div av-skeleton animation-type="none" class="h-3 w-3/5 rounded-lg"></div>
          <div av-skeleton animation-type="none" class="h-3 w-4/5 rounded-lg"></div>
        </div>
      </div>
    </div>\`,
})
export class SkeletonAnimationTypesDemo {}`;

@Component({
  selector: 'app-skeleton-animation-types-demo',
  imports: [AvSkeletonComponent],
  host: { class: 'block w-full max-w-xl' },
  template: DEMO_TEMPLATE,
})
export class SkeletonAnimationTypesDemo {}
