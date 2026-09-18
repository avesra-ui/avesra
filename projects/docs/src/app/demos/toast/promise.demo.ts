import { Component, inject } from '@angular/core';

import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
  <button av-button size="sm" variant="secondary" (click)="saveSuccess()">
    Save (success)
  </button>
  <button av-button size="sm" variant="secondary" (click)="saveError()">
    Save (error)
  </button>
</div>
<av-toast placement="bottom" />`;

export const DEMO_NAME = 'toast-promise';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject } from '@angular/core';
import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

@Component({
  selector: 'app-toast-promise-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class ToastPromiseDemo {
  private readonly toast = inject(AvToastService);

  saveSuccess(): void {
    this.toast.promise(this.fakeSave(true), {
      loading: 'Saving changes…',
      success: (name) => \`Saved \${name}\`,
      error: 'Could not save',
    });
  }

  saveError(): void {
    this.toast.promise(this.fakeSave(false), {
      loading: 'Saving changes…',
      success: 'Saved',
      error: (err) => (err instanceof Error ? err.message : 'Could not save'),
    });
  }

  private fakeSave(ok: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ok) {
          resolve('draft.md');
        } else {
          reject(new Error('Network unavailable'));
        }
      }, 1500);
    });
  }
}`;

@Component({
  selector: 'app-toast-promise-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: DEMO_TEMPLATE,
})
export class ToastPromiseDemo {
  private readonly toast = inject(AvToastService);

  saveSuccess(): void {
    this.toast.promise(this.fakeSave(true), {
      loading: 'Saving changes…',
      success: (name) => `Saved ${name}`,
      error: 'Could not save',
    });
  }

  saveError(): void {
    this.toast.promise(this.fakeSave(false), {
      loading: 'Saving changes…',
      success: 'Saved',
      error: (err) => (err instanceof Error ? err.message : 'Could not save'),
    });
  }

  private fakeSave(ok: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ok) {
          resolve('draft.md');
        } else {
          reject(new Error('Network unavailable'));
        }
      }, 1500);
    });
  }
}
