import { Component, computed, signal } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <av-toggle-button-group selection-mode="multiple" [(selectedKeys)]="selectedKeys">
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
  <p class="text-sm text-muted">
    Selected:
    <span class="font-medium">{{ selectedLabel() }}</span>
  </p>
</div>`;

export const DEMO_NAME = 'toggle-button-group-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import { AvToggleButtonGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-toggle-button-group-controlled-demo',
  imports: [AvToggleButtonGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonGroupControlledDemo {
  readonly selectedKeys = signal(['bold']);
  readonly selectedLabel = computed(() =>
    this.selectedKeys().length > 0 ? this.selectedKeys().join(', ') : 'None',
  );
}`;

@Component({
  selector: 'app-toggle-button-group-controlled-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupControlledDemo {
  readonly selectedKeys = signal(['bold']);
  readonly selectedLabel = computed(() =>
    this.selectedKeys().length > 0 ? this.selectedKeys().join(', ') : 'None',
  );
}
