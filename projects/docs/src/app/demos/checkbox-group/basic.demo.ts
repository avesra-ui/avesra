import { Component } from '@angular/core';

import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-checkbox-group name="interests">
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
    </av-checkbox-group>`;

export const DEMO_NAME = 'checkbox-group-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-basic-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupBasicDemo {}`;

@Component({
  selector: 'app-checkbox-group-basic-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupBasicDemo {}
