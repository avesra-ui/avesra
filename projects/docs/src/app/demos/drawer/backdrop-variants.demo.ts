import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import {
  AvButtonComponent,
  AvDrawerImports,
  type AvDrawerBackdropVariant,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      @for (variant of backdropVariants; track variant) {
        <av-drawer [backdrop]="variant">
          <button av-button variant="secondary" av-drawer-trigger>
            {{ variant | titlecase }}
          </button>
          <ng-template avDrawerContent>
            <div av-drawer-dialog>
              <av-drawer-handle />
              <av-drawer-close-trigger />
              <div av-drawer-header>
                <h2 av-drawer-heading>Backdrop: {{ variant | titlecase }}</h2>
              </div>
              <div av-drawer-body>
                <p>
                  This drawer uses the <code>{{ variant }}</code> backdrop variant.
                </p>
              </div>
              <div av-drawer-footer>
                <button av-button class="w-full" av-drawer-close>Close</button>
              </div>
            </div>
          </ng-template>
        </av-drawer>
      }
    </div>`;

export const DEMO_NAME = 'drawer-backdrop-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvDrawerImports,
  type AvDrawerBackdropVariant,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-backdrop-variants-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    TitleCasePipe,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerBackdropVariantsDemo {
  readonly backdropVariants: readonly AvDrawerBackdropVariant[] = ['opaque', 'blur', 'transparent'];
}`;

@Component({
  selector: 'app-drawer-backdrop-variants-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    TitleCasePipe,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerBackdropVariantsDemo {
  readonly backdropVariants: readonly AvDrawerBackdropVariant[] = ['opaque', 'blur', 'transparent'];
}
