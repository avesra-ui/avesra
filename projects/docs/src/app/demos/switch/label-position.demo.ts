import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <div av-switch>
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Label after</span>
      </div>
      <div av-switch>
        <span av-switch-content>Label before</span>
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
      </div>
    </div>`;

export const DEMO_NAME = 'switch-label-position';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

@Component({
  selector: 'app-switch-label-position-demo',
  imports: [AvSwitchImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchLabelPositionDemo {}`;

@Component({
  selector: 'app-switch-label-position-demo',
  imports: [AvSwitchImports],
  template: DEMO_TEMPLATE,
})
export class SwitchLabelPositionDemo {}
