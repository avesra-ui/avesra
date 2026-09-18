import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<button
  av-button
  class="cursor-help"
  variant="secondary"
  avTooltip="Copied to clipboard"
  [show-delay]="0"
>
  Share link
</button>`;

export const DEMO_NAME = 'tooltip-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-custom-styles-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TooltipCustomStylesDemo {}`;

@Component({
  selector: 'app-tooltip-custom-styles-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipCustomStylesDemo {}
