import { Component } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Attached (default)</span>
    <av-toggle-button-group selection-mode="multiple">
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
      <button av-toggle-button icon-only value="strikethrough" aria-label="Strikethrough">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:text-cross-linear" size="16" />
      </button>
    </av-toggle-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Detached</span>
    <av-toggle-button-group selection-mode="multiple" [detached]="true">
      <button av-toggle-button icon-only value="bold" aria-label="Bold">
        <app-icon icon="solar:text-bold-linear" size="16" />
      </button>
      <button av-toggle-button icon-only value="italic" aria-label="Italic">
        <app-icon icon="solar:text-italic-linear" size="16" />
      </button>
      <button av-toggle-button icon-only value="underline" aria-label="Underline">
        <app-icon icon="solar:text-underline-linear" size="16" />
      </button>
      <button av-toggle-button icon-only value="strikethrough" aria-label="Strikethrough">
        <app-icon icon="solar:text-cross-linear" size="16" />
      </button>
    </av-toggle-button-group>
  </div>
</div>`;

export const DEMO_NAME = 'toggle-button-group-attached';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-group-attached-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonGroupAttachedDemo {}`;

@Component({
  selector: 'app-toggle-button-group-attached-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupAttachedDemo {}
