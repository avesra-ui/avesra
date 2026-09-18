import { Component } from '@angular/core';

import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
      <button av-button variant="outline" avTooltip="Opens on hover" tooltip-event="hover">
        Hover
      </button>
      <input
        class="w-44 rounded-xl border border-border bg-field px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
        type="text"
        placeholder="Focus me"
        avTooltip="Opens on focus"
        tooltip-event="focus"
      />
      <input
        class="w-44 rounded-xl border border-border bg-field px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
        type="text"
        placeholder="Hover or focus"
        avTooltip="Opens on hover and focus"
        tooltip-event="both"
      />
    </div>`;

export const DEMO_NAME = 'tooltip-events';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-events-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipEventsDemo {}`;

@Component({
  selector: 'app-tooltip-events-demo',
  imports: [AvButtonComponent, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipEventsDemo {}
