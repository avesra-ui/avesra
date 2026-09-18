import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-switch aria-label="Enable notifications">
      <span av-switch-content>
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
      </span>
    </div>`;

export const DEMO_NAME = 'switch-without-label';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

@Component({
  selector: 'app-switch-without-label-demo',
  imports: [AvSwitchImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchWithoutLabelDemo {}`;

@Component({
  selector: 'app-switch-without-label-demo',
  imports: [AvSwitchImports],
  template: DEMO_TEMPLATE,
})
export class SwitchWithoutLabelDemo {}
