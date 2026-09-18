import { Component } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="w-full max-w-md space-y-3">
  <av-toggle-button-group full-width selection-mode="multiple">
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
  <av-toggle-button-group full-width selection-mode="single">
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
</div>`;

export const DEMO_NAME = 'toggle-button-group-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-group-full-width-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonGroupFullWidthDemo {}`;

@Component({
  selector: 'app-toggle-button-group-full-width-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupFullWidthDemo {}
