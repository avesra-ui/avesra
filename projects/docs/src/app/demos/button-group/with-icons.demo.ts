import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-muted">With icons</p>
    <av-button-group variant="secondary">
      <button av-button>
        <app-icon icon="solar:global-linear" size="16" />
        Search
      </button>
      <button av-button>
        <span av-button-group-separator></span>
        <app-icon icon="solar:add-square-linear" size="16" />
        Add
      </button>
      <button av-button>
        <span av-button-group-separator></span>
        <app-icon icon="solar:trash-bin-trash-linear" size="16" />
        Delete
      </button>
    </av-button-group>
  </div>
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-muted">Icon only buttons</p>
    <av-button-group variant="tertiary">
      <button av-button icon-only aria-label="Search">
        <app-icon icon="solar:global-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Add">
        <span av-button-group-separator></span>
        <app-icon icon="solar:add-square-linear" size="16" />
      </button>
      <button av-button icon-only aria-label="Delete">
        <span av-button-group-separator></span>
        <app-icon icon="solar:trash-bin-trash-linear" size="16" />
      </button>
    </av-button-group>
  </div>
</div>`;

export const DEMO_NAME = 'button-group-with-icons';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-group-with-icons-demo',
  imports: [AvButtonGroupImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupWithIconsDemo {}`;

@Component({
  selector: 'app-button-group-with-icons-demo',
  imports: [AvButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupWithIconsDemo {}
