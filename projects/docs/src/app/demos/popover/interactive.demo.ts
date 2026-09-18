import { Component, signal } from '@angular/core';
import {
  AvAvatarImports,
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

import { AVATAR_DEMO_IMAGES } from '../avatar/avatar-demo.assets';

const DEMO_TEMPLATE = `<div class="flex items-center gap-6">
  <av-popover>
    <div av-popover-trigger class="flex items-center gap-2" aria-label="User profile">
      <span av-avatar size="sm">
        <img av-avatar-image alt="Maya Ellison" src="${AVATAR_DEMO_IMAGES.womanAuburn}" />
        <span av-avatar-fallback>ME</span>
      </span>
      <div class="flex flex-col">
        <p class="text-sm font-medium text-foreground">Maya Ellison</p>
        <p class="text-xs text-muted">&#64;mayae</p>
      </div>
    </div>
    <av-popover-content>
      <div av-popover-dialog class="w-[320px]">
        <div av-popover-heading>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span av-avatar size="md">
                <img av-avatar-image alt="Maya Ellison" src="${AVATAR_DEMO_IMAGES.womanAuburn}" />
                <span av-avatar-fallback>ME</span>
              </span>
              <div>
                <p class="font-semibold text-foreground">Maya Ellison</p>
                <p class="text-sm text-muted">&#64;mayae</p>
              </div>
            </div>
            <button
              av-button
              size="sm"
              class="rounded-full"
              [variant]="following() ? 'tertiary' : 'primary'"
              (click)="toggleFollowing()"
            >
              {{ following() ? 'Following' : 'Follow' }}
            </button>
          </div>
        </div>
        <p class="mt-3 text-sm text-muted">
          Product designer based in Lisbon. Shipping interfaces that feel calm and considered.
        </p>
        <div class="mt-3 flex gap-4">
          <div>
            <span class="font-semibold text-foreground">428</span>
            <span class="ml-1 text-sm text-muted">Following</span>
          </div>
          <div>
            <span class="font-semibold text-foreground">8.2K</span>
            <span class="ml-1 text-sm text-muted">Followers</span>
          </div>
        </div>
      </div>
    </av-popover-content>
  </av-popover>
</div>`;

export const DEMO_NAME = 'popover-interactive';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvAvatarImports,
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

@Component({
  selector: 'app-popover-interactive-demo',
  imports: [
    AvAvatarImports,
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PopoverInteractiveDemo {
  readonly following = signal(false);

  toggleFollowing(): void {
    this.following.update((value) => !value);
  }
}`;

@Component({
  selector: 'app-popover-interactive-demo',
  imports: [
    AvAvatarImports,
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: DEMO_TEMPLATE,
})
export class PopoverInteractiveDemo {
  readonly following = signal(false);

  toggleFollowing(): void {
    this.following.update((value) => !value);
  }
}
