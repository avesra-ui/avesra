import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvLabelComponent,
  AvSelectImports,
  AvSeparatorImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-select class="w-64" placeholder="Select a country" [(ngModel)]="value">
  <label av-label>Country</label>
  <button av-select-trigger>
    <span av-select-value></span>
    <span av-select-indicator></span>
  </button>
  <av-select-popover>
    <div av-list-box>
      <div av-list-box-section>
        <p class="px-2.5 py-1 text-xs font-medium text-muted">North America</p>
        <div av-list-box-item id="usa" textValue="United States">
          United States
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="canada" textValue="Canada">
          Canada
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="mexico" textValue="Mexico">
          Mexico
          <span av-list-box-item-indicator></span>
        </div>
      </div>
      <div av-separator></div>
      <div av-list-box-section>
        <p class="px-2.5 py-1 text-xs font-medium text-muted">Europe</p>
        <div av-list-box-item id="uk" textValue="United Kingdom">
          United Kingdom
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="france" textValue="France">
          France
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="germany" textValue="Germany">
          Germany
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="spain" textValue="Spain">
          Spain
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="italy" textValue="Italy">
          Italy
          <span av-list-box-item-indicator></span>
        </div>
      </div>
      <div av-separator></div>
      <div av-list-box-section>
        <p class="px-2.5 py-1 text-xs font-medium text-muted">Asia</p>
        <div av-list-box-item id="japan" textValue="Japan">
          Japan
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="china" textValue="China">
          China
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="india" textValue="India">
          India
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="south-korea" textValue="South Korea">
          South Korea
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </div>
  </av-select-popover>
</div>`;

export const DEMO_NAME = 'select-with-sections';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSelectImports,
  AvSeparatorImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-with-sections-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvSeparatorImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectWithSectionsDemo {
  value: string | null = null;
}`;

@Component({
  selector: 'app-select-with-sections-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvSeparatorImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectWithSectionsDemo {
  value: string | null = null;
}
