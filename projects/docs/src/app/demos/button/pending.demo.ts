import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
  <button av-button [pending]="true">Saving...</button>
  <button av-button variant="secondary" [pending]="true">Loading</button>
</div>`;

export const DEMO_NAME = 'button-pending';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-pending-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonPendingDemo {}`;

@Component({
  selector: 'app-button-pending-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonPendingDemo {}
