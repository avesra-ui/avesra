import { Component } from '@angular/core';

import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-center gap-3">
  <button av-toggle-button [disabled]="true">
    <app-icon icon="solar:heart-linear" size="16" />
    Like
  </button>
  <button av-toggle-button [disabled]="true" [selected]="true">
    <app-icon icon="solar:heart-bold" size="16" />
    Like
  </button>
</div>`;

export const DEMO_NAME = 'toggle-button-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-disabled-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonDisabledDemo {}`;

@Component({
  selector: 'app-toggle-button-disabled-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonDisabledDemo {}
