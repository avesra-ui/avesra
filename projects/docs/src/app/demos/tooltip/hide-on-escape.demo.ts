import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
      <button av-button variant="outline" avTooltip="Press Escape to close" [show-delay]="0">
        hide-on-escape: true
      </button>
      <button
        av-button
        variant="outline"
        avTooltip="Escape will not close this tooltip"
        [show-delay]="0"
        [hide-on-escape]="false"
      >
        hide-on-escape: false
      </button>
    </div>`;

export const DEMO_NAME = 'tooltip-hide-on-escape';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-hide-on-escape-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipHideOnEscapeDemo {}`;

@Component({
  selector: 'app-tooltip-hide-on-escape-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipHideOnEscapeDemo {}
