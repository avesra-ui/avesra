import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-64" av-meter [value]="60">
  <label av-label>Storage</label>
  <span av-meter-output></span>
  <div av-meter-track>
    <div av-meter-fill></div>
  </div>
</div>`;

export const DEMO_NAME = 'meter-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';

@Component({
  selector: 'app-meter-basic-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class MeterBasicDemo {}`;

@Component({
  selector: 'app-meter-basic-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class MeterBasicDemo {}
