import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<button
      av-button
      variant="outline"
      avTooltip="This is a longer tooltip message that demonstrates wrapping behavior when the advisory text exceeds the maximum width of the overlay surface."
      [show-delay]="0"
    >
      Long tooltip
    </button>`;

export const DEMO_NAME = 'tooltip-long-text';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-long-text-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipLongTextDemo {}`;

@Component({
  selector: 'app-tooltip-long-text-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipLongTextDemo {}
