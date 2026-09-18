import { Component } from '@angular/core';

import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex items-center gap-3">
    <button av-toggle-button size="sm">
      <app-icon icon="solar:heart-linear" size="16" />
      Small
    </button>
    <button av-toggle-button size="md">
      <app-icon icon="solar:heart-linear" size="16" />
      Medium
    </button>
    <button av-toggle-button size="lg">
      <app-icon icon="solar:heart-linear" size="16" />
      Large
    </button>
  </div>
  <div class="flex items-center gap-3">
    <button av-toggle-button icon-only size="sm" aria-label="Like">
      <app-icon icon="solar:heart-linear" size="16" />
    </button>
    <button av-toggle-button icon-only size="md" aria-label="Like">
      <app-icon icon="solar:heart-linear" size="16" />
    </button>
    <button av-toggle-button icon-only size="lg" aria-label="Like">
      <app-icon icon="solar:heart-linear" size="16" />
    </button>
  </div>
</div>`;

export const DEMO_NAME = 'toggle-button-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-sizes-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonSizesDemo {}`;

@Component({
  selector: 'app-toggle-button-sizes-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonSizesDemo {}
