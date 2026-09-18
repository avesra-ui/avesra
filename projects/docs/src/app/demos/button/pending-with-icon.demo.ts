import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
  <button av-button [pending]="true">
    <app-icon icon="solar:upload-linear" size="16" />
    Uploading...
  </button>
  <button av-button variant="secondary" [pending]="true">
    <app-icon icon="solar:refresh-linear" size="16" />
    Saving
  </button>
  <button av-button variant="tertiary" [pending]="true">
    <app-icon icon="solar:download-linear" size="16" />
    Loading
  </button>
</div>`;

export const DEMO_NAME = 'button-pending-with-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-pending-with-icon-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonPendingWithIconDemo {}`;

@Component({
  selector: 'app-button-pending-with-icon-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonPendingWithIconDemo {}
