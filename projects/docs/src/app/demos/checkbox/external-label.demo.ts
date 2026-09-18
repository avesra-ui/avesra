import { Component } from '@angular/core';

import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-3">
      <div av-checkbox id="label-marketing">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content></span>
      </div>
      <label av-label for="label-marketing">Send me marketing emails</label>
    </div>`;

export const DEMO_NAME = 'checkbox-external-label';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-external-label-demo',
  imports: [
    AvCheckboxImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxExternalLabelDemo {}`;

@Component({
  selector: 'app-checkbox-external-label-demo',
  imports: [
    AvCheckboxImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxExternalLabelDemo {}
