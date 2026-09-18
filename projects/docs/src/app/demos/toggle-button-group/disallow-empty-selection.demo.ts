import { Component, signal } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <av-toggle-button-group
    selection-mode="single"
    disallow-empty-selection
    [default-selected-keys]="['center']"
    [(selectedKeys)]="selectedKeys"
  >
    <button av-toggle-button value="left" icon-only aria-label="Align left">
      <app-icon icon="solar:align-left-linear" size="16" />
    </button>
    <button av-toggle-button value="center" icon-only aria-label="Align top">
      <span av-toggle-button-group-separator></span>
      <app-icon icon="solar:align-top-linear" size="16" />
    </button>
    <button av-toggle-button value="right" icon-only aria-label="Align right">
      <span av-toggle-button-group-separator></span>
      <app-icon icon="solar:align-right-linear" size="16" />
    </button>
  </av-toggle-button-group>
  <p class="text-sm text-muted">
    Selected:
    <span class="font-medium">{{ selectedKeys().join(', ') || 'none' }}</span>
  </p>
</div>`;

export const DEMO_NAME = 'toggle-button-group-disallow-empty-selection';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `// See component preview for full template`;

@Component({
  selector: 'app-toggle-button-group-disallow-empty-selection-demo',
  imports: [
    AvToggleButtonGroupImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupDisallowEmptySelectionDemo {
  readonly selectedKeys = signal<string[]>(['center']);
}
