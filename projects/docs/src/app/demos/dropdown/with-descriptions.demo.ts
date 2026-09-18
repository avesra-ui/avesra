import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDescriptionComponent,
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
        <div class="flex h-8 items-start justify-center pt-px">
          <app-icon icon="solar:add-square-linear" size="16" class="shrink-0 text-muted" />
        </div>
        <div class="flex flex-col">
          <label av-label>New file</label>
          <p av-description>Create a new file</p>
        </div>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>N</span>
        </kbd>
      </div>
      <div av-menu-item id="open-file" textValue="Open file">
        <div class="flex h-8 items-start justify-center pt-px">
          <app-icon icon="solar:folder-open-linear" size="16" class="shrink-0 text-muted" />
        </div>
        <div class="flex flex-col">
          <label av-label>Open file</label>
          <p av-description>Open an existing file</p>
        </div>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>O</span>
        </kbd>
      </div>
      <div av-menu-item id="save-file" textValue="Save file">
        <div class="flex h-8 items-start justify-center pt-px">
          <app-icon icon="solar:diskette-linear" size="16" class="shrink-0 text-muted" />
        </div>
        <div class="flex flex-col">
          <label av-label>Save file</label>
          <p av-description>Save the current file</p>
        </div>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>S</span>
        </kbd>
      </div>
      <div av-menu-item id="delete-file" textValue="Delete file" variant="danger">
        <div class="flex h-8 items-start justify-center pt-px">
          <app-icon icon="solar:trash-bin-trash-linear" size="16" class="shrink-0 text-danger" />
        </div>
        <div class="flex flex-col">
          <label av-label>Delete file</label>
          <p av-description>Move to trash</p>
        </div>
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
  AvDescriptionComponent,
  AvKbdImports,
  AvButtonComponent,
  AppIconComponent,
] as const;

export const DEMO_NAME = 'dropdown-with-descriptions';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvDropdownImports,
  AvKbdImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-dropdown-with-descriptions-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvDescriptionComponent, AvKbdImports, AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownWithDescriptionsDemo {
  onAction(key: string): void {
    console.log(\`Selected: \${key}\`);
  }
}`;

@Component({
  selector: 'app-dropdown-with-descriptions-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownWithDescriptionsDemo {
  onAction(key: string): void {
    console.log(`Selected: ${key}`);
  }
}
