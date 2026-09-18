import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-select
  class="w-64"
  placeholder="Select countries"
  selection-mode="multiple"
  [(ngModel)]="value"
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
      <div av-list-box-item id="thailand" textValue="Thailand">
        Thailand
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="new-zealand" textValue="New Zealand">
        New Zealand
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="iceland" textValue="Iceland">
        Iceland
        <span av-list-box-item-indicator></span>
      </div>
    </div>
  </av-select-popover>
</div>`;

export const DEMO_NAME = 'select-multiple';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-multiple-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectMultipleDemo {
  value: string[] = [];
}`;

@Component({
  selector: 'app-select-multiple-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectMultipleDemo {
  value: string[] = [];
}
