import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';
import type { AvProgressBarColor } from '@avesra/angular';

interface ProgressBarColorDemo {
  color: AvProgressBarColor;
  label: string;
}

const DEMO_TEMPLATE = `<div class="flex w-64 flex-col gap-6">
  @for (item of items; track item.color) {
    <div av-progress-bar [color]="item.color" [value]="50">
      <label av-label>{{ item.label }}</label>
      <span av-progress-bar-output></span>
      <div av-progress-bar-track>
        <div av-progress-bar-fill></div>
      </div>
    </div>
  }
</div>`;

export const DEMO_NAME = 'progress-bar-colors';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvProgressBarImports,
} from '@avesra/angular';
import type { AvProgressBarColor } from '@avesra/angular';

interface ProgressBarColorDemo {
  color: AvProgressBarColor;
  label: string;
}

@Component({
  selector: 'app-progress-bar-colors-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressBarColorsDemo {
  readonly items: ProgressBarColorDemo[] = [
    { color: 'default', label: 'Default' },
    { color: 'accent', label: 'Accent' },
    { color: 'success', label: 'Success' },
    { color: 'warning', label: 'Warning' },
    { color: 'danger', label: 'Danger' },
  ];
}`;

@Component({
  selector: 'app-progress-bar-colors-demo',
  imports: [
    AvProgressBarImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ProgressBarColorsDemo {
  readonly items: ProgressBarColorDemo[] = [
    { color: 'default', label: 'Default' },
    { color: 'accent', label: 'Accent' },
    { color: 'success', label: 'Success' },
    { color: 'warning', label: 'Warning' },
    { color: 'danger', label: 'Danger' },
  ];
}
