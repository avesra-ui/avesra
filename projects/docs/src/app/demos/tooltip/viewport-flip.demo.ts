import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex justify-end">
      <button
        av-button
        size="sm"
        variant="tertiary"
        avTooltip="Requested right, may flip near the viewport edge"
        tooltip-position="right"
        [show-delay]="0"
      >
        Near right edge
      </button>
    </div>`;

export const DEMO_NAME = 'tooltip-viewport-flip';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-viewport-flip-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipViewportFlipDemo {}`;

@Component({
  selector: 'app-tooltip-viewport-flip-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipViewportFlipDemo {}
