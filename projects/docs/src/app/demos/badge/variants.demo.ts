import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvBadgeImports,
  AvSeparatorImports,
} from '@avesra/angular';
import type { AvBadgeColor, AvBadgeVariant } from '@avesra/angular';

import { BADGE_DEMO_DEFAULT_GRADIENT } from './badge-demo.assets';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-8">
      @for (variant of variants; track variant; let last = $last) {
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-muted capitalize">{{ variant }}</h3>
          <div class="flex items-center gap-6">
            @for (color of colors; track color) {
              <span av-badge-anchor>
                <span av-avatar>
                  <img av-avatar-image alt="JD" [src]="avatarUrl" />
                  <span av-avatar-fallback>JD</span>
                </span>
                <span
                  av-badge
                  [color]="color"
                  size="sm"
                  [variant]="variant"
                  label="5"
                ></span>
              </span>
            }
          </div>
        </div>
        @if (!last) {
          <hr av-separator />
        }
      }
    </div>`;

export const DEMO_NAME = 'badge-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvBadgeImports,
  AvSeparatorImports,
} from '@avesra/angular';
import type { AvBadgeColor, AvBadgeVariant } from '@avesra/angular';

@Component({
  selector: 'app-badge-variants-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
    AvSeparatorImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BadgeVariantsDemo {
  readonly avatarUrl = '${BADGE_DEMO_DEFAULT_GRADIENT}';

  readonly variants: AvBadgeVariant[] = ['primary', 'secondary', 'soft'];
  readonly colors: AvBadgeColor[] = ['accent', 'default', 'success', 'warning', 'danger'];
}`;

@Component({
  selector: 'app-badge-variants-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
    AvSeparatorImports,
  ],
  template: DEMO_TEMPLATE,
})
export class BadgeVariantsDemo {
  readonly avatarUrl = BADGE_DEMO_DEFAULT_GRADIENT;

  readonly variants: AvBadgeVariant[] = ['primary', 'secondary', 'soft'];
  readonly colors: AvBadgeColor[] = ['accent', 'default', 'success', 'warning', 'danger'];
}
