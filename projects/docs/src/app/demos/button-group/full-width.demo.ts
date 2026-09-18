import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="w-[400px] space-y-3">
  <av-button-group full-width>
    <button av-button>First</button>
    <button av-button><span av-button-group-separator></span>Second</button>
    <button av-button><span av-button-group-separator></span>Third</button>
  </av-button-group>
  <av-button-group full-width>
    <button av-button icon-only aria-label="Align left">
      <app-icon icon="solar:align-left-linear" size="16" />
    </button>
    <button av-button icon-only aria-label="Align top">
      <span av-button-group-separator></span>
      <app-icon icon="solar:align-top-linear" size="16" />
    </button>
    <button av-button icon-only aria-label="Align right">
      <span av-button-group-separator></span>
      <app-icon icon="solar:align-right-linear" size="16" />
    </button>
    <button av-button icon-only aria-label="Align bottom">
      <span av-button-group-separator></span>
      <app-icon icon="solar:align-bottom-linear" size="16" />
    </button>
  </av-button-group>
</div>`;

export const DEMO_NAME = 'button-group-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-group-full-width-demo',
  imports: [AvButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupFullWidthDemo {}`;

@Component({
  selector: 'app-button-group-full-width-demo',
  imports: [AvButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupFullWidthDemo {}
