import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
  <button av-button [disabled]="true">Primary</button>
  <button av-button variant="secondary" [disabled]="true">Secondary</button>
  <button av-button variant="tertiary" [disabled]="true">Tertiary</button>
  <button av-button variant="outline" [disabled]="true">Outline</button>
  <button av-button variant="ghost" [disabled]="true">Ghost</button>
  <button av-button variant="danger" [disabled]="true">Danger</button>
  <button av-button variant="danger-soft" [disabled]="true">Danger Soft</button>
</div>`;

export const DEMO_NAME = 'button-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-disabled-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonDisabledDemo {}`;

@Component({
  selector: 'app-button-disabled-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonDisabledDemo {}
