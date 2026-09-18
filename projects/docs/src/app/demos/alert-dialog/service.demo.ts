import { Component, inject, signal } from '@angular/core';

import { AvAlertDialogService, AvButtonComponent } from '@avesra/angular';
import type { AvAlertDialogCloseResult } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col gap-4">
      <p class="text-sm text-muted">
        Open a confirmation dialog programmatically with
        <code>AvAlertDialogService.confirm()</code>.
      </p>
      <button av-button variant="danger" (click)="confirmDelete()">Delete Project</button>
      @if (lastResult() !== null) {
        <p class="text-sm text-muted">
          Last result:
          <code class="font-mono text-foreground">{{ lastResult() }}</code>
        </p>
      }
    </div>`;

export const DEMO_NAME = 'alert-dialog-service';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject, signal } from '@angular/core';
import { AvAlertDialogService, AvButtonComponent } from '@avesra/angular';
import type { AvAlertDialogCloseResult } from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-service-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogServiceDemo {
  private readonly alertDialog = inject(AvAlertDialogService);

  readonly lastResult = signal<AvAlertDialogCloseResult | 'dismissed' | null>(null);

  confirmDelete(): void {
    this.alertDialog
      .confirm({
        title: 'Delete project permanently?',
        description:
          'This will permanently delete My Awesome Project and all of its data. This action cannot be undone.',
        confirmText: 'Delete Project',
        cancelText: 'Cancel',
        status: 'danger',
      })
      .afterClosed()
      .subscribe((result) => {
        this.lastResult.set(result ?? 'dismissed');
      });
  }
}`;

@Component({
  selector: 'app-alert-dialog-service-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class AlertDialogServiceDemo {
  private readonly alertDialog = inject(AvAlertDialogService);

  readonly lastResult = signal<AvAlertDialogCloseResult | 'dismissed' | null>(null);

  confirmDelete(): void {
    this.alertDialog
      .confirm({
        title: 'Delete project permanently?',
        description:
          'This will permanently delete My Awesome Project and all of its data. This action cannot be undone.',
        confirmText: 'Delete Project',
        cancelText: 'Cancel',
        status: 'danger',
      })
      .afterClosed()
      .subscribe((result) => {
        this.lastResult.set(result ?? 'dismissed');
      });
  }
}
