import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
      <button
        av-button
        variant="secondary"
        avTooltip="Default — hides when pointer leaves trigger"
        [auto-hide]="true"
      >
        auto-hide: true
      </button>
      <button
        av-button
        variant="secondary"
        avTooltip="Move pointer onto this tooltip before it closes"
        [auto-hide]="false"
        [show-delay]="0"
      >
        auto-hide: false
      </button>
    </div>`;

export const DEMO_NAME = 'tooltip-auto-hide';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-auto-hide-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipAutoHideDemo {}`;

@Component({
  selector: 'app-tooltip-auto-hide-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipAutoHideDemo {}
