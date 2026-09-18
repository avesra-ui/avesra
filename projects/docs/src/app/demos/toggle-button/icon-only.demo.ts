import { Component } from '@angular/core';

import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-center gap-3">
  <button av-toggle-button icon-only aria-label="Like">
    <app-icon icon="solar:heart-linear" size="16" />
  </button>
  <button av-toggle-button icon-only variant="ghost" aria-label="Bookmark">
    <app-icon icon="solar:bookmark-linear" size="16" />
  </button>
</div>`;

export const DEMO_NAME = 'toggle-button-icon-only';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-icon-only-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonIconOnlyDemo {}`;

@Component({
  selector: 'app-toggle-button-icon-only-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonIconOnlyDemo {}
