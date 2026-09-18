import { Component } from '@angular/core';

import { AvChipImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap items-center gap-3">
      <span av-chip>
        <app-icon icon="solar:record-bold" size="6" />
        <span av-chip-label>Information</span>
      </span>
      <span av-chip color="success">
        <app-icon icon="solar:check-circle-bold" size="12" />
        <span av-chip-label>Completed</span>
      </span>
      <span av-chip color="warning">
        <app-icon icon="solar:clock-circle-linear" size="12" />
        <span av-chip-label>Pending</span>
      </span>
      <span av-chip color="danger">
        <app-icon icon="solar:close-linear" size="12" />
        <span av-chip-label>Failed</span>
      </span>
      <span av-chip color="accent">
        <span av-chip-label>Label</span>
        <app-icon icon="solar:alt-arrow-down-linear" size="12" />
      </span>
    </div>`;

export const DEMO_NAME = 'chip-with-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvChipImports } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-chip-with-icon-demo',
  imports: [AvChipImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ChipWithIconDemo {}`;

@Component({
  selector: 'app-chip-with-icon-demo',
  imports: [AvChipImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ChipWithIconDemo {}
