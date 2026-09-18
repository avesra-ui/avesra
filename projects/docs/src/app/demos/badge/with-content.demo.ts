import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

import { BADGE_DEMO_DEFAULT_GRADIENT } from './badge-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-6">
      <span av-badge-anchor>
        <span av-avatar>
          <img av-avatar-image alt="JD" [src]="avatarUrl" />
          <span av-avatar-fallback>JD</span>
        </span>
        <span av-badge color="danger" size="sm" label="5"></span>
      </span>

      <span av-badge-anchor>
        <span av-avatar>
          <img av-avatar-image alt="JD" [src]="avatarUrl" />
          <span av-avatar-fallback>JD</span>
        </span>
        <span av-badge color="danger" size="sm" label="New"></span>
      </span>

      <span av-badge-anchor>
        <span av-avatar>
          <img av-avatar-image alt="JD" [src]="avatarUrl" />
          <span av-avatar-fallback>JD</span>
        </span>
        <span av-badge color="danger" size="sm" label="99+"></span>
      </span>

      <span av-badge-anchor>
        <span av-avatar>
          <img av-avatar-image alt="JD" [src]="avatarUrl" />
          <span av-avatar-fallback>JD</span>
        </span>
        <span av-badge color="accent" size="sm">
          <app-icon icon="solar:bell-linear" size="10" />
        </span>
      </span>
    </div>`;

export const DEMO_NAME = 'badge-with-content';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-badge-with-content-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BadgeWithContentDemo {
  readonly avatarUrl = '${BADGE_DEMO_DEFAULT_GRADIENT}';
}`;

@Component({
  selector: 'app-badge-with-content-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class BadgeWithContentDemo {
  readonly avatarUrl = BADGE_DEMO_DEFAULT_GRADIENT;
}
