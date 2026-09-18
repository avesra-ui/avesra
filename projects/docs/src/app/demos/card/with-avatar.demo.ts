import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvCardImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      <div av-card class="w-[200px] gap-2">
        <img
          alt="Indie Hackers community"
          class="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src="/images/objects/object-yellow-mushroom-lamp.png"
        />
        <div av-card-header>
          <h3 av-card-title>Indie Hackers</h3>
          <p av-card-description>148 members</p>
        </div>
        <div av-card-footer class="flex gap-2">
          <span av-avatar class="size-5" aria-label="Martha's profile picture">
            <img
              av-avatar-image
              alt="Martha's avatar"
              src="/images/gradients/gradient-pink-magenta.png"
            />
            <span av-avatar-fallback class="text-xs">IH</span>
          </span>
          <span class="text-xs">By Martha</span>
        </div>
      </div>

      <div av-card class="w-[200px] gap-2">
        <img
          alt="AI Builders community"
          class="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src="/images/avatars/avatar-woman-orange-jacket.png"
        />
        <div av-card-header>
          <h3 av-card-title>AI Builders</h3>
          <p av-card-description>362 members</p>
        </div>
        <div av-card-footer class="flex gap-2">
          <span av-avatar class="size-5" aria-label="John's profile picture">
            <img
              av-avatar-image
              alt="John's avatar - blue themed"
              src="/images/gradients/gradient-blue-cyan.png"
            />
            <span av-avatar-fallback class="text-xs">B</span>
          </span>
          <span class="text-xs">By John</span>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'card-with-avatar';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvCardImports,
} from '@avesra/angular';

@Component({
  selector: 'app-card-with-avatar-demo',
  imports: [
    AvCardImports,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CardWithAvatarDemo {}`;

@Component({
  selector: 'app-card-with-avatar-demo',
  imports: [
    AvCardImports,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class CardWithAvatarDemo {}
