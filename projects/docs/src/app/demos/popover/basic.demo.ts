import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
  <av-popover>
    <button av-button av-popover-trigger>Click me</button>
    <av-popover-content>
      <div av-popover-dialog class="max-w-64">
        <h2 av-popover-heading>Popover Title</h2>
        <p class="mt-2 text-sm text-muted">
          This is the popover content. You can put any content here.
        </p>
      </div>
    </av-popover-content>
  </av-popover>
</div>`;

export const DEMO_NAME = 'popover-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

@Component({
  selector: 'app-popover-basic-demo',
  imports: [
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PopoverBasicDemo {}`;

@Component({
  selector: 'app-popover-basic-demo',
  imports: [
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: DEMO_TEMPLATE,
})
export class PopoverBasicDemo {}
