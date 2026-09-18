import { Component } from '@angular/core';

import { AvAvatarImports } from '@avesra/angular';

import { AVATAR_DEMO_GRADIENTS, AVATAR_DEMO_IMAGES } from './avatar-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
      <span av-avatar class="size-16">
        <img
          av-avatar-image
          alt="Extra Large"
          src="${AVATAR_DEMO_IMAGES.boy}"
        />
        <span av-avatar-fallback>XL</span>
      </span>

      <span av-avatar class="rounded-lg">
        <img
          av-avatar-image
          alt="Square Avatar"
          src="${AVATAR_DEMO_IMAGES.womanGrey}"
        />
        <span av-avatar-fallback class="rounded-lg">SQ</span>
      </span>

      <span
        av-avatar
        class="bg-cover bg-center p-0.5"
        [style.background-image]="'url(${AVATAR_DEMO_GRADIENTS.warm})'"
      >
        <div class="size-full rounded-full bg-background p-0.5">
          <img
            av-avatar-image
            class="rounded-full"
            alt="Gradient Border"
            src="${AVATAR_DEMO_IMAGES.womanAuburn}"
          />
          <span av-avatar-fallback class="border-none">GB</span>
        </div>
      </span>

      <div class="relative">
        <span av-avatar>
          <img
            av-avatar-image
            alt="Online User"
            src="${AVATAR_DEMO_IMAGES.man}"
          />
          <span av-avatar-fallback>ON</span>
        </span>
        <span
          class="absolute right-0 bottom-0 size-3 rounded-full bg-green-500 ring-2 ring-background"
        ></span>
      </div>
    </div>`;

export const DEMO_NAME = 'avatar-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAvatarImports } from '@avesra/angular';

@Component({
  selector: 'app-avatar-custom-styles-demo',
  imports: [AvAvatarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AvatarCustomStylesDemo {}`;

@Component({
  selector: 'app-avatar-custom-styles-demo',
  imports: [AvAvatarImports],
  template: DEMO_TEMPLATE,
})
export class AvatarCustomStylesDemo {}
