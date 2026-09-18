import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';

import { BADGE_DEMO_GRADIENTS } from './badge-demo.assets';

const DEMO_TEMPLATE = `<span av-badge-anchor>
      <span av-avatar>
        <img
          av-avatar-image
          alt="Kate Wilson"
          src="${BADGE_DEMO_GRADIENTS.purple}"
        />
        <span av-avatar-fallback>KW</span>
      </span>
      <span
        av-badge
        class="min-w-5 font-semibold tabular-nums"
        color="accent"
        size="sm"
        variant="soft"
        label="5"
      ></span>
    </span>`;

export const DEMO_NAME = 'badge-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvBadgeImports,
} from '@avesra/angular';

@Component({
  selector: 'app-badge-custom-styles-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BadgeCustomStylesDemo {}`;

@Component({
  selector: 'app-badge-custom-styles-demo',
  imports: [
    AvBadgeImports,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class BadgeCustomStylesDemo {}
