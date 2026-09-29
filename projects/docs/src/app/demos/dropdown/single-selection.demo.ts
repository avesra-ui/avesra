import { Component, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Fruit</button>
  <ng-template avDropdownContent>
    <div av-dropdown-popover class="min-w-[220px]">
      <div av-dropdown-menu selection-mode="single" [(selectedKeys)]="selected">
        <div av-dropdown-menu-section>
          <p class="px-2.5 py-1 text-xs font-medium text-muted">Select a fruit</p>
          <div av-dropdown-menu-item id="apple" textValue="Apple">
            <span av-dropdown-menu-item-indicator></span>
            <label av-label>Apple</label>
          </div>
          <div av-dropdown-menu-item id="banana" textValue="Banana">
            <span av-dropdown-menu-item-indicator></span>
            <label av-label>Banana</label>
          </div>
          <div av-dropdown-menu-item id="cherry" textValue="Cherry">
            <span av-dropdown-menu-item-indicator></span>
            <label av-label>Cherry</label>
          </div>
        </div>
        <div av-dropdown-menu-item id="orange" textValue="Orange">
          <span av-dropdown-menu-item-indicator></span>
          <label av-label>Orange</label>
        </div>
        <div av-dropdown-menu-item id="pear" textValue="Pear">
          <span av-dropdown-menu-item-indicator></span>
          <label av-label>Pear</label>
        </div>
      </div>
    </div>
  </ng-template>
</av-dropdown>`;

export const DEMO_NAME = 'dropdown-single-selection';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-dropdown-single-selection-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownSingleSelectionDemo {
  readonly selected = signal<string[]>(['apple']);
}`;

@Component({
  selector: 'app-dropdown-single-selection-demo',
  imports: [
    AvDropdownImports,
    AvLabelComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DropdownSingleSelectionDemo {
  readonly selected = signal<string[]>(['apple']);
}
