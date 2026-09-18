import { Component } from '@angular/core';

import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-center gap-3">
  <button av-toggle-button>
    <app-icon icon="solar:heart-linear" size="16" />
    Default
  </button>
  <button av-toggle-button variant="ghost">
    <app-icon icon="solar:heart-linear" size="16" />
    Ghost
  </button>
</div>`;

export const DEMO_NAME = 'toggle-button-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-variants-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonVariantsDemo {}`;

@Component({
  selector: 'app-toggle-button-variants-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonVariantsDemo {}
