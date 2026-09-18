import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-64" av-progress-bar [value]="60">
  <label av-label>Loading</label>
  <span av-progress-bar-output></span>
  <div av-progress-bar-track>
    <div av-progress-bar-fill></div>
  </div>
</div>`;

export const DEMO_NAME = 'progress-bar-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';

@Component({
  selector: 'app-progress-bar-basic-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressBarBasicDemo {}`;

@Component({
  selector: 'app-progress-bar-basic-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ProgressBarBasicDemo {}
