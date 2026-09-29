import { Component, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
  AvRadioImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Fruits</button>
  <ng-template avDropdownContent>
    <div av-dropdown-popover class="min-w-[220px]">
      <div av-dropdown-menu selection-mode="single" [(selectedKeys)]="selected">
        <div av-dropdown-menu-section>
          <p class="px-2.5 py-1 text-xs font-medium text-muted">Select a fruit</p>
          <div av-dropdown-menu-item #apple="avDropdownMenuItem" id="apple" textValue="Apple">
            <span av-dropdown-menu-item-indicator>
              <div av-radio class="pointer-events-none" [selected]="apple.isSelected()" aria-hidden="true">
                <span av-radio-control>
                  <span av-radio-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Apple</label>
          </div>
          <div av-dropdown-menu-item #banana="avDropdownMenuItem" id="banana" textValue="Banana">
            <span av-dropdown-menu-item-indicator>
              <div av-radio class="pointer-events-none" [selected]="banana.isSelected()" aria-hidden="true">
                <span av-radio-control>
                  <span av-radio-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Banana</label>
          </div>
          <div av-dropdown-menu-item #cherry="avDropdownMenuItem" id="cherry" textValue="Cherry">
            <span av-dropdown-menu-item-indicator>
              <div av-radio class="pointer-events-none" [selected]="cherry.isSelected()" aria-hidden="true">
                <span av-radio-control>
                  <span av-radio-indicator></span>
                </span>
              </div>
            </span>
            <label av-label>Cherry</label>
          </div>
        </div>
        <div av-dropdown-menu-item #orange="avDropdownMenuItem" id="orange" textValue="Orange">
          <span av-dropdown-menu-item-indicator>
            <div av-radio class="pointer-events-none" [selected]="orange.isSelected()" aria-hidden="true">
              <span av-radio-control>
                <span av-radio-indicator></span>
              </span>
            </div>
          </span>
          <label av-label>Orange</label>
        </div>
        <div av-dropdown-menu-item #pear="avDropdownMenuItem" id="pear" textValue="Pear">
          <span av-dropdown-menu-item-indicator>
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
  </ng-template>
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
