import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';

import { BADGE_DEMO_GRADIENTS } from './badge-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-6">
      <span av-badge-anchor>
        <span av-avatar>
          <img av-avatar-image alt="JD" [src]="greenAvatarUrl" />
          <span av-avatar-fallback>JD</span>
        </span>
        <span av-badge color="danger" size="sm" label="5"></span>
      </span>

      <span av-badge-anchor>
        <span av-avatar>
          <img av-avatar-image alt="AB" [src]="orangeAvatarUrl" />
          <span av-avatar-fallback>AB</span>
        </span>
        <span av-badge color="accent" size="sm" label="New"></span>
      </span>

      <span av-badge-anchor>
        <span av-avatar>
          <img av-avatar-image alt="CD" [src]="blueAvatarUrl" />
          <span av-avatar-fallback>CD</span>
        </span>
        <span av-badge color="success" placement="bottom-right" size="sm"></span>
      </span>
    </div>`;

export const DEMO_NAME = 'badge-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';

@Component({
  selector: 'app-badge-basic-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BadgeBasicDemo {
  readonly greenAvatarUrl = '${BADGE_DEMO_GRADIENTS.pink}';
  readonly orangeAvatarUrl = '${BADGE_DEMO_GRADIENTS.warm}';
  readonly blueAvatarUrl = '${BADGE_DEMO_GRADIENTS.blueCyan}';
}`;

@Component({
  selector: 'app-badge-basic-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class BadgeBasicDemo {
  readonly greenAvatarUrl = BADGE_DEMO_GRADIENTS.pink;
  readonly orangeAvatarUrl = BADGE_DEMO_GRADIENTS.warm;
  readonly blueAvatarUrl = BADGE_DEMO_GRADIENTS.blueCyan;
}
