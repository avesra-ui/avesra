import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex gap-3">
  <button av-button variant="tertiary" icon-only aria-label="More options">
    <app-icon icon="solar:menu-dots-linear" size="16" />
  </button>
  <button av-button variant="secondary" icon-only aria-label="Settings">
    <app-icon icon="solar:settings-linear" size="16" />
  </button>
  <button av-button variant="danger" icon-only aria-label="Delete">
    <app-icon icon="solar:trash-bin-trash-linear" size="16" />
  </button>
</div>`;

export const DEMO_NAME = 'button-icon-only';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-icon-only-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonIconOnlyDemo {}`;

@Component({
  selector: 'app-button-icon-only-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonIconOnlyDemo {}
