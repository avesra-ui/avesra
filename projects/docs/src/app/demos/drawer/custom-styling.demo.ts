import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-drawer placement="right" backdrop="blur">
      <button av-button variant="secondary" av-drawer-trigger>Open filters</button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog class="border-l border-border/80 bg-surface">
          <div av-drawer-header>
            <h2 av-drawer-heading class="text-foreground">Filters</h2>
          </div>
          <div av-drawer-body>
            <p class="text-sm text-muted">Narrow results by status, owner, or date.</p>
          </div>
          <div av-drawer-footer>
            <button av-button variant="secondary" av-drawer-close>Cancel</button>
            <button av-button av-drawer-close>Apply</button>
          </div>
        </div>
      </ng-template>
    </av-drawer>`;

export const DEMO_NAME = 'drawer-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-custom-styling-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerCustomStylingDemo {}`;

@Component({
  selector: 'app-drawer-custom-styling-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerCustomStylingDemo {}
