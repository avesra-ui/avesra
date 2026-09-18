import { Component } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-start gap-8">
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Horizontal</span>
    <av-toggle-button-group orientation="horizontal" selection-mode="multiple">
      <button av-toggle-button icon-only value="bold" aria-label="Bold">
        <app-icon icon="solar:text-bold-linear" size="16" />
      </button>
      <button av-toggle-button icon-only value="italic" aria-label="Italic">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:text-italic-linear" size="16" />
      </button>
      <button av-toggle-button icon-only value="underline" aria-label="Underline">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:text-underline-linear" size="16" />
      </button>
    </av-toggle-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Vertical</span>
    <av-toggle-button-group orientation="vertical" selection-mode="multiple">
      <button av-toggle-button icon-only value="bold" aria-label="Bold">
        <app-icon icon="solar:text-bold-linear" size="16" />
      </button>
      <button av-toggle-button icon-only value="italic" aria-label="Italic">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:text-italic-linear" size="16" />
      </button>
      <button av-toggle-button icon-only value="underline" aria-label="Underline">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:text-underline-linear" size="16" />
      </button>
    </av-toggle-button-group>
  </div>
</div>`;

export const DEMO_NAME = 'toggle-button-group-orientation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-group-orientation-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonGroupOrientationDemo {}`;

@Component({
  selector: 'app-toggle-button-group-orientation-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupOrientationDemo {}
