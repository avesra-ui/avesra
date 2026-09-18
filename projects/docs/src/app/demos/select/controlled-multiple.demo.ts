import { Component, computed, signal } from '@angular/core';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="space-y-4">
  <div
    av-select
    class="w-64"
    placeholder="Select states"
    selection-mode="multiple"
    [(selectedKeys)]="selected"
  >
    <label av-label>States (controlled multiple)</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box selection-mode="multiple">
        <div av-list-box-item id="california" textValue="California">
          California
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="texas" textValue="Texas">
          Texas
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="florida" textValue="Florida">
          Florida
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="new-york" textValue="New York">
          New York
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="illinois" textValue="Illinois">
          Illinois
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="pennsylvania" textValue="Pennsylvania">
          Pennsylvania
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </av-select-popover>
  </div>
  <p class="text-sm text-muted">Selected: {{ selectedLabel() }}</p>
</div>`;

export const DEMO_NAME = 'select-controlled-multiple';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-controlled-multiple-demo',
  imports: [
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectControlledMultipleDemo {
  readonly selected = signal<string[]>(['california', 'texas']);
  readonly selectedLabel = computed(() => {
    const keys = this.selected();
    return keys.length > 0 ? keys.join(', ') : 'None';
  });
}`;

@Component({
  selector: 'app-select-controlled-multiple-demo',
  imports: [
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectControlledMultipleDemo {
  readonly selected = signal<string[]>(['california', 'texas']);
  readonly selectedLabel = computed(() => {
    const keys = this.selected();
    return keys.length > 0 ? keys.join(', ') : 'None';
  });
}
