import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogPlacement } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      @for (placement of placements; track placement) {
        <av-alert-dialog [placement]="placement">
          <button av-button variant="secondary" av-alert-dialog-trigger>
            {{ placement | titlecase }}
          </button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="accent"></div>
                <h2 av-alert-dialog-heading>
                  {{
                    placement === 'auto'
                      ? 'Auto Placement'
                      : (placement | titlecase) + ' Position'
                  }}
                </h2>
              </div>
              <div av-alert-dialog-body>
                <p>
                  @if (placement === 'auto') {
                    Automatically positions at the bottom on mobile and center on desktop for
                    optimal user experience.
                  } @else {
                    This dialog is positioned at the {{ placement }} of the viewport. Critical
                    confirmations are typically centered for maximum attention.
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

export const DEMO_NAME = 'alert-dialog-placements';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogPlacement } from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-placements-demo',
  imports: [
    TitleCasePipe,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogPlacementsDemo {
  readonly placements: readonly AvAlertDialogPlacement[] = ['auto', 'top', 'center', 'bottom'];
}`;

@Component({
  selector: 'app-alert-dialog-placements-demo',
  imports: [
    TitleCasePipe,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogPlacementsDemo {
  readonly placements: readonly AvAlertDialogPlacement[] = ['auto', 'top', 'center', 'bottom'];
}
