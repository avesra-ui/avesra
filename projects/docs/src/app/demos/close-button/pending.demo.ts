import { Component } from '@angular/core';

import { AvCloseButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<button av-close-button aria-label="Close" [pending]="true"></button>`;

export const DEMO_NAME = 'close-button-pending';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCloseButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-close-button-pending-demo',
  imports: [AvCloseButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CloseButtonPendingDemo {}`;

@Component({
  selector: 'app-close-button-pending-demo',
  imports: [AvCloseButtonComponent],
  template: DEMO_TEMPLATE,
})
export class CloseButtonPendingDemo {}
