import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Actions</button>
  <av-dropdown-popover>
    <div av-dropdown-menu (action)="onAction($event)">
      <div av-menu-item id="new-file" textValue="New file">
        <label av-label>New file</label>
      </div>
      <div av-menu-item id="copy-link" textValue="Copy link">
        <label av-label>Copy link</label>
      </div>
      <div av-menu-item id="edit-file" textValue="Edit file">
        <label av-label>Edit file</label>
      </div>
      <div av-menu-item id="delete-file" textValue="Delete file" variant="danger">
        <label av-label>Delete file</label>
      </div>
    </div>
  </av-dropdown-popover>
</av-dropdown>`;

export const DEMO_NAME = 'dropdown-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-dropdown-basic-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownBasicDemo {
  onAction(key: string): void {
    console.log(\`Selected: \${key}\`);
  }
}`;

@Component({
  selector: 'app-dropdown-basic-demo',
  imports: [
    AvDropdownImports,
    AvLabelComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DropdownBasicDemo {
  onAction(key: string): void {
    console.log(`Selected: ${key}`);
  }
}
