import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="grid grid-cols-3 gap-4">
  <div></div>
  <av-popover>
    <button av-button class="w-full" variant="tertiary" av-popover-trigger>Top</button>
    <av-popover-content placement="top">
      <av-popover-arrow />
      <div av-popover-dialog>
        <p class="text-sm">Top placement</p>
      </div>
    </av-popover-content>
  </av-popover>
  <div></div>

  <av-popover>
    <button av-button class="w-full" variant="tertiary" av-popover-trigger>Left</button>
    <av-popover-content placement="left">
      <av-popover-arrow />
      <div av-popover-dialog>
        <p class="text-sm">Left placement</p>
      </div>
    </av-popover-content>
  </av-popover>

  <div class="flex items-center justify-center">
    <span class="text-sm text-muted">Click buttons</span>
  </div>

  <av-popover>
    <button av-button class="w-full" variant="tertiary" av-popover-trigger>Right</button>
    <av-popover-content placement="right">
      <av-popover-arrow />
      <div av-popover-dialog>
        <p class="text-sm">Right placement</p>
      </div>
    </av-popover-content>
  </av-popover>

  <div></div>
  <av-popover>
    <button av-button class="w-full" variant="tertiary" av-popover-trigger>Bottom</button>
    <av-popover-content placement="bottom">
      <av-popover-arrow />
      <div av-popover-dialog>
        <p class="text-sm">Bottom placement</p>
      </div>
    </av-popover-content>
  </av-popover>
  <div></div>
</div>`;

export const DEMO_NAME = 'popover-placements';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';

@Component({
  selector: 'app-popover-placements-demo',
  imports: [
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PopoverPlacementsDemo {}`;

@Component({
  selector: 'app-popover-placements-demo',
  imports: [
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: DEMO_TEMPLATE,
})
export class PopoverPlacementsDemo {}
