import { Component, signal } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap items-center gap-3">
      <button
        av-button
        variant="secondary"
        [avTooltip]="dynamicLabel()"
        [show-delay]="0"
      >
        Dynamic trigger
      </button>
      <button av-button variant="outline" (click)="updateDynamicTooltip()">
        Update tooltip text
      </button>
      <span class="text-sm text-muted">Clicks: {{ clicks() }}</span>
    </div>`;

export const DEMO_NAME = 'tooltip-dynamic-content';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-dynamic-content-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipDynamicContentDemo {
  readonly dynamicLabel = signal('Hover to see dynamic content');
  readonly clicks = signal(0);

  updateDynamicTooltip(): void {
    this.clicks.update((value) => value + 1);
    this.dynamicLabel.set(\`Clicked \${this.clicks()} time(s)\`);
  }
}`;

@Component({
  selector: 'app-tooltip-dynamic-content-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipDynamicContentDemo {
  readonly dynamicLabel = signal('Hover to see dynamic content');
  readonly clicks = signal(0);

  updateDynamicTooltip(): void {
    this.clicks.update((value) => value + 1);
    this.dynamicLabel.set(`Clicked ${this.clicks()} time(s)`);
  }
}
