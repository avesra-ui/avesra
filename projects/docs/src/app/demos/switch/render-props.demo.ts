import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-switch [(selected)]="isSelected">
      <span av-switch-control>
        <span av-switch-thumb></span>
      </span>
      <span av-switch-content>{{ isSelected() ? 'Enabled' : 'Disabled' }}</span>
    </div>`;

export const DEMO_NAME = 'switch-render-props';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

@Component({
  selector: 'app-switch-render-props-demo',
  imports: [AvSwitchImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchRenderPropsDemo {
  readonly isSelected = signal(false);
}`;

@Component({
  selector: 'app-switch-render-props-demo',
  imports: [AvSwitchImports],
  template: DEMO_TEMPLATE,
})
export class SwitchRenderPropsDemo {
  readonly isSelected = signal(false);
}
