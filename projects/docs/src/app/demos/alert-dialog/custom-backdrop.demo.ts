import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-alert-dialog
      backdrop="blur"
      backdrop-class="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
    >
      <button av-button variant="danger" av-alert-dialog-trigger>Delete Account</button>
      <ng-template avAlertDialogContent>
        <div av-alert-dialog-dialog class="sm:max-w-[420px]">
          <av-alert-dialog-close-trigger />
          <div av-alert-dialog-header class="items-center text-center">
            <div av-alert-dialog-icon status="danger">
              <app-icon icon="solar:danger-triangle-linear" size="20" />
            </div>
            <h2 av-alert-dialog-heading>Permanently delete your account?</h2>
          </div>
          <div av-alert-dialog-body>
            <p>
              This action cannot be undone. All your data, settings, and content will be
              permanently removed from our servers. The dramatic red backdrop emphasizes the
              severity and irreversibility of this decision.
            </p>
          </div>
          <div av-alert-dialog-footer class="flex-col-reverse">
            <button av-button full-width av-alert-dialog-close>Keep Account</button>
            <button av-button full-width variant="danger" av-alert-dialog-close>
              Delete Forever
            </button>
          </div>
        </div>
      </ng-template>
    </av-alert-dialog>`;

export const DEMO_NAME = 'alert-dialog-custom-backdrop';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-alert-dialog-custom-backdrop-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogCustomBackdropDemo {}`;

@Component({
  selector: 'app-alert-dialog-custom-backdrop-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogCustomBackdropDemo {}
