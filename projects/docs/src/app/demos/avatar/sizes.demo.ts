import { Component } from '@angular/core';

import { AvAvatarImports } from '@avesra/angular';

import { AVATAR_DEMO_IMAGES } from './avatar-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
      <span av-avatar size="sm">
        <img
          av-avatar-image
          alt="Small Avatar"
          src="${AVATAR_DEMO_IMAGES.boy}"
        />
        <span av-avatar-fallback>SM</span>
      </span>
      <span av-avatar size="md">
        <img
          av-avatar-image
          alt="Medium Avatar"
          src="${AVATAR_DEMO_IMAGES.womanGrey}"
        />
        <span av-avatar-fallback>MD</span>
      </span>
      <span av-avatar size="lg">
        <img
          av-avatar-image
          alt="Large Avatar"
          src="${AVATAR_DEMO_IMAGES.womanAuburn}"
        />
        <span av-avatar-fallback>LG</span>
      </span>
    </div>`;

export const DEMO_NAME = 'avatar-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAvatarImports } from '@avesra/angular';

@Component({
  selector: 'app-avatar-sizes-demo',
  imports: [AvAvatarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AvatarSizesDemo {}`;

@Component({
  selector: 'app-avatar-sizes-demo',
  imports: [AvAvatarImports],
  template: DEMO_TEMPLATE,
})
export class AvatarSizesDemo {}
