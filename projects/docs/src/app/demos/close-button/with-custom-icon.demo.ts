import { Component } from '@angular/core';

import { AvCloseButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
  <div class="flex flex-col items-center gap-2">
    <button av-close-button [useDefaultIcon]="false" aria-label="Close">
      <app-icon icon="solar:close-circle-linear" size="16" />
    </button>
    <span class="text-xs text-muted">Custom Icon</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <button av-close-button [useDefaultIcon]="false" aria-label="Close">
      <app-icon icon="solar:close-square-linear" size="16" />
    </button>
    <span class="text-xs text-muted">Alternative Icon</span>
  </div>
</div>`;

export const DEMO_NAME = 'close-button-with-custom-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCloseButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-close-button-with-custom-icon-demo',
  imports: [AvCloseButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CloseButtonWithCustomIconDemo {}`;

@Component({
  selector: 'app-close-button-with-custom-icon-demo',
  imports: [AvCloseButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class CloseButtonWithCustomIconDemo {}
