import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

import { AVATAR_DEMO_GRADIENTS } from '../avatar/avatar-demo.assets';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-8">
  <av-tag-group selection-mode="single">
    <label av-label>With Icons</label>
    <div av-tag-group-list>
      <div av-tag value="news">
        <app-icon icon="solar:document-text-linear" size="12" />
        News
      </div>
      <div av-tag value="travel">
        <app-icon icon="solar:global-linear" size="12" />
        Travel
      </div>
      <div av-tag value="gaming">
        <app-icon icon="solar:joystick-linear" size="12" />
        Gaming
      </div>
      <div av-tag value="shopping">
        <app-icon icon="solar:bag-linear" size="12" />
        Shopping
      </div>
    </div>
    <p av-description>Tags with icons</p>
  </av-tag-group>

  <av-tag-group selection-mode="single">
    <label av-label>With Avatars</label>
    <div av-tag-group-list>
      <div av-tag value="fred">
        <span class="size-4" av-avatar>
          <img
            av-avatar-image
            src="${AVATAR_DEMO_GRADIENTS.blueCyan}"
            alt="Fred"
          />
          <span av-avatar-fallback>F</span>
        </span>
        Fred
      </div>
      <div av-tag value="michael">
        <span class="size-4" av-avatar>
          <img
            av-avatar-image
            src="${AVATAR_DEMO_GRADIENTS.cyanBluePurple}"
            alt="Michael"
          />
          <span av-avatar-fallback>M</span>
        </span>
        Michael
      </div>
      <div av-tag value="jane">
        <span class="size-4" av-avatar>
          <img
            av-avatar-image
            src="${AVATAR_DEMO_GRADIENTS.purple}"
            alt="Jane"
          />
          <span av-avatar-fallback>J</span>
        </span>
        Jane
      </div>
    </div>
    <p av-description>Tags with avatars</p>
  </av-tag-group>
</div>`;

export const DEMO_NAME = 'tag-group-with-prefix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-tag-group-with-prefix-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
    AppIconComponent,
  ],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TagGroupWithPrefixDemo {}`;

@Component({
  selector: 'app-tag-group-with-prefix-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupWithPrefixDemo {}
