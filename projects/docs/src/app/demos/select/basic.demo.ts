import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-select class="w-64" placeholder="Select one" [(ngModel)]="value">
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
</div>`;

export const DEMO_NAME = 'select-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-basic-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectBasicDemo {
  value: string | null = null;
}`;

@Component({
  selector: 'app-select-basic-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectBasicDemo {
  value: string | null = null;
}
