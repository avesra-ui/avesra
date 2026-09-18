import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-[400px] space-y-4">
  <div av-select full-width placeholder="Select one" [(ngModel)]="value">
    <label av-label>Favorite Animal</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box>
        <div av-list-box-item id="cat" textValue="Cat">
          Cat
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="dog" textValue="Dog">
          Dog
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="bird" textValue="Bird">
          Bird
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </av-select-popover>
  </div>
</div>`;

export const DEMO_NAME = 'select-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-full-width-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectFullWidthDemo {
  value: string | null = null;
}`;

@Component({
  selector: 'app-select-full-width-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectFullWidthDemo {
  value: string | null = null;
}
