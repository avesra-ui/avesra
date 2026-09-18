import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<button
      av-button
      variant="primary"
      [avTooltip]="richTooltip"
      tooltip-position="bottom"
      [show-delay]="0"
    >
      Rich tooltip
    </button>
    <ng-template #richTooltip>
      <div class="flex flex-col gap-1">
        <span class="font-medium">Avesra Tooltip</span>
        <span class="text-muted">TemplateRef with custom layout</span>
      </div>
    </ng-template>`;

export const DEMO_NAME = 'tooltip-template-content';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-template-content-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipTemplateContentDemo {}`;

@Component({
  selector: 'app-tooltip-template-content-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipTemplateContentDemo {}
