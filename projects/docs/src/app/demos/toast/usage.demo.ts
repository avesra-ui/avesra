import { Component, inject } from '@angular/core';

import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

const DEMO_TEMPLATE = `<button av-button variant="secondary" (click)="showToast()">Show toast</button>
<av-toast placement="bottom" />`;

export const DEMO_NAME = 'toast-usage';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject } from '@angular/core';
import { AvButtonComponent, AvToastComponent, AvToastService } from '@avesra/angular';

@Component({
  selector: 'app-toast-usage-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class ToastUsageDemo {
  private readonly toast = inject(AvToastService);

  showToast(): void {
    this.toast.add('Event has been created');
  }
}`;

@Component({
  selector: 'app-toast-usage-demo',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService],
  template: DEMO_TEMPLATE,
})
export class ToastUsageDemo {
  private readonly toast = inject(AvToastService);

  showToast(): void {
    this.toast.add('Event has been created');
  }
}
