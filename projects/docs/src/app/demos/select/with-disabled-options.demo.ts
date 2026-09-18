import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-select class="w-64" placeholder="Select an animal" [(ngModel)]="value">
  <label av-label>Animal</label>
  <button av-select-trigger>
    <span av-select-value></span>
    <span av-select-indicator></span>
  </button>
  <av-select-popover>
    <div av-list-box>
      <div av-list-box-item id="dog" textValue="Dog">
        Dog
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="cat" textValue="Cat" disabled>
        Cat
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="bird" textValue="Bird">
        Bird
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="kangaroo" textValue="Kangaroo" disabled>
        Kangaroo
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="elephant" textValue="Elephant">
        Elephant
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="tiger" textValue="Tiger">
        Tiger
        <span av-list-box-item-indicator></span>
      </div>
    </div>
  </av-select-popover>
</div>`;

export const DEMO_NAME = 'select-with-disabled-options';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-with-disabled-options-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectWithDisabledOptionsDemo {
  value: string | null = null;
}`;

@Component({
  selector: 'app-select-with-disabled-options-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectWithDisabledOptionsDemo {
  value: string | null = null;
}
