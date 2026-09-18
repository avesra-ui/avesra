import { Component } from '@angular/core';

import { AV_TOOLTIP_SHOW_DELAY_DEFAULT, AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
      <button av-button variant="outline" avTooltip="Shows after 150ms" [show-delay]="150">
        Fast show (150ms)
      </button>
      <button av-button variant="outline" avTooltip="Uses default show delay" [show-delay]="showDelayDefault">
        Default show ({{ showDelayDefault }}ms)
      </button>
      <button
        av-button
        variant="outline"
        avTooltip="Stays visible 500ms after leave"
        [show-delay]="0"
        [hide-delay]="500"
      >
        Slow hide (500ms)
      </button>
      <button
        av-button
        variant="outline"
        avTooltip="1s show, 300ms hide"
        [show-delay]="1000"
        [hide-delay]="300"
      >
        Both delays
      </button>
    </div>`;

export const DEMO_NAME = 'tooltip-delays';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AV_TOOLTIP_SHOW_DELAY_DEFAULT, AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-delays-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipDelaysDemo {
  readonly showDelayDefault = AV_TOOLTIP_SHOW_DELAY_DEFAULT;
}`;

@Component({
  selector: 'app-tooltip-delays-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipDelaysDemo {
  readonly showDelayDefault = AV_TOOLTIP_SHOW_DELAY_DEFAULT;
}
