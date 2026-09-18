import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
  <av-popover>
    <button av-button av-popover-trigger>Open</button>
    <av-popover-content overlay-class="bg-accent text-accent-foreground">
      <div av-popover-dialog class="max-w-64">
        <h2 av-popover-heading>Custom Styled</h2>
        <p class="mt-2 text-sm opacity-90">This popover has custom styling</p>
      </div>
    </av-popover-content>
  </av-popover>
</div>`;

export const DEMO_NAME = 'popover-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

@Component({
  selector: 'app-popover-custom-styling-demo',
  imports: [
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PopoverCustomStylingDemo {}`;

@Component({
  selector: 'app-popover-custom-styling-demo',
  imports: [
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: DEMO_TEMPLATE,
})
export class PopoverCustomStylingDemo {}
