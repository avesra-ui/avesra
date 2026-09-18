import { Component, computed, signal } from '@angular/core';

import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const STATES = [
  { id: 'california', name: 'California' },
  { id: 'texas', name: 'Texas' },
  { id: 'florida', name: 'Florida' },
  { id: 'new-york', name: 'New York' },
  { id: 'illinois', name: 'Illinois' },
  { id: 'pennsylvania', name: 'Pennsylvania' },
] as const;

const DEMO_TEMPLATE = `<div class="space-y-2">
  <div
    av-select
    class="w-64"
    placeholder="Select a state"
    [(selectedKeys)]="selected"
  >
    <label av-label>State (controlled)</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box>
        @for (state of states; track state.id) {
          <div av-list-box-item [id]="state.id" [textValue]="state.name">
            {{ state.name }}
            <span av-list-box-item-indicator></span>
          </div>
        }
      </div>
    </av-select-popover>
  </div>
  <p class="text-sm text-muted">Selected: {{ selectedLabel() }}</p>
</div>`;

export const DEMO_NAME = 'select-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-controlled-demo',
  imports: [
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectControlledDemo {
  readonly states = ${JSON.stringify(STATES, null, 2)};
  readonly selected = signal<string[]>(['california']);
  readonly selectedLabel = computed(() => {
    const key = this.selected()[0];
    return this.states.find((state) => state.id === key)?.name ?? 'None';
  });
}`;

@Component({
  selector: 'app-select-controlled-demo',
  imports: [
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectControlledDemo {
  readonly states = STATES;
  readonly selected = signal<string[]>(['california']);
  readonly selectedLabel = computed(() => {
    const key = this.selected()[0];
    return this.states.find((state) => state.id === key)?.name ?? 'None';
  });
}
