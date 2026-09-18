import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
  <button av-button>Primary</button>
  <button av-button variant="secondary">Secondary</button>
  <button av-button variant="tertiary">Tertiary</button>
  <button av-button variant="outline">Outline</button>
  <button av-button variant="ghost">Ghost</button>
  <button av-button variant="danger">Danger</button>
  <button av-button variant="danger-soft">Danger Soft</button>
</div>`;

export const DEMO_NAME = 'button-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-variants-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonVariantsDemo {}`;

@Component({
  selector: 'app-button-variants-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonVariantsDemo {}
