import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-64" av-progress-bar is-indeterminate aria-label="Loading">
  <label av-label>Loading...</label>
  <div av-progress-bar-track>
    <div av-progress-bar-fill></div>
  </div>
</div>`;

export const DEMO_NAME = 'progress-bar-indeterminate';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';

@Component({
  selector: 'app-progress-bar-indeterminate-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressBarIndeterminateDemo {}`;

@Component({
  selector: 'app-progress-bar-indeterminate-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ProgressBarIndeterminateDemo {}
