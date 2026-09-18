import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-drawer [dismissable]="false">
      <button av-button variant="secondary" av-drawer-trigger>Important Action</button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog>
          <div av-drawer-header>
            <h2 av-drawer-heading>Confirm Action</h2>
          </div>
          <div av-drawer-body>
            <p>
              This drawer cannot be dismissed by clicking outside. You must use one of the buttons
              below.
            </p>
          </div>
          <div av-drawer-footer>
            <button av-button variant="secondary" av-drawer-close>Cancel</button>
            <button av-button av-drawer-close>Confirm</button>
          </div>
        </div>
      </ng-template>
    </av-drawer>`;

export const DEMO_NAME = 'drawer-non-dismissable';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-non-dismissable-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerNonDismissableDemo {}`;

@Component({
  selector: 'app-drawer-non-dismissable-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerNonDismissableDemo {}
