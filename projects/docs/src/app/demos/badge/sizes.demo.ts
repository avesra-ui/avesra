import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';
import type { AvBadgeSize } from '@avesra/angular';

import { BADGE_DEMO_DEFAULT_GRADIENT } from './badge-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-6">
      @for (size of sizes; track size) {
        <span av-badge-anchor>
          <span av-avatar [size]="size">
            <img av-avatar-image alt="JD" [src]="avatarUrl" />
            <span av-avatar-fallback>JD</span>
          </span>
          <span av-badge color="danger" [size]="size" label="5"></span>
        </span>
      }
    </div>`;

export const DEMO_NAME = 'badge-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';
import type { AvBadgeSize } from '@avesra/angular';

@Component({
  selector: 'app-badge-sizes-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BadgeSizesDemo {
  readonly avatarUrl = '${BADGE_DEMO_DEFAULT_GRADIENT}';

  readonly sizes: AvBadgeSize[] = ['sm', 'md', 'lg'];
}`;

@Component({
  selector: 'app-badge-sizes-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class BadgeSizesDemo {
  readonly avatarUrl = BADGE_DEMO_DEFAULT_GRADIENT;

  readonly sizes: AvBadgeSize[] = ['sm', 'md', 'lg'];
}
