import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvKbdImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Actions</button>
  <av-dropdown-popover>
    <div av-dropdown-menu (action)="onAction($event)">
      <div av-menu-item id="new" textValue="New">
        <label av-label>New</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>N</span>
        </kbd>
      </div>
      <div av-menu-item id="open" textValue="Open">
        <label av-label>Open</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>O</span>
        </kbd>
      </div>
      <div av-menu-item id="save" textValue="Save">
        <label av-label>Save</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>S</span>
        </kbd>
      </div>
      <div av-menu-item id="delete" textValue="Delete" variant="danger">
        <label av-label>Delete</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <abbr av-kbd-abbr key-value="shift"></abbr>
          <span av-kbd-content>D</span>
        </kbd>
      </div>
    </div>
  </av-dropdown-popover>
</av-dropdown>`;

export const DEMO_NAME = 'dropdown-with-keyboard-shortcuts';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvKbdImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-dropdown-with-keyboard-shortcuts-demo',
  imports: [
    AvDropdownImports,
    AvLabelComponent,
    AvKbdImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownWithKeyboardShortcutsDemo {
  onAction(key: string): void {
    console.log(\`Selected: \${key}\`);
  }
}`;

@Component({
  selector: 'app-dropdown-with-keyboard-shortcuts-demo',
  imports: [
    AvDropdownImports,
    AvLabelComponent,
    AvKbdImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DropdownWithKeyboardShortcutsDemo {
  onAction(key: string): void {
    console.log(`Selected: ${key}`);
  }
}
