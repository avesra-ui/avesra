import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-alert-dialog>
      <button av-button variant="secondary" av-alert-dialog-trigger>Reset Password</button>
      <ng-template avAlertDialogContent>
        <div av-alert-dialog-dialog class="sm:max-w-[400px]">
          <av-alert-dialog-close-trigger />
          <div av-alert-dialog-header>
            <div av-alert-dialog-icon status="warning">
              <app-icon icon="solar:lock-unlocked-linear" size="20" />
            </div>
            <h2 av-alert-dialog-heading>Reset your password?</h2>
          </div>
          <div av-alert-dialog-body>
            <p>
              We'll send a password reset link to your email address. You'll need to create a new
              password to regain access to your account.
            </p>
          </div>
          <div av-alert-dialog-footer>
            <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
            <button av-button av-alert-dialog-close>Send Reset Link</button>
          </div>
        </div>
      </ng-template>
    </av-alert-dialog>`;

export const DEMO_NAME = 'alert-dialog-custom-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-alert-dialog-custom-icon-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogCustomIconDemo {}`;

@Component({
  selector: 'app-alert-dialog-custom-icon-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogCustomIconDemo {}
