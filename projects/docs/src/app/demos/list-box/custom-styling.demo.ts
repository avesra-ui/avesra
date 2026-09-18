import { Component, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvListBoxImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-list-box
  aria-label="Options"
  selection-mode="single"
  [(selectedKeys)]="selected"
  class="w-56 rounded-lg border border-border bg-surface p-2"
>
  <div
    av-list-box-item
    id="1"
    textValue="Item 1"
    class="hover:bg-surface-secondary"
  >
    <label av-label>Item 1</label>
    <span av-list-box-item-indicator></span>
  </div>
  <div
    av-list-box-item
    id="2"
    textValue="Item 2"
    class="hover:bg-surface-secondary"
  >
    <label av-label>Item 2</label>
    <span av-list-box-item-indicator></span>
  </div>
</div>`;

export const DEMO_NAME = 'list-box-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvListBoxImports,
} from '@avesra/angular';

@Component({
  selector: 'app-list-box-custom-styling-demo',
  imports: [
    AvListBoxImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ListBoxCustomStylingDemo {
  readonly selected = signal<string[]>(['1']);
}`;

@Component({
  selector: 'app-list-box-custom-styling-demo',
  imports: [
    AvListBoxImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ListBoxCustomStylingDemo {
  readonly selected = signal<string[]>(['1']);
}
