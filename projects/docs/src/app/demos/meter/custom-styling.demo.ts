import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-64" av-meter [value]="60">
  <label av-label>Storage</label>
  <span av-meter-output></span>
  <div av-meter-track class="!bg-purple-100 dark:!bg-purple-900">
    <div av-meter-fill class="!bg-purple-500"></div>
  </div>
</div>`;

export const DEMO_NAME = 'meter-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';

@Component({
  selector: 'app-meter-custom-styling-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class MeterCustomStylingDemo {}`;

@Component({
  selector: 'app-meter-custom-styling-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class MeterCustomStylingDemo {}
