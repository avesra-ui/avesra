import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDrawerImports,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-drawer placement="right">
      <button av-button variant="secondary" av-drawer-trigger>Edit Profile</button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog>
          <av-drawer-close-trigger />
          <div av-drawer-header>
            <h2 av-drawer-heading>Edit Profile</h2>
          </div>
          <div av-drawer-body>
            <form class="flex flex-col gap-4">
              <div class="flex w-full flex-col gap-1">
                <label av-label for="drawer-name">Name</label>
                <input
                  av-input
                  full-width
                  id="drawer-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  variant="secondary"
                />
              </div>
              <div class="flex w-full flex-col gap-1">
                <label av-label for="drawer-email">Email</label>
                <input
                  av-input
                  full-width
                  id="drawer-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  variant="secondary"
                />
              </div>
              <div class="flex w-full flex-col gap-1">
                <label av-label for="drawer-bio">Bio</label>
                <input
                  av-input
                  full-width
                  id="drawer-bio"
                  name="bio"
                  type="text"
                  placeholder="Tell us about yourself"
                  variant="secondary"
                />
              </div>
            </form>
          </div>
          <div av-drawer-footer>
            <button av-button variant="secondary" av-drawer-close>Cancel</button>
            <button av-button av-drawer-close>Save Changes</button>
          </div>
        </div>
      </ng-template>
    </av-drawer>`;

export const DEMO_NAME = 'drawer-with-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-with-form-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    AvInputComponent,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerWithFormDemo {}`;

@Component({
  selector: 'app-drawer-with-form-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    AvInputComponent,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerWithFormDemo {}
