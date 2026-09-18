import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <div av-switch [(selected)]="isSelected">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Enable notifications</span>
      </div>
      <p class="text-sm text-muted">Switch is {{ isSelected() ? 'on' : 'off' }}</p>
    </div>`;

export const DEMO_NAME = 'switch-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

@Component({
  selector: 'app-switch-controlled-demo',
  imports: [AvSwitchImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchControlledDemo {
  readonly isSelected = signal(false);
}`;

@Component({
  selector: 'app-switch-controlled-demo',
  imports: [AvSwitchImports],
  template: DEMO_TEMPLATE,
})
export class SwitchControlledDemo {
  readonly isSelected = signal(false);
}
