import { Component } from '@angular/core';

import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-surface class="w-full rounded-3xl p-6">
      <av-checkbox-group name="interests" variant="secondary">
        <label av-label>Select your interests</label>
        <p av-description>Choose all that apply</p>
        <div av-checkbox value="coding">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <span av-checkbox-content>
            Coding
            <p av-description>Love building software</p>
          </span>
        </div>
        <div av-checkbox value="design">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <span av-checkbox-content>
            Design
            <p av-description>Enjoy creating beautiful interfaces</p>
          </span>
        </div>
        <div av-checkbox value="writing">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <span av-checkbox-content>
            Writing
            <p av-description>Passionate about content creation</p>
          </span>
        </div>
      </av-checkbox-group>
    </div>`;

export const DEMO_NAME = 'checkbox-group-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupOnSurfaceDemo {}`;

@Component({
  selector: 'app-checkbox-group-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupOnSurfaceDemo {}
