import { Component } from '@angular/core';

import { AvChipImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <div class="flex flex-wrap items-center gap-3">
        <span av-chip variant="primary">
          <app-icon icon="solar:record-bold" size="6" />
          <span av-chip-label>Default</span>
        </span>
        <span av-chip color="success" variant="primary">
          <app-icon icon="solar:record-bold" size="6" />
          <span av-chip-label>Active</span>
        </span>
        <span av-chip color="warning" variant="primary">
          <app-icon icon="solar:record-bold" size="6" />
          <span av-chip-label>Pending</span>
        </span>
        <span av-chip color="danger" variant="primary">
          <app-icon icon="solar:record-bold" size="6" />
          <span av-chip-label>Inactive</span>
        </span>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <span av-chip>
          <app-icon icon="solar:info-circle-linear" size="12" />
          <span av-chip-label>New Feature</span>
        </span>
        <span av-chip color="success">
          <app-icon icon="solar:check-read-linear" size="12" />
          <span av-chip-label>Available</span>
        </span>
        <span av-chip color="warning">
          <app-icon icon="solar:danger-triangle-linear" size="12" />
          <span av-chip-label>Beta</span>
        </span>
        <span av-chip color="danger">
          <app-icon icon="solar:forbidden-circle-linear" size="12" />
          <span av-chip-label>Deprecated</span>
        </span>
      </div>
    </div>`;

export const DEMO_NAME = 'chip-statuses';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvChipImports } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-chip-statuses-demo',
  imports: [AvChipImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ChipStatusesDemo {}`;

@Component({
  selector: 'app-chip-statuses-demo',
  imports: [AvChipImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ChipStatusesDemo {}
