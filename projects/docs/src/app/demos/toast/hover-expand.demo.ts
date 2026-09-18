import { Component, inject } from '@angular/core';

import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-3">
  <p class="text-sm text-muted">
    Add a few toasts, then hover the stack to expand peeks into a full list.
  </p>
  <div class="flex flex-wrap gap-3">
    <button av-button size="sm" variant="secondary" (click)="addStack()">
      Add 3 stacked toasts
    </button>
    <button av-button size="sm" variant="tertiary" (click)="toast.clear()">
      Clear
    </button>
  </div>
</div>
<av-toast placement="bottom" [max-visible-toasts]="4" />`;

export const DEMO_NAME = 'toast-hover-expand';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject } from '@angular/core';
import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

@Component({
  selector: 'app-toast-hover-expand-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class ToastHoverExpandDemo {
  readonly toast = inject(AvToastService);

  addStack(): void {
    this.toast.success('File uploaded');
    this.toast.info('Syncing changes…');
    this.toast.warning('Storage almost full');
  }
}`;

@Component({
  selector: 'app-toast-hover-expand-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: DEMO_TEMPLATE,
})
export class ToastHoverExpandDemo {
  readonly toast = inject(AvToastService);

  addStack(): void {
    this.toast.success('File uploaded');
    this.toast.info('Syncing changes…');
    this.toast.warning('Storage almost full');
  }
}
