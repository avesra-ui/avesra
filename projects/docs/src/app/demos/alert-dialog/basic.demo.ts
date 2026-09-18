import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-alert-dialog>
      <button av-button variant="danger" av-alert-dialog-trigger>Delete Project</button>
      <ng-template avAlertDialogContent>
        <div av-alert-dialog-dialog class="sm:max-w-[400px]">
          <av-alert-dialog-close-trigger />
          <div av-alert-dialog-header>
            <div av-alert-dialog-icon status="danger"></div>
            <h2 av-alert-dialog-heading>Delete project permanently?</h2>
          </div>
          <div av-alert-dialog-body>
            <p>
              This will permanently delete <strong>My Awesome Project</strong> and all of its
              data. This action cannot be undone.
            </p>
          </div>
          <div av-alert-dialog-footer>
            <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
            <button av-button variant="danger" av-alert-dialog-close>Delete Project</button>
          </div>
        </div>
      </ng-template>
    </av-alert-dialog>`;

export const DEMO_NAME = 'alert-dialog-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-basic-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogBasicDemo {}`;

@Component({
  selector: 'app-alert-dialog-basic-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogBasicDemo {}
