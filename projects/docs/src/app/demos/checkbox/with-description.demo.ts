import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        <label av-label class="text-sm">Accept terms and conditions</label>
        <p av-description>I agree to the terms and privacy policy</p>
      </span>
    </div>`;

export const DEMO_NAME = 'checkbox-with-description';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-with-description-demo',
  imports: [AvCheckboxImports, AvLabelComponent, AvDescriptionComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`<div av-checkbox>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        <label av-label class="text-sm">Accept terms and conditions</label>
        <p av-description>I agree to the terms and privacy policy</p>
      </span>
    </div>\`,
})
export class CheckboxWithDescriptionDemo {}`;

@Component({
  selector: 'app-checkbox-with-description-demo',
  imports: [
    AvCheckboxImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class CheckboxWithDescriptionDemo {}
