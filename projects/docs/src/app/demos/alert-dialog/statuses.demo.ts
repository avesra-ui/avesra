import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogIconStatus, AvButtonVariant } from '@avesra/angular';

interface StatusExample {
  status: AvAlertDialogIconStatus;
  trigger: string;
  header: string;
  body: string;
  classNames: string;
  triggerStyle: Record<string, string>;
  cancel: string;
  confirm: string;
  confirmVariant: AvButtonVariant;
}

const STATUS_EXAMPLES: readonly StatusExample[] = [
  {
    status: 'accent',
    trigger: 'Sign Out',
    header: 'Sign out of your account?',
    body: "You'll need to sign in again to access your account. Any unsaved changes will be lost.",
    classNames: 'bg-accent-soft text-accent-soft-foreground',
    triggerStyle: {
      '--av-button-bg': 'var(--av-accent-soft)',
      '--av-button-bg-hover': 'var(--av-accent-soft-hover)',
      '--av-button-bg-pressed': 'var(--av-accent-soft-hover)',
      '--av-button-fg': 'var(--av-accent-soft-foreground)',
    },
    cancel: 'Stay Signed In',
    confirm: 'Sign Out',
    confirmVariant: 'primary',
  },
  {
    status: 'success',
    trigger: 'Complete Task',
    header: 'Complete this task?',
    body: 'This will mark the task as complete and notify all team members. The task will be moved to your completed list.',
    classNames: 'bg-success-soft text-success-soft-foreground',
    triggerStyle: {
      '--av-button-bg': 'var(--av-success-soft)',
      '--av-button-bg-hover': 'var(--av-success-soft-hover)',
      '--av-button-bg-pressed': 'var(--av-success-soft-hover)',
      '--av-button-fg': 'var(--av-success-soft-foreground)',
    },
    cancel: 'Not Yet',
    confirm: 'Mark Complete',
    confirmVariant: 'primary',
  },
  {
    status: 'warning',
    trigger: 'Discard Changes',
    header: 'Discard unsaved changes?',
    body: 'You have unsaved changes that will be permanently lost. Are you sure you want to discard them?',
    classNames: 'bg-warning-soft text-warning-soft-foreground',
    triggerStyle: {
      '--av-button-bg': 'var(--av-warning-soft)',
      '--av-button-bg-hover': 'var(--av-warning-soft-hover)',
      '--av-button-bg-pressed': 'var(--av-warning-soft-hover)',
      '--av-button-fg': 'var(--av-warning-soft-foreground)',
    },
    cancel: 'Keep Editing',
    confirm: 'Discard',
    confirmVariant: 'primary',
  },
  {
    status: 'danger',
    trigger: 'Delete Account',
    header: 'Delete your account?',
    body: 'This will permanently delete your account and remove all your data from our servers. This action is irreversible.',
    classNames: 'bg-danger-soft text-danger-soft-foreground',
    triggerStyle: {
      '--av-button-bg': 'var(--av-danger-soft)',
      '--av-button-bg-hover': 'var(--av-danger-soft-hover)',
      '--av-button-bg-pressed': 'var(--av-danger-soft-hover)',
      '--av-button-fg': 'var(--av-danger-soft-foreground)',
    },
    cancel: 'Cancel',
    confirm: 'Delete Account',
    confirmVariant: 'danger',
  },
];

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      @for (example of statusExamples; track example.status) {
        <av-alert-dialog>
          <button av-button [style]="example.triggerStyle" av-alert-dialog-trigger>
            {{ example.trigger }}
          </button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon [status]="example.status"></div>
                <h2 av-alert-dialog-heading>{{ example.header }}</h2>
              </div>
              <div av-alert-dialog-body>
                <p>{{ example.body }}</p>
              </div>
              <div av-alert-dialog-footer>
                <button av-button variant="tertiary" av-alert-dialog-close>
                  {{ example.cancel }}
                </button>
                <button
                  av-button
                  [variant]="example.confirmVariant"
                  av-alert-dialog-close
                >
                  {{ example.confirm }}
                </button>
              </div>
            </div>
          </ng-template>
        </av-alert-dialog>
      }
    </div>`;

export const DEMO_NAME = 'alert-dialog-statuses';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogIconStatus, AvButtonVariant } from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-statuses-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogStatusesDemo {
  readonly statusExamples: {
    status: AvAlertDialogIconStatus;
    trigger: string;
    header: string;
    body: string;
    classNames: string;
    triggerStyle: Record<string, string>;
    cancel: string;
    confirm: string;
    confirmVariant: AvButtonVariant;
  }[] = [
    {
      status: 'accent',
      trigger: 'Sign Out',
      header: 'Sign out of your account?',
      body: "You'll need to sign in again to access your account. Any unsaved changes will be lost.",
      classNames: 'bg-accent-soft text-accent-soft-foreground',
      triggerStyle: {
        '--av-button-bg': 'var(--av-accent-soft)',
        '--av-button-bg-hover': 'var(--av-accent-soft-hover)',
        '--av-button-bg-pressed': 'var(--av-accent-soft-hover)',
        '--av-button-fg': 'var(--av-accent-soft-foreground)',
      },
      cancel: 'Stay Signed In',
      confirm: 'Sign Out',
      confirmVariant: 'primary',
    },
    {
      status: 'success',
      trigger: 'Complete Task',
      header: 'Complete this task?',
      body: 'This will mark the task as complete and notify all team members. The task will be moved to your completed list.',
      classNames: 'bg-success-soft text-success-soft-foreground',
      triggerStyle: {
        '--av-button-bg': 'var(--av-success-soft)',
        '--av-button-bg-hover': 'var(--av-success-soft-hover)',
        '--av-button-bg-pressed': 'var(--av-success-soft-hover)',
        '--av-button-fg': 'var(--av-success-soft-foreground)',
      },
      cancel: 'Not Yet',
      confirm: 'Mark Complete',
      confirmVariant: 'primary',
    },
    {
      status: 'warning',
      trigger: 'Discard Changes',
      header: 'Discard unsaved changes?',
      body: 'You have unsaved changes that will be permanently lost. Are you sure you want to discard them?',
      classNames: 'bg-warning-soft text-warning-soft-foreground',
      triggerStyle: {
        '--av-button-bg': 'var(--av-warning-soft)',
        '--av-button-bg-hover': 'var(--av-warning-soft-hover)',
        '--av-button-bg-pressed': 'var(--av-warning-soft-hover)',
        '--av-button-fg': 'var(--av-warning-soft-foreground)',
      },
      cancel: 'Keep Editing',
      confirm: 'Discard',
      confirmVariant: 'primary',
    },
    {
      status: 'danger',
      trigger: 'Delete Account',
      header: 'Delete your account?',
      body: 'This will permanently delete your account and remove all your data from our servers. This action is irreversible.',
      classNames: 'bg-danger-soft text-danger-soft-foreground',
      triggerStyle: {
        '--av-button-bg': 'var(--av-danger-soft)',
        '--av-button-bg-hover': 'var(--av-danger-soft-hover)',
        '--av-button-bg-pressed': 'var(--av-danger-soft-hover)',
        '--av-button-fg': 'var(--av-danger-soft-foreground)',
      },
      cancel: 'Cancel',
      confirm: 'Delete Account',
      confirmVariant: 'danger',
    },
  ];
}`;

@Component({
  selector: 'app-alert-dialog-statuses-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogStatusesDemo {
  readonly statusExamples = STATUS_EXAMPLES;
}
