import { Component } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-toggle-button-group selection-mode="multiple">
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
</av-toggle-button-group>`;

export const DEMO_NAME = 'toggle-button-group-without-separator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-group-without-separator-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonGroupWithoutSeparatorDemo {}`;

@Component({
  selector: 'app-toggle-button-group-without-separator-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupWithoutSeparatorDemo {}
