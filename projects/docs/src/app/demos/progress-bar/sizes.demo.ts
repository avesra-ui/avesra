import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';
import type { AvProgressBarSize } from '@avesra/angular';

interface ProgressBarSizeDemo {
  size: AvProgressBarSize;
  label: string;
  value: number;
}

const DEMO_TEMPLATE = `<div class="flex w-64 flex-col gap-6">
  @for (item of items; track item.size) {
    <div av-progress-bar [size]="item.size" [value]="item.value">
      <label av-label>{{ item.label }}</label>
      <span av-progress-bar-output></span>
      <div av-progress-bar-track>
        <div av-progress-bar-fill></div>
      </div>
    </div>
  }
</div>`;

export const DEMO_NAME = 'progress-bar-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';
import type { AvProgressBarSize } from '@avesra/angular';

interface ProgressBarSizeDemo {
  size: AvProgressBarSize;
  label: string;
  value: number;
}

@Component({
  selector: 'app-progress-bar-sizes-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressBarSizesDemo {
  readonly items: ProgressBarSizeDemo[] = [
    { size: 'sm', label: 'Small', value: 40 },
    { size: 'md', label: 'Medium', value: 60 },
    { size: 'lg', label: 'Large', value: 80 },
  ];
}`;

@Component({
  selector: 'app-progress-bar-sizes-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ProgressBarSizesDemo {
  readonly items: ProgressBarSizeDemo[] = [
    { size: 'sm', label: 'Small', value: 40 },
    { size: 'md', label: 'Medium', value: 60 },
    { size: 'lg', label: 'Large', value: 80 },
  ];
}
