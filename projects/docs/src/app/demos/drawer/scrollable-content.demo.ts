import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-drawer>
      <button av-button variant="secondary" av-drawer-trigger>Terms &amp; Conditions</button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog>
          <av-drawer-handle />
          <av-drawer-close-trigger />
          <div av-drawer-header>
            <h2 av-drawer-heading>Terms &amp; Conditions</h2>
          </div>
          <div av-drawer-body>
            @for (paragraph of scrollParagraphs; track paragraph) {
              <p class="mb-3">
                Paragraph {{ paragraph }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
                risus, sed porttitor quam.
              </p>
            }
          </div>
          <div av-drawer-footer>
            <button av-button variant="secondary" av-drawer-close>Decline</button>
            <button av-button av-drawer-close>Accept</button>
          </div>
        </div>
      </ng-template>
    </av-drawer>`;

export const DEMO_NAME = 'drawer-scrollable-content';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-scrollable-content-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerScrollableContentDemo {
  readonly scrollParagraphs = Array.from({ length: 20 }, (_, index) => index + 1);
}`;

@Component({
  selector: 'app-drawer-scrollable-content-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerScrollableContentDemo {
  readonly scrollParagraphs = Array.from({ length: 20 }, (_, index) => index + 1);
}
