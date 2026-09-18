import { Component } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Single selection</span>
    <av-toggle-button-group selection-mode="single" [default-selected-keys]="['top']">
      <button av-toggle-button value="left">
        <app-icon icon="solar:align-left-linear" size="16" />
        Left
      </button>
      <button av-toggle-button value="top">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:align-top-linear" size="16" />
        Top
      </button>
      <button av-toggle-button value="right">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:align-right-linear" size="16" />
        Right
      </button>
      <button av-toggle-button value="bottom">
        <span av-toggle-button-group-separator></span>
        <app-icon icon="solar:align-bottom-linear" size="16" />
        Bottom
      </button>
    </av-toggle-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Multiple selection</span>
    <av-toggle-button-group selection-mode="multiple" [default-selected-keys]="['bold', 'underline']">
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
</div>`;

export const DEMO_NAME = 'toggle-button-group-selection-mode';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-group-selection-mode-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonGroupSelectionModeDemo {}`;

@Component({
  selector: 'app-toggle-button-group-selection-mode-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupSelectionModeDemo {}
