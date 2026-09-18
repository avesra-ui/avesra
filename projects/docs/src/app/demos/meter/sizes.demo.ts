import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';
import type { AvMeterColor, AvMeterSize } from '@avesra/angular';

interface MeterSizeDemo {
  size: AvMeterSize;
  color: AvMeterColor;
  label: string;
  value: number;
}

const DEMO_TEMPLATE = `<div class="flex w-64 flex-col gap-6">
  @for (item of items; track item.size) {
    <div av-meter [size]="item.size" [color]="item.color" [value]="item.value">
      <label av-label>{{ item.label }}</label>
      <span av-meter-output></span>
      <div av-meter-track>
        <div av-meter-fill></div>
      </div>
    </div>
  }
</div>`;

export const DEMO_NAME = 'meter-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvMeterImports,
} from '@avesra/angular';
import type { AvMeterColor, AvMeterSize } from '@avesra/angular';

interface MeterSizeDemo {
  size: AvMeterSize;
  color: AvMeterColor;
  label: string;
  value: number;
}

@Component({
  selector: 'app-meter-sizes-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class MeterSizesDemo {
  readonly items: MeterSizeDemo[] = [
    { size: 'sm', color: 'success', label: 'Small', value: 40 },
    { size: 'md', color: 'accent', label: 'Medium', value: 60 },
    { size: 'lg', color: 'warning', label: 'Large', value: 80 },
  ];
}`;

@Component({
  selector: 'app-meter-sizes-demo',
  imports: [
    AvMeterImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class MeterSizesDemo {
  readonly items: MeterSizeDemo[] = [
    { size: 'sm', color: 'success', label: 'Small', value: 40 },
    { size: 'md', color: 'accent', label: 'Medium', value: 60 },
    { size: 'lg', color: 'warning', label: 'Large', value: 80 },
  ];
}
