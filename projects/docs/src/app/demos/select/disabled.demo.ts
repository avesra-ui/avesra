import { Component } from '@angular/core';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div
    av-select
    class="w-64"
    disabled
    placeholder="Select one"
    [default-selected-keys]="['california']"
  >
    <label av-label>State</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
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
  </div>
  <div
    av-select
    class="w-64"
    disabled
    selection-mode="multiple"
    placeholder="Select countries"
    [default-selected-keys]="['argentina', 'japan', 'france']"
  >
    <label av-label>Countries to Visit</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box selection-mode="multiple">
        <div av-list-box-item id="argentina" textValue="Argentina">
          Argentina
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="venezuela" textValue="Venezuela">
          Venezuela
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="japan" textValue="Japan">
          Japan
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="france" textValue="France">
          France
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="italy" textValue="Italy">
          Italy
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="spain" textValue="Spain">
          Spain
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </av-select-popover>
  </div>
</div>`;

export const DEMO_NAME = 'select-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-disabled-demo',
  imports: [
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectDisabledDemo {}`;

@Component({
  selector: 'app-select-disabled-demo',
  imports: [
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectDisabledDemo {}
