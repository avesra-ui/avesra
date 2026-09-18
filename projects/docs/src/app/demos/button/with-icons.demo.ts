import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
  <button av-button>
    <app-icon icon="solar:global-linear" size="16" />
    Search
  </button>
  <button av-button variant="secondary">
    <app-icon icon="solar:add-circle-linear" size="16" />
    Add Member
  </button>
  <button av-button variant="tertiary">
    <app-icon icon="solar:letter-linear" size="16" />
    Email
  </button>
  <button av-button variant="danger">
    <app-icon icon="solar:trash-bin-trash-linear" size="16" />
    Delete
  </button>
</div>`;

export const DEMO_NAME = 'button-with-icons';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-with-icons-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonWithIconsDemo {}`;

@Component({
  selector: 'app-button-with-icons-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonWithIconsDemo {}
