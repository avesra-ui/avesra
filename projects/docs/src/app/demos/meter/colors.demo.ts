import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';
import type { AvMeterColor } from '@avesra/angular';

interface MeterColorDemo {
  color: AvMeterColor;
  label: string;
}

const DEMO_TEMPLATE = `<div class="flex w-64 flex-col gap-6">
  @for (item of items; track item.color) {
    <div av-meter [color]="item.color" [value]="50">
      <label av-label>{{ item.label }}</label>
      <span av-meter-output></span>
      <div av-meter-track>
        <div av-meter-fill></div>
      </div>
    </div>
  }
</div>`;

export const DEMO_NAME = 'meter-colors';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';
import type { AvMeterColor } from '@avesra/angular';

interface MeterColorDemo {
  color: AvMeterColor;
  label: string;
}

@Component({
  selector: 'app-meter-colors-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class MeterColorsDemo {
  readonly items: MeterColorDemo[] = [
    { color: 'default', label: 'Default' },
    { color: 'accent', label: 'Accent' },
    { color: 'success', label: 'Success' },
    { color: 'warning', label: 'Warning' },
    { color: 'danger', label: 'Danger' },
  ];
}`;

@Component({
  selector: 'app-meter-colors-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class MeterColorsDemo {
  readonly items: MeterColorDemo[] = [
    { color: 'default', label: 'Default' },
    { color: 'accent', label: 'Accent' },
    { color: 'success', label: 'Success' },
    { color: 'warning', label: 'Warning' },
    { color: 'danger', label: 'Danger' },
  ];
}
