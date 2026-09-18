import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvSpinnerComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-input-group>
      <input av-input-group-input value="Sending..." aria-label="Status" />
      <div av-input-group-suffix>
        <span av-spinner size="sm" color="current" aria-label="Loading"></span>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-with-loading-suffix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvSpinnerComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-group-with-loading-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvSpinnerComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithLoadingSuffixDemo {}`;

@Component({
  selector: 'app-input-group-with-loading-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvSpinnerComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithLoadingSuffixDemo {}
