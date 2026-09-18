import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvDropdownImports,
  AvKbdImports,
  AvLabelComponent,
  AvSeparatorImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-dropdown>
  <button av-button variant="secondary" icon-only aria-label="Menu" av-dropdown-trigger>
    <app-icon icon="solar:menu-dots-linear" size="16" />
  </button>
  <av-dropdown-popover>
    <div av-dropdown-menu (action)="onAction($event)">
      <div av-menu-section>
        <p class="px-2.5 py-1 text-xs font-medium text-muted">Actions</p>
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
        <div av-menu-item id="edit-file" textValue="Edit file">
          <div class="flex h-8 items-start justify-center pt-px">
            <app-icon icon="solar:pen-linear" size="16" class="shrink-0 text-muted" />
          </div>
          <div class="flex flex-col">
            <label av-label>Edit file</label>
            <p av-description>Make changes</p>
          </div>
          <kbd av-kbd variant="light" class="ms-auto">
            <abbr av-kbd-abbr key-value="command"></abbr>
            <span av-kbd-content>E</span>
          </kbd>
        </div>
      </div>
      <div av-separator></div>
      <div av-menu-section>
        <p class="px-2.5 py-1 text-xs font-medium text-muted">Danger zone</p>
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
    </div>
  </av-dropdown-popover>
</av-dropdown>`;

const DEMO_IMPORTS = [
  AvDropdownImports,
  AvLabelComponent,
  AvDescriptionComponent,
  AvKbdImports,
  AvSeparatorImports,
  AvButtonComponent,
  AppIconComponent,
] as const;

export const DEMO_NAME = 'dropdown-with-sections';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvDropdownImports,
  AvKbdImports,
  AvLabelComponent,
  AvSeparatorImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-dropdown-with-sections-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvDescriptionComponent, AvKbdImports, AvSeparatorImports, AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownWithSectionsDemo {
  onAction(key: string): void {
    console.log(\`Selected: \${key}\`);
  }
}`;

@Component({
  selector: 'app-dropdown-with-sections-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownWithSectionsDemo {
  onAction(key: string): void {
    console.log(`Selected: ${key}`);
  }
}
