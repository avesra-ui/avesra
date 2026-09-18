import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  class="w-64"
  av-meter
  [min]="0"
  [max]="1000"
  [value]="750"
  [format-options]="formatOptions"
>
  <label av-label>Revenue</label>
  <span av-meter-output></span>
  <div av-meter-track>
    <div av-meter-fill></div>
  </div>
</div>`;

export const DEMO_NAME = 'meter-custom-value';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';

@Component({
  selector: 'app-meter-custom-value-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class MeterCustomValueDemo {
  readonly formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
  };
}`;

@Component({
  selector: 'app-meter-custom-value-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class MeterCustomValueDemo {
  readonly formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
  };
}
