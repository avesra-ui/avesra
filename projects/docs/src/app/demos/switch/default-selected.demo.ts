import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-switch default-selected>
      <span av-switch-control>
        <span av-switch-thumb></span>
      </span>
      <span av-switch-content>Enable notifications</span>
    </div>`;

export const DEMO_NAME = 'switch-default-selected';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

@Component({
  selector: 'app-switch-default-selected-demo',
  imports: [AvSwitchImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchDefaultSelectedDemo {}`;

@Component({
  selector: 'app-switch-default-selected-demo',
  imports: [AvSwitchImports],
  template: DEMO_TEMPLATE,
})
export class SwitchDefaultSelectedDemo {}
