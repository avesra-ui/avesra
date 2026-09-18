import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogSize } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      @for (size of sizes; track size) {
        <av-alert-dialog [size]="size">
          <button av-button variant="secondary" av-alert-dialog-trigger>
            {{ size | titlecase }}
          </button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog>
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="default" class="bg-default text-foreground">
                  <app-icon icon="solar:rocket-linear" size="20" />
                </div>
                <h2 av-alert-dialog-heading>Size: {{ size | titlecase }}</h2>
              </div>
              <div av-alert-dialog-body>
                <p>
                  @if (size === 'cover') {
                    This alert dialog uses the <code>cover</code> size variant. It spans the full
                    screen with margins: 16px on mobile and 40px on desktop. Maintains rounded
                    corners and standard padding. Perfect for critical confirmations that need
                    maximum width while preserving alert dialog aesthetics.
                  } @else {
                    This alert dialog uses the <code>{{ size }}</code> size variant. On mobile
                    devices, all sizes adapt to near full-width for optimal viewing. On desktop,
                    each size provides a different maximum width to suit various content needs.
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

export const DEMO_NAME = 'alert-dialog-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogSize } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-alert-dialog-sizes-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogSizesDemo {
  readonly sizes: readonly AvAlertDialogSize[] = ['xs', 'sm', 'md', 'lg', 'cover'];
}`;

@Component({
  selector: 'app-alert-dialog-sizes-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogSizesDemo {
  readonly sizes: readonly AvAlertDialogSize[] = ['xs', 'sm', 'md', 'lg', 'cover'];
}
