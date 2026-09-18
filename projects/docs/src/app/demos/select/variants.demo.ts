import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div av-select class="w-64" placeholder="Select one" variant="primary" [(ngModel)]="primaryValue">
    <label av-label>Primary variant</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box aria-label="Options" selection-mode="single">
        <div av-list-box-item id="option1" textValue="Option 1">
          Option 1
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="option2" textValue="Option 2">
          Option 2
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </av-select-popover>
  </div>
  <div av-select class="w-64" placeholder="Select one" variant="secondary" [(ngModel)]="secondaryValue">
    <label av-label>Secondary variant</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box aria-label="Options" selection-mode="single">
        <div av-list-box-item id="option1" textValue="Option 1">
          Option 1
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="option2" textValue="Option 2">
          Option 2
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </av-select-popover>
  </div>
</div>`;

export const DEMO_NAME = 'select-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-variants-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectVariantsDemo {
  primaryValue: string | null = null;
  secondaryValue: string | null = null;
}`;

@Component({
  selector: 'app-select-variants-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectVariantsDemo {
  primaryValue: string | null = null;
  secondaryValue: string | null = null;
}
