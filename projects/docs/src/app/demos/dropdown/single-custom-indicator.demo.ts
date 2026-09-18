import { Component, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
  AvRadioImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Fruits</button>
  <av-dropdown-popover>
    <div class="min-w-[256px]">
      <div av-dropdown-menu selection-mode="single" [(selectedKeys)]="selected">
        <div av-menu-section>
          <p class="px-2.5 py-1 text-xs font-medium text-muted">Select a fruit</p>
          <div av-menu-item #apple="avMenuItem" id="apple" textValue="Apple">
            <span av-menu-item-indicator>
              <div av-radio class="pointer-events-none" [selected]="apple.isSelected()" aria-hidden="true">
                <span av-radio-control>
                  <span av-radio-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Apple</label>
          </div>
          <div av-menu-item #banana="avMenuItem" id="banana" textValue="Banana">
            <span av-menu-item-indicator>
              <div av-radio class="pointer-events-none" [selected]="banana.isSelected()" aria-hidden="true">
                <span av-radio-control>
                  <span av-radio-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Banana</label>
          </div>
          <div av-menu-item #cherry="avMenuItem" id="cherry" textValue="Cherry">
            <span av-menu-item-indicator>
              <div av-radio class="pointer-events-none" [selected]="cherry.isSelected()" aria-hidden="true">
                <span av-radio-control>
                  <span av-radio-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Cherry</label>
          </div>
        </div>
        <div av-menu-item #orange="avMenuItem" id="orange" textValue="Orange">
          <span av-menu-item-indicator>
            <div av-radio class="pointer-events-none" [selected]="orange.isSelected()" aria-hidden="true">
              <span av-radio-control>
                <span av-radio-indicator></span>
              </span>
            </div>
          </span>
          <label av-label>Orange</label>
        </div>
        <div av-menu-item #pear="avMenuItem" id="pear" textValue="Pear">
          <span av-menu-item-indicator>
            <div av-radio class="pointer-events-none" [selected]="pear.isSelected()" aria-hidden="true">
              <span av-radio-control>
                <span av-radio-indicator></span>
              </span>
            </div>
          </span>
          <label av-label>Pear</label>
        </div>
      </div>
    </div>
  </av-dropdown-popover>
</av-dropdown>`;

const DEMO_IMPORTS = [
  AvDropdownImports,
  AvRadioImports,
  AvLabelComponent,
  AvButtonComponent,
] as const;

export const DEMO_NAME = 'dropdown-single-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
  AvRadioImports,
} from '@avesra/angular';

@Component({
  selector: 'app-dropdown-single-custom-indicator-demo',
  imports: [AvDropdownImports, AvRadioImports, AvLabelComponent, AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownSingleCustomIndicatorDemo {
  readonly selected = signal<string[]>(['apple']);
}`;

@Component({
  selector: 'app-dropdown-single-custom-indicator-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownSingleCustomIndicatorDemo {
  readonly selected = signal<string[]>(['apple']);
}
