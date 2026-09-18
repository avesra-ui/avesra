import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvSeparatorImports,
} from '@avesra/angular';
import type { AvAvatarColor } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

import { AVATAR_DEMO_PORTRAITS } from './avatar-demo.assets';

type AvatarDemoVariant = {
  label: string;
  type: 'letter' | 'letter-soft' | 'icon' | 'icon-soft' | 'img';
  content?: string;
};

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <div class="w-24 shrink-0"></div>
        @for (color of colors; track color) {
          <div class="flex w-20 shrink-0 items-center justify-center">
            <span class="text-xs text-muted capitalize">{{ color }}</span>
          </div>
        }
      </div>

      <hr av-separator />

      @for (variant of variants; track variant.label) {
        <div class="flex items-center gap-3">
          <div class="w-24 shrink-0 text-sm text-muted">{{ variant.label }}</div>
          @for (color of colors; track color; let i = $index) {
            <div class="flex w-20 shrink-0 items-center justify-center">
              <span
                av-avatar
                [color]="color"
                [variant]="isSoft(variant.type) ? 'soft' : 'default'"
              >
                @if (variant.type === 'img') {
                  <img
                    av-avatar-image
                    [alt]="'Avatar ' + color"
                    [src]="avatarImages[i]"
                  />
                  <span av-avatar-fallback>{{ color.charAt(0).toUpperCase() }}</span>
                } @else if (isIcon(variant.type)) {
                  <span av-avatar-fallback>
                    <app-icon icon="solar:user-linear" size="16" />
                  </span>
                } @else {
                  <span av-avatar-fallback>{{ variant.content }}</span>
                }
              </span>
            </div>
          }
        </div>
      }
    </div>`;

export const DEMO_NAME = 'avatar-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvSeparatorImports,
} from '@avesra/angular';
import type { AvAvatarColor } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-avatar-variants-demo',
  imports: [
    AppIconComponent,
    AvAvatarImports,
    AvSeparatorImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AvatarVariantsDemo {
  readonly colors: readonly AvAvatarColor[] = [
    'accent',
    'default',
    'success',
    'warning',
    'danger',
  ];

  readonly avatarImages = ${JSON.stringify([...AVATAR_DEMO_PORTRAITS])};

  readonly variants: readonly {
    label: string;
    type: 'letter' | 'letter-soft' | 'icon' | 'icon-soft' | 'img';
    content?: string;
  }[] = [
    { label: 'letter', type: 'letter', content: 'AG' },
    { label: 'letter soft', type: 'letter-soft', content: 'AG' },
    { label: 'icon', type: 'icon' },
    { label: 'icon soft', type: 'icon-soft' },
    { label: 'img', type: 'img' },
  ];

  isSoft(type: string): boolean {
    return type.includes('soft');
  }

  isIcon(type: string): boolean {
    return type === 'icon' || type === 'icon-soft';
  }
}`;

@Component({
  selector: 'app-avatar-variants-demo',
  imports: [
    AppIconComponent,
    AvAvatarImports,
    AvSeparatorImports,
  ],
  template: DEMO_TEMPLATE,
})
export class AvatarVariantsDemo {
  readonly colors: readonly AvAvatarColor[] = [
    'accent',
    'default',
    'success',
    'warning',
    'danger',
  ];

  readonly avatarImages = [...AVATAR_DEMO_PORTRAITS];

  readonly variants: readonly AvatarDemoVariant[] = [
    { label: 'letter', type: 'letter', content: 'AG' },
    { label: 'letter soft', type: 'letter-soft', content: 'AG' },
    { label: 'icon', type: 'icon' },
    { label: 'icon soft', type: 'icon-soft' },
    { label: 'img', type: 'img' },
  ];

  isSoft(type: AvatarDemoVariant['type']): boolean {
    return type.includes('soft');
  }

  isIcon(type: AvatarDemoVariant['type']): boolean {
    return type === 'icon' || type === 'icon-soft';
  }
}
