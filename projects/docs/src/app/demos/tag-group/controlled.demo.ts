import { Component, signal } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tag-group
  selection-mode="multiple"
  [(selectedKeys)]="selected"
>
  <label av-label>Categories (controlled)</label>
  <div av-tag-group-list>
    <div av-tag value="news">News</div>
    <div av-tag value="travel">Travel</div>
    <div av-tag value="gaming">Gaming</div>
    <div av-tag value="shopping">Shopping</div>
  </div>
  <p av-description>
    Selected: {{ selected().length > 0 ? selected().join(', ') : 'None' }}
  </p>
</av-tag-group>`;

export const DEMO_NAME = 'tag-group-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-tag-group-controlled-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TagGroupControlledDemo {
  readonly selected = signal<string[]>(['news', 'travel']);
}`;

@Component({
  selector: 'app-tag-group-controlled-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupControlledDemo {
  readonly selected = signal<string[]>(['news', 'travel']);
}
