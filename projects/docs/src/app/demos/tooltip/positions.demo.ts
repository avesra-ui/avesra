import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="grid max-w-md grid-cols-3 gap-4">
      <div></div>
      <button
        av-button
        class="w-full"
        size="sm"
        variant="tertiary"
        avTooltip="Top placement"
        tooltip-position="top"
      >
        Top
      </button>
      <div></div>

      <button
        av-button
        class="w-full"
        size="sm"
        variant="tertiary"
        avTooltip="Left placement"
        tooltip-position="left"
      >
        Left
      </button>
      <div class="flex items-center justify-center text-xs text-muted">Hover</div>
      <button
        av-button
        class="w-full"
        size="sm"
        variant="tertiary"
        avTooltip="Right placement"
        tooltip-position="right"
      >
        Right
      </button>

      <div></div>
      <button
        av-button
        class="w-full"
        size="sm"
        variant="tertiary"
        avTooltip="Bottom placement"
        tooltip-position="bottom"
      >
        Bottom
      </button>
      <div></div>
    </div>`;

export const DEMO_NAME = 'tooltip-positions';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-positions-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipPositionsDemo {}`;

@Component({
  selector: 'app-tooltip-positions-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipPositionsDemo {}
