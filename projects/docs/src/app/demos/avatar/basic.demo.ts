import { Component } from '@angular/core';

import { AvAvatarImports } from '@avesra/angular';

import { AVATAR_DEMO_IMAGES } from './avatar-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
      <span av-avatar>
        <img
          av-avatar-image
          alt="John Doe"
          src="${AVATAR_DEMO_IMAGES.man}"
        />
        <span av-avatar-fallback>JD</span>
      </span>
      <span av-avatar>
        <img
          av-avatar-image
          alt="Blue"
          src="${AVATAR_DEMO_IMAGES.boy}"
        />
        <span av-avatar-fallback>B</span>
      </span>
      <span av-avatar>
        <span av-avatar-fallback>JR</span>
      </span>
    </div>`;

export const DEMO_NAME = 'avatar-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAvatarImports } from '@avesra/angular';

@Component({
  selector: 'app-avatar-basic-demo',
  imports: [AvAvatarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AvatarBasicDemo {}`;

@Component({
  selector: 'app-avatar-basic-demo',
  imports: [AvAvatarImports],
  template: DEMO_TEMPLATE,
})
export class AvatarBasicDemo {}
