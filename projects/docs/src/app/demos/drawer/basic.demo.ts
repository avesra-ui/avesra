import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-drawer placement="right">
      <button av-button variant="secondary" av-drawer-trigger>Open Drawer</button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog>
          <div av-drawer-header>
            <h2 av-drawer-heading>Drawer Title</h2>
          </div>
          <div av-drawer-body>
            <p>
              This is a right-side drawer. It slides in from the edge of the screen with a smooth
              CSS transition.
            </p>
          </div>
          <div av-drawer-footer>
            <button av-button variant="secondary" av-drawer-close>Cancel</button>
            <button av-button av-drawer-close>Confirm</button>
          </div>
        </div>
      </ng-template>
    </av-drawer>`;

export const DEMO_NAME = 'drawer-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-basic-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerBasicDemo {}`;

@Component({
  selector: 'app-drawer-basic-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerBasicDemo {}
