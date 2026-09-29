import { Component, computed, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex  flex-col items-center justify-center gap-4">
  <p class="text-sm text-muted">Selected: {{ selectedLabel() }}</p>
  <av-dropdown>
    <button av-button variant="secondary" aria-label="Menu" av-dropdown-trigger>Actions</button>
    <ng-template avDropdownContent>
      <div av-dropdown-popover class="min-w-[220px]">
      <div av-dropdown-menu selection-mode="multiple" [(selectedKeys)]="selected">
        <div av-dropdown-menu-item id="bold" textValue="Bold">
          <label av-label>Bold</label>
          <span av-dropdown-menu-item-indicator></span>
        </div>
        <div av-dropdown-menu-item id="italic" textValue="Italic">
          <label av-label>Italic</label>
          <span av-dropdown-menu-item-indicator></span>
        </div>
        <div av-dropdown-menu-item id="underline" textValue="Underline">
          <label av-label>Underline</label>
          <span av-dropdown-menu-item-indicator></span>
        </div>
      </div>
      </div>
    </ng-template>
  </av-dropdown>
</div>`;

const DEMO_IMPORTS = [
  AvDropdownImports,
  AvLabelComponent,
  AvButtonComponent,
] as const;

export const DEMO_NAME = 'dropdown-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-dropdown-controlled-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownControlledDemo {
  readonly selected = signal<string[]>(['bold']);
  readonly selectedLabel = computed(() => {
    const keys = this.selected();
    return keys.length > 0 ? keys.join(', ') : 'None';
  });
}`;

@Component({
  selector: 'app-dropdown-controlled-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownControlledDemo {
  readonly selected = signal<string[]>(['bold']);
  readonly selectedLabel = computed(() => {
    const keys = this.selected();
    return keys.length > 0 ? keys.join(', ') : 'None';
  });
}
