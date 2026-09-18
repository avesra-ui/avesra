import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvSwitchImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="max-w-sm">
      <div av-switch>
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>
          Public profile
          <p av-description>Allow others to see your profile information</p>
        </span>
      </div>
    </div>`;

export const DEMO_NAME = 'switch-with-description';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvSwitchImports,
} from '@avesra/angular';

@Component({
  selector: 'app-switch-with-description-demo',
  imports: [
    AvSwitchImports,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchWithDescriptionDemo {}`;

@Component({
  selector: 'app-switch-with-description-demo',
  imports: [
    AvSwitchImports,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SwitchWithDescriptionDemo {}
