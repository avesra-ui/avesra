import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-button-group>
      <button av-button class="rounded-none bg-[#08872B] hover:bg-[#0FBF3E]">
        Merge pull request
      </button>
      <button
        av-button
        icon-only
        aria-label="Merge options"
        class="rounded-none bg-[#08872B] hover:bg-[#0FBF3E]"
      >
        <span av-button-group-separator></span>
        <app-icon icon="solar:alt-arrow-down-linear" size="16" />
      </button>
    </av-button-group>`;

export const DEMO_NAME = 'button-group-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-group-custom-styles-demo',
  imports: [
    AvButtonGroupImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupCustomStylesDemo {}`;

@Component({
  selector: 'app-button-group-custom-styles-demo',
  imports: [
    AvButtonGroupImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupCustomStylesDemo {}
