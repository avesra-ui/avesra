import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="w-[400px] space-y-3">
  <button av-button full-width>Primary Button</button>
  <button av-button full-width>
    <app-icon icon="solar:add-circle-linear" size="16" />
    With Icon
  </button>
</div>`;

export const DEMO_NAME = 'button-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-full-width-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonFullWidthDemo {}`;

@Component({
  selector: 'app-button-full-width-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonFullWidthDemo {}
