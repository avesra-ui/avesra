import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import {
  AvButtonComponent,
  AvDrawerImports,
  type AvDrawerPlacement,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      @for (placement of placements; track placement) {
        <av-drawer [placement]="placement">
          <button av-button variant="secondary" av-drawer-trigger>
            {{ placement | titlecase }}
          </button>
          <ng-template avDrawerContent>
            <div av-drawer-dialog>
              <av-drawer-close-trigger />
              @if (placement === 'bottom') {
                <av-drawer-handle />
              }
              <div av-drawer-header>
                <h2 av-drawer-heading>{{ placement | titlecase }} Drawer</h2>
              </div>
              <div av-drawer-body>
                <p>
                  This drawer slides in from the <strong>{{ placement }}</strong> edge of the
                  screen.
                </p>
              </div>
              <div av-drawer-footer>
                <button av-button variant="secondary" av-drawer-close>Cancel</button>
                <button av-button av-drawer-close>Done</button>
              </div>
              @if (placement === 'top') {
                <av-drawer-handle />
              }
            </div>
          </ng-template>
        </av-drawer>
      }
    </div>`;

export const DEMO_NAME = 'drawer-placements';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvDrawerImports,
  type AvDrawerPlacement,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-placements-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    TitleCasePipe,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerPlacementsDemo {
  readonly placements: readonly AvDrawerPlacement[] = ['bottom', 'top', 'left', 'right'];
}`;

@Component({
  selector: 'app-drawer-placements-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    TitleCasePipe,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerPlacementsDemo {
  readonly placements: readonly AvDrawerPlacement[] = ['bottom', 'top', 'left', 'right'];
}
