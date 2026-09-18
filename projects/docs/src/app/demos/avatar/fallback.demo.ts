import { Component } from '@angular/core';

import { AvAvatarImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
      <span av-avatar>
        <span av-avatar-fallback>JD</span>
      </span>
      <span av-avatar>
        <span av-avatar-fallback>
          <app-icon icon="solar:user-linear" size="16" />
        </span>
      </span>
      <span av-avatar>
        <img
          av-avatar-image
          alt="Delayed Avatar"
          src="https://invalid-url-to-show-fallback.com/image.jpg"
        />
        <span av-avatar-fallback [delay-ms]="600">NA</span>
      </span>
      <span av-avatar>
        <span
          av-avatar-fallback
          class="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white"
        >
          GB
        </span>
      </span>
    </div>`;

export const DEMO_NAME = 'avatar-fallback';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAvatarImports } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-avatar-fallback-demo',
  imports: [
    AppIconComponent,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AvatarFallbackDemo {}`;

@Component({
  selector: 'app-avatar-fallback-demo',
  imports: [
    AppIconComponent,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class AvatarFallbackDemo {}
