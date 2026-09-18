import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-muted">All buttons disabled</p>
    <av-button-group [disabled]="true">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-muted">Group disabled, but one button overrides</p>
    <av-button-group [disabled]="true">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button [disabled]="false"><span av-button-group-separator></span>Third (enabled)</button>
    </av-button-group>
  </div>
</div>`;

export const DEMO_NAME = 'button-group-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-button-group-disabled-demo',
  imports: [AvButtonGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupDisabledDemo {}`;

@Component({
  selector: 'app-button-group-disabled-demo',
  imports: [AvButtonGroupImports],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupDisabledDemo {}
