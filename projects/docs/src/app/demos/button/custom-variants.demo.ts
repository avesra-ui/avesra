import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<button
  av-button
  class="h-11 rounded-full px-6 text-md font-semibold shadow-md"
>
  Custom Button
</button>`;

export const DEMO_NAME = 'button-custom-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-custom-variants-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonCustomVariantsDemo {}`;

@Component({
  selector: 'app-button-custom-variants-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonCustomVariantsDemo {}
