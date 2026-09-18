import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
  <av-popover>
    <button av-button variant="secondary" av-popover-trigger>With Arrow</button>
    <av-popover-content>
      <av-popover-arrow />
      <div av-popover-dialog class="max-w-64">
        <h2 av-popover-heading>Popover with Arrow</h2>
        <p class="mt-2 text-sm text-muted">
          The arrow shows which element triggered the popover.
        </p>
      </div>
    </av-popover-content>
  </av-popover>

  <av-popover>
    <button
      av-button
      icon-only
      variant="tertiary"
      av-popover-trigger
      aria-label="More options"
    >
      <app-icon icon="solar:menu-dots-linear" size="20" />
    </button>
    <av-popover-content [offset]="10">
      <av-popover-arrow />
      <div av-popover-dialog class="max-w-64">
        <h2 av-popover-heading>Popover with Arrow</h2>
        <p class="mt-2 text-sm text-muted">
          The arrow shows which element triggered the popover.
        </p>
      </div>
    </av-popover-content>
  </av-popover>
</div>`;

export const DEMO_NAME = 'popover-with-arrow';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvPopoverImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-popover-with-arrow-demo',
  imports: [
    AppIconComponent,
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PopoverWithArrowDemo {}`;

@Component({
  selector: 'app-popover-with-arrow-demo',
  imports: [
    AppIconComponent,
    AvButtonComponent,
    AvPopoverImports,
  ],
  template: DEMO_TEMPLATE,
})
export class PopoverWithArrowDemo {}
