import { Component } from '@angular/core';

import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<button av-toggle-button>
  <app-icon icon="solar:heart-linear" size="16" />
  Like
</button>`;

export const DEMO_NAME = 'toggle-button-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-basic-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonBasicDemo {}`;

@Component({
  selector: 'app-toggle-button-basic-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonBasicDemo {}
