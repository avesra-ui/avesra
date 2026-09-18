import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressCircleImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-3">
  <div av-progress-circle aria-label="Loading" [value]="75">
    <svg av-progress-circle-track>
      <circle av-progress-circle-track-circle></circle>
      <circle av-progress-circle-fill-circle></circle>
    </svg>
  </div>
  <label av-label>75% Complete</label>
</div>`;

export const DEMO_NAME = 'progress-circle-with-label';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressCircleImports,
} from '@avesra/angular';

@Component({
  selector: 'app-progress-circle-with-label-demo',
  imports: [
    AvProgressCircleImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressCircleWithLabelDemo {}`;

@Component({
  selector: 'app-progress-circle-with-label-demo',
  imports: [
    AvProgressCircleImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ProgressCircleWithLabelDemo {}
