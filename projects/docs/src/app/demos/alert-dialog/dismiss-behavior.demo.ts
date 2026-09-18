import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex max-w-sm flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">Require explicit action (default)</h3>
        <p class="text-sm text-muted">
          Alert dialogs require explicit action by default. Backdrop click and Escape are disabled
          unless you opt in with <code>dismissable</code> and
          <code>keyboard-dismiss-disabled="false"</code>.
        </p>
        <av-alert-dialog>
          <button av-button variant="secondary" av-alert-dialog-trigger>Open Alert Dialog</button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="danger">
                  <app-icon icon="solar:info-circle-linear" size="20" />
                </div>
                <h2 av-alert-dialog-heading>Action required</h2>
                <p class="text-sm leading-5 text-muted">
                  Clicking the backdrop or pressing Escape won't close this dialog
                </p>
              </div>
              <div av-alert-dialog-body>
                <p>
                  Try clicking outside this alert dialog on the overlay — it won't close. You must
                  use the action buttons to dismiss it.
                </p>
              </div>
              <div av-alert-dialog-footer>
                <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
                <button av-button av-alert-dialog-close>Confirm</button>
              </div>
            </div>
          </ng-template>
        </av-alert-dialog>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">Dismissable</h3>
        <p class="text-sm text-muted">
          For less critical confirmations, set <code>dismissable</code> and
          <code>keyboard-dismiss-disabled="false"</code> on <code>av-alert-dialog</code>.
        </p>
        <av-alert-dialog [dismissable]="true" [keyboard-dismiss-disabled]="false">
          <button av-button variant="secondary" av-alert-dialog-trigger>Open Alert Dialog</button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="accent">
                  <app-icon icon="solar:info-circle-linear" size="20" />
                </div>
                <h2 av-alert-dialog-heading>Dismissable</h2>
                <p class="text-sm leading-5 text-muted">Backdrop click and Escape work</p>
              </div>
              <div av-alert-dialog-body>
                <p>
                  Click outside or press Escape to dismiss. Use this pattern for low-stakes
                  confirmations that don't require forced attention.
                </p>
              </div>
              <div av-alert-dialog-footer>
                <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
                <button av-button av-alert-dialog-close>Confirm</button>
              </div>
            </div>
          </ng-template>
        </av-alert-dialog>
      </div>
    </div>`;

export const DEMO_NAME = 'alert-dialog-dismiss-behavior';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-alert-dialog-dismiss-behavior-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogDismissBehaviorDemo {}`;

@Component({
  selector: 'app-alert-dialog-dismiss-behavior-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogDismissBehaviorDemo {}
