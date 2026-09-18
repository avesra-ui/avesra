import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex gap-6">
      <div av-switch size="sm">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Small</span>
      </div>
      <div av-switch size="md">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Medium</span>
      </div>
      <div av-switch size="lg">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Large</span>
      </div>
    </div>`;

export const DEMO_NAME = 'switch-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

@Component({
  selector: 'app-switch-sizes-demo',
  imports: [AvSwitchImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchSizesDemo {}`;

@Component({
  selector: 'app-switch-sizes-demo',
  imports: [AvSwitchImports],
  template: DEMO_TEMPLATE,
})
export class SwitchSizesDemo {}
