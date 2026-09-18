import { Component, signal } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-8">
      <av-tag-group
        selection-mode="single"
        [default-selected-keys]="['news']"
        [(selectedKeys)]="singleSelected"
      >
        <label av-label>Single Selection</label>
        <div av-tag-group-list>
          <div av-tag value="news">News</div>
          <div av-tag value="travel">Travel</div>
          <div av-tag value="gaming">Gaming</div>
          <div av-tag value="shopping">Shopping</div>
        </div>
        <p av-description>Choose one category</p>
      </av-tag-group>

      <av-tag-group
        selection-mode="multiple"
        [default-selected-keys]="['news', 'travel']"
        [(selectedKeys)]="multipleSelected"
      >
        <label av-label>Multiple Selection</label>
        <div av-tag-group-list>
          <div av-tag value="news">News</div>
          <div av-tag value="travel">Travel</div>
          <div av-tag value="gaming">Gaming</div>
          <div av-tag value="shopping">Shopping</div>
        </div>
        <p av-description>Choose multiple categories</p>
      </av-tag-group>
    </div>`;

export const DEMO_NAME = 'tag-group-selection';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-tag-group-selection-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TagGroupSelectionDemo {
  readonly singleSelected = signal<string[]>(['news']);
  readonly multipleSelected = signal<string[]>(['news', 'travel']);
}`;

@Component({
  selector: 'app-tag-group-selection-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupSelectionDemo {
  readonly singleSelected = signal<string[]>(['news']);
  readonly multipleSelected = signal<string[]>(['news', 'travel']);
}
