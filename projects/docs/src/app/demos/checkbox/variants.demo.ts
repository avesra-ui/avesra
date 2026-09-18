import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox variant="primary">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        <label av-label class="text-sm">Primary checkbox</label>
      </span>
    </div>
    <div av-checkbox variant="secondary">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        <label av-label class="text-sm">Secondary checkbox</label>
      </span>
    </div>`;

export const DEMO_NAME = 'checkbox-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-variants-demo',
  imports: [AvCheckboxImports, AvLabelComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`<div av-checkbox variant="primary">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        <label av-label class="text-sm">Primary checkbox</label>
      </span>
    </div>
    <div av-checkbox variant="secondary">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        <label av-label class="text-sm">Secondary checkbox</label>
      </span>
    </div>\`,
})
export class CheckboxVariantsDemo {}`;

@Component({
  selector: 'app-checkbox-variants-demo',
  imports: [
    AvCheckboxImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class CheckboxVariantsDemo {}
