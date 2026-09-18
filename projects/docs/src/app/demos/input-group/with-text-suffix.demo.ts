import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="ig-text-suffix">Website</label>
    <div av-input-group>
      <input av-input-group-input id="ig-text-suffix" value="avesraui" />
      <div av-input-group-suffix>.com</div>
    </div>`;

export const DEMO_NAME = 'input-group-with-text-suffix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-group-with-text-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithTextSuffixDemo {}`;

@Component({
  selector: 'app-input-group-with-text-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithTextSuffixDemo {}
