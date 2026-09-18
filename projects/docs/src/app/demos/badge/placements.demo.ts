import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';
import type { AvBadgePlacement } from '@avesra/angular';

import { BADGE_DEMO_DEFAULT_GRADIENT } from './badge-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-8">
      @for (placement of placements; track placement) {
        <div class="flex flex-col items-center gap-2">
          <span av-badge-anchor>
            <span av-avatar>
              <img av-avatar-image alt="JD" [src]="avatarUrl" />
              <span av-avatar-fallback>JD</span>
            </span>
            <span av-badge color="accent" [placement]="placement" size="sm"></span>
          </span>
          <span class="text-xs text-muted">{{ placement }}</span>
        </div>
      }
    </div>`;

export const DEMO_NAME = 'badge-placements';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';
import type { AvBadgePlacement } from '@avesra/angular';

@Component({
  selector: 'app-badge-placements-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BadgePlacementsDemo {
  readonly avatarUrl = '${BADGE_DEMO_DEFAULT_GRADIENT}';

  readonly placements: AvBadgePlacement[] = [
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
  ];
}`;

@Component({
  selector: 'app-badge-placements-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class BadgePlacementsDemo {
  readonly avatarUrl = BADGE_DEMO_DEFAULT_GRADIENT;

  readonly placements: AvBadgePlacement[] = [
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
  ];
}
