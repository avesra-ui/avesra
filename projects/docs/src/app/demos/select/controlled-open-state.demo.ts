import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvButtonComponent,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="space-y-4">
  <div
    av-select
    class="w-64"
    placeholder="Select one"
    [(ngModel)]="value"
    [(open)]="isOpen"
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
  <button av-button (click)="isOpen = !isOpen">
    {{ isOpen ? 'Close' : 'Open' }} Select
  </button>
  <p class="text-sm text-muted">Select is {{ isOpen ? 'open' : 'closed' }}</p>
</div>`;

export const DEMO_NAME = 'select-controlled-open-state';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvButtonComponent,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-controlled-open-state-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectControlledOpenStateDemo {
  value: string | null = null;
  isOpen = false;
}`;

@Component({
  selector: 'app-select-controlled-open-state-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectControlledOpenStateDemo {
  value: string | null = null;
  isOpen = false;
}
