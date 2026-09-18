import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-select class="w-64" placeholder="Select one" [(ngModel)]="value">
  <label av-label>State</label>
  <button av-select-trigger>
    <span av-select-value></span>
    <span av-select-indicator class="size-3">
      <app-icon icon="solar:sort-vertical-linear" size="12" />
    </span>
  </button>
  <av-select-popover>
    <div av-list-box>
      <div av-list-box-item id="florida" textValue="Florida">
        Florida
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="delaware" textValue="Delaware">
        Delaware
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="california" textValue="California">
        California
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="texas" textValue="Texas">
        Texas
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="new-york" textValue="New York">
        New York
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="washington" textValue="Washington">
        Washington
        <span av-list-box-item-indicator></span>
      </div>
    </div>
  </av-select-popover>
</div>`;

export const DEMO_NAME = 'select-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-select-custom-indicator-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectCustomIndicatorDemo {
  value: string | null = null;
}`;

@Component({
  selector: 'app-select-custom-indicator-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectCustomIndicatorDemo {
  value: string | null = null;
}
