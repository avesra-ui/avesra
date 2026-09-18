import { Component, inject } from '@angular/core';
import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
  <button av-button size="sm" variant="secondary" (click)="showWithoutIndicator()">
    Without indicator
  </button>
  <button av-button size="sm" variant="secondary" (click)="showDuplicateToast()">
    Prevent duplicates
  </button>
</div>
<av-toast placement="bottom" prevent-duplicates />`;

export const DEMO_NAME = 'toast-other';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject } from '@angular/core';
import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

@Component({
  selector: 'app-toast-other-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class ToastOtherDemo {
  private readonly toast = inject(AvToastService);

  showWithoutIndicator(): void {
    this.toast.add('No indicator toast', {
      description: 'The default icon is hidden with hideIndicator.',
      hideIndicator: true,
    });
  }

  showDuplicateToast(): void {
    this.toast.add('Duplicate check', {
      description: 'Try clicking again — only one copy is shown.',
    });
  }
}`;

@Component({
  selector: 'app-toast-other-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: DEMO_TEMPLATE,
})
export class ToastOtherDemo {
  private readonly toast = inject(AvToastService);

  showWithoutIndicator(): void {
    this.toast.add('No indicator toast', {
      description: 'The default icon is hidden with hideIndicator.',
      hideIndicator: true,
    });
  }

  showDuplicateToast(): void {
    this.toast.add('Duplicate check', {
      description: 'Try clicking again — only one copy is shown.',
    });
  }
}
