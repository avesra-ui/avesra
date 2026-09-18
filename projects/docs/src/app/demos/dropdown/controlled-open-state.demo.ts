import { Component, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex min-w-sm flex-col items-center justify-center gap-4">
  <p class="text-sm text-muted">
    Dropdown is: <strong>{{ open() ? 'open' : 'closed' }}</strong>
  </p>
  <av-dropdown [(open)]="open">
    <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Actions</button>
    <av-dropdown-popover>
      <div av-dropdown-menu>
        <div av-menu-item id="new-file" textValue="New file">
          <label av-label>New file</label>
        </div>
        <div av-menu-item id="open-file" textValue="Open file">
          <label av-label>Open file</label>
        </div>
        <div av-menu-item id="save-file" textValue="Save file">
          <label av-label>Save file</label>
        </div>
        <div av-menu-item id="delete-file" textValue="Delete file" variant="danger">
          <label av-label>Delete file</label>
        </div>
      </div>
    </av-dropdown-popover>
  </av-dropdown>
</div>`;

const DEMO_IMPORTS = [
  AvDropdownImports,
  AvLabelComponent,
  AvButtonComponent,
] as const;

export const DEMO_NAME = 'dropdown-controlled-open-state';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-dropdown-controlled-open-state-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownControlledOpenStateDemo {
  readonly open = signal(false);
}`;

@Component({
  selector: 'app-dropdown-controlled-open-state-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownControlledOpenStateDemo {
  readonly open = signal(false);
}
