import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-start gap-8">
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Horizontal</span>
    <av-button-group orientation="horizontal" variant="tertiary">
      <button av-button icon-only aria-label="Align left">
        <app-icon icon="solar:align-left-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Align top">
        <span av-button-group-separator></span>
        <app-icon icon="solar:align-top-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Align right">
        <span av-button-group-separator></span>
        <app-icon icon="solar:align-right-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Align bottom">
        <span av-button-group-separator></span>
        <app-icon icon="solar:align-bottom-linear" size="16" />
      </button>
    </av-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Vertical</span>
    <av-button-group orientation="vertical" variant="tertiary">
      <button av-button icon-only aria-label="Align left">
        <app-icon icon="solar:align-left-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Align top">
        <span av-button-group-separator></span>
        <app-icon icon="solar:align-top-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Align right">
        <span av-button-group-separator></span>
        <app-icon icon="solar:align-right-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Align bottom">
        <span av-button-group-separator></span>
        <app-icon icon="solar:align-bottom-linear" size="16" />
      </button>
    </av-button-group>
  </div>
</div>`;

export const DEMO_NAME = 'button-group-orientation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-group-orientation-demo',
  imports: [AvButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupOrientationDemo {}`;

@Component({
  selector: 'app-button-group-orientation-demo',
  imports: [AvButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupOrientationDemo {}
