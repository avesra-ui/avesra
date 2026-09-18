import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap items-center gap-3">
  <button av-button size="sm">Small</button>
  <button av-button size="md">Medium</button>
  <button av-button size="lg">Large</button>
</div>`;

export const DEMO_NAME = 'button-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-sizes-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonSizesDemo {}`;

@Component({
  selector: 'app-button-sizes-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonSizesDemo {}
