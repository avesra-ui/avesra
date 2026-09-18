import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<button av-button [pending]="true">
  <app-icon icon="solar:refresh-linear" size="16" class="animate-spin" />
  Uploading...
</button>`;

export const DEMO_NAME = 'button-loading';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-loading-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonLoadingDemo {}`;

@Component({
  selector: 'app-button-loading-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonLoadingDemo {}
