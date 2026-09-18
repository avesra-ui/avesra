import { Component } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-2">
    <span class="text-sm text-muted">Small</span>
    <av-toggle-button-group selection-mode="multiple" size="sm">
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
    <span class="text-sm text-muted">Medium (default)</span>
    <av-toggle-button-group selection-mode="multiple" size="md">
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
    <span class="text-sm text-muted">Large</span>
    <av-toggle-button-group selection-mode="multiple" size="lg">
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

export const DEMO_NAME = 'toggle-button-group-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `// See component preview for full template`;

@Component({
  selector: 'app-toggle-button-group-sizes-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupSizesDemo {}
