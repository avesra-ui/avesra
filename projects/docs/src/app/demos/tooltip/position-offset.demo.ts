import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
      <button
        av-button
        variant="tertiary"
        avTooltip="Shifted 12px right and 8px down"
        tooltip-position="top"
        [position-left]="12"
        [position-top]="8"
        [show-delay]="0"
      >
        Custom offset
      </button>
      <button
        av-button
        variant="tertiary"
        avTooltip="Baseline top placement"
        tooltip-position="top"
        [show-delay]="0"
      >
        No offset
      </button>
    </div>`;

export const DEMO_NAME = 'tooltip-position-offset';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-position-offset-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipPositionOffsetDemo {}`;

@Component({
  selector: 'app-tooltip-position-offset-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipPositionOffsetDemo {}
