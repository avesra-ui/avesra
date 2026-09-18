import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  class="w-64"
  av-progress-bar
  [min]="0"
  [max]="1000"
  [value]="750"
  [format-options]="formatOptions"
>
  <label av-label>Progress</label>
  <span av-progress-bar-output></span>
  <div av-progress-bar-track>
    <div av-progress-bar-fill></div>
  </div>
</div>`;

export const DEMO_NAME = 'progress-bar-custom-value';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';

@Component({
  selector: 'app-progress-bar-custom-value-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressBarCustomValueDemo {
  readonly formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
  };
}`;

@Component({
  selector: 'app-progress-bar-custom-value-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ProgressBarCustomValueDemo {
  readonly formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
  };
}
