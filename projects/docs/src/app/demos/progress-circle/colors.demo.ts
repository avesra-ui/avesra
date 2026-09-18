import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';
import type { AvProgressCircleColor } from '@avesra/angular';

interface ProgressCircleColorDemo {
  color: AvProgressCircleColor;
  label: string;
}

const DEMO_TEMPLATE = `<div class="flex items-center gap-6">
  @for (item of items; track item.color) {
    <div av-progress-circle [aria-label]="item.label" [color]="item.color" [value]="60">
      <svg av-progress-circle-track>
        <circle av-progress-circle-track-circle></circle>
        <circle av-progress-circle-fill-circle></circle>
      </svg>
    </div>
  }
</div>`;

export const DEMO_NAME = 'progress-circle-colors';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';
import type { AvProgressCircleColor } from '@avesra/angular';

interface ProgressCircleColorDemo {
  color: AvProgressCircleColor;
  label: string;
}

@Component({
  selector: 'app-progress-circle-colors-demo',
  imports: [AvProgressCircleImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressCircleColorsDemo {
  readonly items: ProgressCircleColorDemo[] = [
    { color: 'default', label: 'Default' },
    { color: 'accent', label: 'Accent' },
    { color: 'success', label: 'Success' },
    { color: 'warning', label: 'Warning' },
    { color: 'danger', label: 'Danger' },
  ];
}`;

@Component({
  selector: 'app-progress-circle-colors-demo',
  imports: [AvProgressCircleImports],
  template: DEMO_TEMPLATE,
})
export class ProgressCircleColorsDemo {
  readonly items: ProgressCircleColorDemo[] = [
    { color: 'default', label: 'Default' },
    { color: 'accent', label: 'Accent' },
    { color: 'success', label: 'Success' },
    { color: 'warning', label: 'Warning' },
    { color: 'danger', label: 'Danger' },
  ];
}
