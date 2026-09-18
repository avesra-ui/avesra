import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<button
      av-button
      [attr.data-custom]="pressed ? 'pressed' : 'bar'"
      (pointerdown)="pressed = true"
      (pointerup)="pressed = false"
      (pointerleave)="pressed = false"
    >
      Press me
    </button>`;

export const DEMO_NAME = 'button-render-function';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-render-function-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonRenderFunctionDemo {
  pressed = false;
}`;

@Component({
  selector: 'app-button-render-function-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonRenderFunctionDemo {
  pressed = false;
}
