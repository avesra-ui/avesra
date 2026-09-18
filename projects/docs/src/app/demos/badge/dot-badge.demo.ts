import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';
import type { AvBadgeColor } from '@avesra/angular';

import { BADGE_DEMO_DEFAULT_GRADIENT } from './badge-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-6">
      @for (color of colors; track color) {
        <span av-badge-anchor>
          <span av-avatar>
            <img av-avatar-image alt="JD" [src]="avatarUrl" />
            <span av-avatar-fallback>JD</span>
          </span>
          <span av-badge [color]="color" placement="bottom-right" size="sm"></span>
        </span>
      }
    </div>`;

export const DEMO_NAME = 'badge-dot-badge';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';
import type { AvBadgeColor } from '@avesra/angular';

@Component({
  selector: 'app-badge-dot-badge-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BadgeDotBadgeDemo {
  readonly avatarUrl = '${BADGE_DEMO_DEFAULT_GRADIENT}';

  readonly colors: AvBadgeColor[] = ['accent', 'success', 'warning', 'danger'];
}`;

@Component({
  selector: 'app-badge-dot-badge-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class BadgeDotBadgeDemo {
  readonly avatarUrl = BADGE_DEMO_DEFAULT_GRADIENT;

  readonly colors: AvBadgeColor[] = ['accent', 'success', 'warning', 'danger'];
}
