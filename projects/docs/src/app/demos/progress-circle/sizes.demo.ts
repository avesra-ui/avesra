import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';
import type { AvProgressCircleSize } from '@avesra/angular';

interface ProgressCircleSizeDemo {
  size: AvProgressCircleSize;
  value: number;
}

const DEMO_TEMPLATE = `<div class="flex items-center gap-6">
  @for (item of items; track item.size) {
    <div av-progress-circle aria-label="Loading" [size]="item.size" [value]="item.value">
      <svg av-progress-circle-track>
        <circle av-progress-circle-track-circle></circle>
        <circle av-progress-circle-fill-circle></circle>
      </svg>
    </div>
  }
</div>`;

export const DEMO_NAME = 'progress-circle-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';
import type { AvProgressCircleSize } from '@avesra/angular';

interface ProgressCircleSizeDemo {
  size: AvProgressCircleSize;
  value: number;
}

@Component({
  selector: 'app-progress-circle-sizes-demo',
  imports: [AvProgressCircleImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressCircleSizesDemo {
  readonly items: ProgressCircleSizeDemo[] = [
    { size: 'sm', value: 40 },
    { size: 'md', value: 60 },
    { size: 'lg', value: 80 },
  ];
}`;

@Component({
  selector: 'app-progress-circle-sizes-demo',
  imports: [AvProgressCircleImports],
  template: DEMO_TEMPLATE,
})
export class ProgressCircleSizesDemo {
  readonly items: ProgressCircleSizeDemo[] = [
    { size: 'sm', value: 40 },
    { size: 'md', value: 60 },
    { size: 'lg', value: 80 },
  ];
}
