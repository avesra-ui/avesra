import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogBackdropVariant } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      @for (variant of backdropVariants; track variant) {
        <av-alert-dialog [backdrop]="variant">
          <button av-button variant="secondary" av-alert-dialog-trigger>
            {{ variant | titlecase }}
          </button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="accent"></div>
                <h2 av-alert-dialog-heading>Backdrop: {{ variant | titlecase }}</h2>
              </div>
              <div av-alert-dialog-body>
                <p>
                  @switch (variant) {
                    @case ('opaque') {
                      An opaque dark backdrop that completely obscures the background, providing
                      maximum focus on the dialog.
                    }
                    @case ('blur') {
                      A blurred backdrop that softly obscures the background while maintaining
                      visual context.
                    }
                    @default {
                      A transparent backdrop that keeps the background fully visible, useful for
                      less critical confirmations.
                    }
                  }
                </p>
              </div>
              <div av-alert-dialog-footer>
                <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
                <button av-button av-alert-dialog-close>Confirm</button>
              </div>
            </div>
          </ng-template>
        </av-alert-dialog>
      }
    </div>`;

export const DEMO_NAME = 'alert-dialog-backdrop-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogBackdropVariant } from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-backdrop-variants-demo',
  imports: [
    TitleCasePipe,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogBackdropVariantsDemo {
  readonly backdropVariants: readonly AvAlertDialogBackdropVariant[] = [
    'opaque',
    'blur',
    'transparent',
  ];
}`;

@Component({
  selector: 'app-alert-dialog-backdrop-variants-demo',
  imports: [
    TitleCasePipe,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogBackdropVariantsDemo {
  readonly backdropVariants: readonly AvAlertDialogBackdropVariant[] = [
    'opaque',
    'blur',
    'transparent',
  ];
}
