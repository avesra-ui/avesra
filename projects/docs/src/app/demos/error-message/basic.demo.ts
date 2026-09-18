import { Component, computed, signal } from '@angular/core';

import {
  AvDescriptionComponent,
  AvErrorMessageComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tag-group
  selection-mode="multiple"
  [(selectedKeys)]="selected"
>
  <label av-label>Required Categories</label>
  <div av-tag-group-list>
    <div av-tag value="news">News</div>
    <div av-tag value="travel">Travel</div>
    <div av-tag value="gaming">Gaming</div>
    <div av-tag value="shopping">Shopping</div>
  </div>
  <p av-description>Select at least one category</p>
  @if (isInvalid()) {
    <p av-error-message>Please select at least one category</p>
  }
</av-tag-group>`;

export const DEMO_NAME = 'error-message-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvErrorMessageComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-error-message-basic-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvErrorMessageComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class ErrorMessageBasicDemo {
  readonly selected = signal<string[]>([]);
  readonly isInvalid = computed(() => this.selected().length === 0);
}`;

@Component({
  selector: 'app-error-message-basic-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvErrorMessageComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: DEMO_TEMPLATE,
})
export class ErrorMessageBasicDemo {
  readonly selected = signal<string[]>([]);
  readonly isInvalid = computed(() => this.selected().length === 0);
}
