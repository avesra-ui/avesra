import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="ig-price">Set a price</label>
    <div av-input-group>
      <div av-input-group-prefix>$</div>
      <input av-input-group-input id="ig-price" type="number" value="10" />
      <div av-input-group-suffix>USD</div>
    </div>
    <p av-description>What customers would pay</p>`;

export const DEMO_NAME = 'input-group-with-prefix-and-suffix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-group-with-prefix-and-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`<label av-label for="ig-price">Set a price</label>
    <div av-input-group>
      <div av-input-group-prefix>\$</div>
      <input av-input-group-input id="ig-price" type="number" value="10" />
      <div av-input-group-suffix>USD</div>
    </div>
    <p av-description>What customers would pay</p>\`,
})
export class InputGroupWithPrefixAndSuffixDemo {}`;

@Component({
  selector: 'app-input-group-with-prefix-and-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithPrefixAndSuffixDemo {}
