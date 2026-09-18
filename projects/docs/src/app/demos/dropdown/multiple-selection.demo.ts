import { Component, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvCheckboxImports,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" av-dropdown-trigger>Preferred fruits</button>
  <av-dropdown-popover>
    <div class="min-w-[256px]">
      <div av-dropdown-menu selection-mode="multiple" [(selectedKeys)]="selected">
        <div av-menu-section>
          <p class="px-2.5 py-1 text-xs font-medium text-muted">Select fruits</p>
          <div av-menu-item #apple="avMenuItem" id="multi-apple" textValue="Apple">
            <span av-menu-item-indicator>
              <div av-checkbox class="pointer-events-none" [selected]="apple.isSelected()" aria-hidden="true">
                <span av-checkbox-control>
                  <span av-checkbox-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Apple</label>
          </div>
          <div av-menu-item #banana="avMenuItem" id="multi-banana" textValue="Banana">
            <span av-menu-item-indicator>
              <div av-checkbox class="pointer-events-none" [selected]="banana.isSelected()" aria-hidden="true">
                <span av-checkbox-control>
                  <span av-checkbox-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Banana</label>
          </div>
          <div av-menu-item #cherry="avMenuItem" id="multi-cherry" textValue="Cherry">
            <span av-menu-item-indicator>
              <div av-checkbox class="pointer-events-none" [selected]="cherry.isSelected()" aria-hidden="true">
                <span av-checkbox-control>
                  <span av-checkbox-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Cherry</label>
          </div>
        </div>
        <div av-menu-item #orange="avMenuItem" id="multi-orange" textValue="Orange">
          <span av-menu-item-indicator>
            <div av-checkbox class="pointer-events-none" [selected]="orange.isSelected()" aria-hidden="true">
              <span av-checkbox-control>
                <span av-checkbox-indicator></span>
              </span>
            </div>
          </span>
          <label av-label>Orange</label>
        </div>
      </div>
    </div>
  </av-dropdown-popover>
</av-dropdown>`;

const DEMO_IMPORTS = [
  AvDropdownImports,
  AvCheckboxImports,
  AvLabelComponent,
  AvButtonComponent,
] as const;

export const DEMO_NAME = 'dropdown-multiple-selection';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvCheckboxImports,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-dropdown-multiple-selection-demo',
  imports: [AvDropdownImports, AvCheckboxImports, AvLabelComponent, AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownMultipleSelectionDemo {
  readonly selected = signal<string[]>(['multi-apple', 'multi-banana']);
}`;

@Component({
  selector: 'app-dropdown-multiple-selection-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownMultipleSelectionDemo {
  readonly selected = signal<string[]>(['multi-apple', 'multi-banana']);
}
