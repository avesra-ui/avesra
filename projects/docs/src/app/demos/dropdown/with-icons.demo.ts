import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvKbdImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Actions</button>
  <av-dropdown-popover>
    <div av-dropdown-menu (action)="onAction($event)">
      <div av-menu-item id="new-file" textValue="New file">
        <app-icon icon="solar:add-square-linear" size="16" class="shrink-0 text-muted" />
        <label av-label>New file</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>N</span>
        </kbd>
      </div>
      <div av-menu-item id="open-file" textValue="Open file">
        <app-icon icon="solar:folder-open-linear" size="16" class="shrink-0 text-muted" />
        <label av-label>Open file</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>O</span>
        </kbd>
      </div>
      <div av-menu-item id="save-file" textValue="Save file">
        <app-icon icon="solar:diskette-linear" size="16" class="shrink-0 text-muted" />
        <label av-label>Save file</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>S</span>
        </kbd>
      </div>
      <div av-menu-item id="delete-file" textValue="Delete file" variant="danger">
        <app-icon icon="solar:trash-bin-trash-linear" size="16" class="shrink-0 text-danger" />
        <label av-label>Delete file</label>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <abbr av-kbd-abbr key-value="shift"></abbr>
          <span av-kbd-content>D</span>
        </kbd>
      </div>
    </div>
  </av-dropdown-popover>
</av-dropdown>`;

const DEMO_IMPORTS = [
  AvDropdownImports,
  AvLabelComponent,
  AvKbdImports,
  AvButtonComponent,
  AppIconComponent,
] as const;

export const DEMO_NAME = 'dropdown-with-icons';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDropdownImports,
  AvKbdImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-dropdown-with-icons-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvKbdImports, AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownWithIconsDemo {
  onAction(key: string): void {
    console.log(\`Selected: \${key}\`);
  }
}`;

@Component({
  selector: 'app-dropdown-with-icons-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownWithIconsDemo {
  onAction(key: string): void {
    console.log(`Selected: ${key}`);
  }
}
