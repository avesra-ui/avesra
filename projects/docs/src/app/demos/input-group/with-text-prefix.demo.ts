import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="ig-text-prefix">Website</label>
    <div av-input-group>
      <div av-input-group-prefix>https://</div>
      <input av-input-group-input id="ig-text-prefix" value="avesraui.com" />
    </div>`;

export const DEMO_NAME = 'input-group-with-text-prefix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-group-with-text-prefix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithTextPrefixDemo {}`;

@Component({
  selector: 'app-input-group-with-text-prefix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithTextPrefixDemo {}
