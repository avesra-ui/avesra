import { Component, inject, signal } from '@angular/core';
import { AvButtonComponent, AvToastComponent, AvToastService, type AvToastPlacement } from '@avesra/angular';

interface ClosedHistoryEntry {
  message: string;
  time: string;
}

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
      <button av-button size="sm" variant="secondary" (click)="showShortTimeout()">
        Custom timeout (3s)
      </button>
      <button av-button size="sm" variant="secondary" (click)="showLongTimeout()">
        Custom timeout (10s)
      </button>
      <button av-button size="sm" variant="secondary" (click)="showWithOnClose()">
        With onClose callback
      </button>
      <button av-button size="sm" variant="secondary" (click)="showPersistent()">
        Persistent toast
      </button>
      <button av-button size="sm" variant="outline" (click)="clearAll()">Clear all</button>
    </div>

    <div class="mt-4 space-y-2">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-medium text-foreground">Closed history</h4>
        @if (closedHistory().length > 0) {
          <button av-button size="sm" variant="tertiary" class="h-6 text-xs" (click)="clearHistory()">
            Clear
          </button>
        }
      </div>
      <div class="min-h-[120px] space-y-2 rounded-lg border border-border bg-default p-4">
        @if (closedHistory().length === 0) {
          <p class="text-sm text-muted">No toasts closed yet. Try closing one above!</p>
        } @else {
          @for (item of closedHistory(); track item.time + item.message) {
            <div
              class="flex items-start justify-between gap-3 rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <div class="flex-1">
                <span class="font-medium text-foreground">{{ item.message }}</span>
                <span class="ml-2 text-xs text-muted">({{ item.time }})</span>
              </div>
              <div
                class="flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"
              >
                <svg
                  class="size-3"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          }
        }
      </div>
    </div>
    <av-toast placement="bottom" />
  `;

export const DEMO_NAME = 'toast-timeouts-amp-callbacks';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject, signal } from '@angular/core';
import { AvButtonComponent, AvToastComponent, AvToastService, type AvToastPlacement } from '@avesra/angular';

interface ClosedHistoryEntry {
  message: string;
  time: string;
}

@Component({
  selector: 'app-toast-timeouts-amp-callbacks-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: \`<div class="flex flex-wrap gap-3">
      <button av-button size="sm" variant="secondary" (click)="showShortTimeout()">
        Custom timeout (3s)
      </button>
      <button av-button size="sm" variant="secondary" (click)="showLongTimeout()">
        Custom timeout (10s)
      </button>
      <button av-button size="sm" variant="secondary" (click)="showWithOnClose()">
        With onClose callback
      </button>
      <button av-button size="sm" variant="secondary" (click)="showPersistent()">
        Persistent toast
      </button>
      <button av-button size="sm" variant="outline" (click)="clearAll()">Clear all</button>
    </div>

    <div class="mt-4 space-y-2">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-medium text-foreground">Closed history</h4>
        @if (closedHistory().length > 0) {
          <button av-button size="sm" variant="tertiary" class="h-6 text-xs" (click)="clearHistory()">
            Clear
          </button>
        }
      </div>
      <div class="min-h-[120px] space-y-2 rounded-lg border border-border bg-default p-4">
        @if (closedHistory().length === 0) {
          <p class="text-sm text-muted">No toasts closed yet. Try closing one above!</p>
        } @else {
          @for (item of closedHistory(); track item.time + item.message) {
            <div
              class="flex items-start justify-between gap-3 rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <div class="flex-1">
                <span class="font-medium text-foreground">{{ item.message }}</span>
                <span class="ml-2 text-xs text-muted">({{ item.time }})</span>
              </div>
              <div
                class="flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"
              >
                <svg
                  class="size-3"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          }
        }
      </div>
    </div>\`,
})
export class ToastTimeoutsAmpCallbacksDemo {
private readonly toast = inject(AvToastService);

  readonly placements: AvToastPlacement[] = [
    'bottom',
    'bottom-start',
    'bottom-end',
    'top',
    'top-start',
    'top-end',
  ];

  readonly closedHistory = signal<ClosedHistoryEntry[]>([]);

  // —— Default ——

  showDefaultToast(): void {
    this.toast.add('You have been invited to join a team', {
      description: 'Bob sent you an invitation to join the Avesra team',
      actionLabel: 'Dismiss',
      action: () => this.toast.clear(),
    });
  }

  showAccentToast(): void {
    this.toast.info('You have 2 credits left', {
      description: 'Get a paid plan for more credits',
      actionLabel: 'Upgrade',
      action: () => undefined,
    });
  }

  showSuccessToast(): void {
    this.toast.success('You have upgraded your plan', {
      description: 'You can continue using Avesra Chat',
      actionLabel: 'Billing',
      action: () => undefined,
    });
  }

  showWarningToast(): void {
    this.toast.warning('You have no credits left', {
      description: 'Upgrade to a paid plan to continue',
      actionLabel: 'Upgrade',
      action: () => undefined,
    });
  }

  showDangerToast(): void {
    this.toast.danger('Storage is full', {
      description:
        'Remove files to release space. Adding more text to demonstrate longer content display.',
      actionLabel: 'Remove',
      action: () => undefined,
    });
  }

  // —— Simple ——

  showSimpleDefault(): void {
    this.toast.add('Simple message');
  }

  showSimpleSuccess(): void {
    this.toast.success('Operation completed');
  }

  showSimpleInfo(): void {
    this.toast.info('New update available');
  }

  showSimpleWarning(): void {
    this.toast.warning('Please check your settings');
  }

  showSimpleDanger(): void {
    this.toast.danger('Something went wrong');
  }

  // —— Placements ——

  showPlacement(placement: AvToastPlacement): void {
    this.toast.add('Event created', {
      description: 'Event has been created',
      key: placement,
    });
  }

  // —— Loading ——

  showUploadLoading(): void {
    const id = this.toast.add('Uploading file...', {
      description: 'Please wait while we upload your file',
      isLoading: true,
      life: 0,
      sticky: true,
      closable: false,
    });

    setTimeout(() => {
      this.toast.close(id);
      this.toast.success('File uploaded', {
        description: 'Your file has been uploaded successfully',
      });
    }, 3000);
  }

  showPaymentLoading(): void {
    const id = this.toast.add('Processing payment...', {
      isLoading: true,
      life: 0,
      sticky: true,
      closable: false,
    });

    setTimeout(() => {
      this.toast.close(id);
      this.toast.success('Payment processed', {
        description: 'Your payment has been processed successfully',
      });
    }, 2500);
  }

  showLoadingToError(): void {
    const id = this.toast.add('Saving changes...', {
      isLoading: true,
      life: 0,
      sticky: true,
      closable: false,
    });

    setTimeout(() => {
      this.toast.close(id);
      this.toast.danger('Failed to save', {
        description: 'Please try again',
      });
    }, 2000);
  }

  // —— Timeouts & callbacks ——

  showShortTimeout(): void {
    this.toast.add('File saved', {
      life: 3000,
      onClose: () => this.addToHistory('File saved (closed after 3 seconds)'),
    });
  }

  showLongTimeout(): void {
    this.toast.add('Changes saved', {
      life: 10000,
      onClose: () => this.addToHistory('Changes saved (closed after 10 seconds)'),
    });
  }

  showWithOnClose(): void {
    this.toast.success('Event created', {
      onClose: () => this.addToHistory('Event created (closed after default timeout)'),
    });
  }

  showPersistent(): void {
    this.toast.add('Important notification', {
      description: 'This toast will stay until dismissed',
      life: 0,
      onClose: () => this.addToHistory('Important notification (manually closed)'),
    });
  }

  clearHistory(): void {
    this.closedHistory.set([]);
  }

  // —— Custom queues ——

  showNotificationQueue(): void {
    this.toast.add('New notification', {
      description: 'You have a new message',
      key: 'queue-notifications',
    });
  }

  showErrorQueue(): void {
    this.toast.danger('Error occurred', {
      description: 'Failed to save changes',
      key: 'queue-errors',
    });
  }

  showSuccessQueue(): void {
    this.toast.success('Success!', {
      description: \`Operation \${Date.now()}\`,
      key: 'queue-success',
    });
  }

  // —— Other ——

  showWithoutIndicator(): void {
    this.toast.add('No indicator toast', {
      description: 'The default icon is hidden with hideIndicator.',
      hideIndicator: true,
    });
  }

  showDuplicateToast(): void {
    this.toast.add('Duplicate check', {
      description: 'Try clicking again — only one copy is shown.',
      key: 'dedupe',
    });
  }

  clearAll(): void {
    this.toast.clear();
  }

  private addToHistory(message: string): void {
    const time = new Date().toLocaleTimeString();

    this.closedHistory.update((prev) => [{ message, time }, ...prev].slice(0, 5));
  }
}`;

@Component({
  selector: 'app-toast-timeouts-amp-callbacks-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: DEMO_TEMPLATE,
})
export class ToastTimeoutsAmpCallbacksDemo {
private readonly toast = inject(AvToastService);

  readonly placements: AvToastPlacement[] = [
    'bottom',
    'bottom-start',
    'bottom-end',
    'top',
    'top-start',
    'top-end',
  ];

  readonly closedHistory = signal<ClosedHistoryEntry[]>([]);

  // —— Default ——

  showDefaultToast(): void {
    this.toast.add('You have been invited to join a team', {
      description: 'Bob sent you an invitation to join the Avesra team',
      actionLabel: 'Dismiss',
      action: () => this.toast.clear(),
    });
  }

  showAccentToast(): void {
    this.toast.info('You have 2 credits left', {
      description: 'Get a paid plan for more credits',
      actionLabel: 'Upgrade',
      action: () => undefined,
    });
  }

  showSuccessToast(): void {
    this.toast.success('You have upgraded your plan', {
      description: 'You can continue using Avesra Chat',
      actionLabel: 'Billing',
      action: () => undefined,
    });
  }

  showWarningToast(): void {
    this.toast.warning('You have no credits left', {
      description: 'Upgrade to a paid plan to continue',
      actionLabel: 'Upgrade',
      action: () => undefined,
    });
  }

  showDangerToast(): void {
    this.toast.danger('Storage is full', {
      description:
        'Remove files to release space. Adding more text to demonstrate longer content display.',
      actionLabel: 'Remove',
      action: () => undefined,
    });
  }

  // —— Simple ——

  showSimpleDefault(): void {
    this.toast.add('Simple message');
  }

  showSimpleSuccess(): void {
    this.toast.success('Operation completed');
  }

  showSimpleInfo(): void {
    this.toast.info('New update available');
  }

  showSimpleWarning(): void {
    this.toast.warning('Please check your settings');
  }

  showSimpleDanger(): void {
    this.toast.danger('Something went wrong');
  }

  // —— Placements ——

  showPlacement(placement: AvToastPlacement): void {
    this.toast.add('Event created', {
      description: 'Event has been created',
      key: placement,
    });
  }

  // —— Loading ——

  showUploadLoading(): void {
    const id = this.toast.add('Uploading file...', {
      description: 'Please wait while we upload your file',
      isLoading: true,
      life: 0,
      sticky: true,
      closable: false,
    });

    setTimeout(() => {
      this.toast.close(id);
      this.toast.success('File uploaded', {
        description: 'Your file has been uploaded successfully',
      });
    }, 3000);
  }

  showPaymentLoading(): void {
    const id = this.toast.add('Processing payment...', {
      isLoading: true,
      life: 0,
      sticky: true,
      closable: false,
    });

    setTimeout(() => {
      this.toast.close(id);
      this.toast.success('Payment processed', {
        description: 'Your payment has been processed successfully',
      });
    }, 2500);
  }

  showLoadingToError(): void {
    const id = this.toast.add('Saving changes...', {
      isLoading: true,
      life: 0,
      sticky: true,
      closable: false,
    });

    setTimeout(() => {
      this.toast.close(id);
      this.toast.danger('Failed to save', {
        description: 'Please try again',
      });
    }, 2000);
  }

  // —— Timeouts & callbacks ——

  showShortTimeout(): void {
    this.toast.add('File saved', {
      life: 3000,
      onClose: () => this.addToHistory('File saved (closed after 3 seconds)'),
    });
  }

  showLongTimeout(): void {
    this.toast.add('Changes saved', {
      life: 10000,
      onClose: () => this.addToHistory('Changes saved (closed after 10 seconds)'),
    });
  }

  showWithOnClose(): void {
    this.toast.success('Event created', {
      onClose: () => this.addToHistory('Event created (closed after default timeout)'),
    });
  }

  showPersistent(): void {
    this.toast.add('Important notification', {
      description: 'This toast will stay until dismissed',
      life: 0,
      onClose: () => this.addToHistory('Important notification (manually closed)'),
    });
  }

  clearHistory(): void {
    this.closedHistory.set([]);
  }

  // —— Custom queues ——

  showNotificationQueue(): void {
    this.toast.add('New notification', {
      description: 'You have a new message',
      key: 'queue-notifications',
    });
  }

  showErrorQueue(): void {
    this.toast.danger('Error occurred', {
      description: 'Failed to save changes',
      key: 'queue-errors',
    });
  }

  showSuccessQueue(): void {
    this.toast.success('Success!', {
      description: `Operation ${Date.now()}`,
      key: 'queue-success',
    });
  }

  // —— Other ——

  showWithoutIndicator(): void {
    this.toast.add('No indicator toast', {
      description: 'The default icon is hidden with hideIndicator.',
      hideIndicator: true,
    });
  }

  showDuplicateToast(): void {
    this.toast.add('Duplicate check', {
      description: 'Try clicking again — only one copy is shown.',
      key: 'dedupe',
    });
  }

  clearAll(): void {
    this.toast.clear();
  }

  private addToHistory(message: string): void {
    const time = new Date().toLocaleTimeString();

    this.closedHistory.update((prev) => [{ message, time }, ...prev].slice(0, 5));
  }
}
