import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<button av-button (click)="onPress()">Click me</button>`;

export const DEMO_NAME = 'button-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-basic-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonBasicDemo {
  onPress(): void {
    console.log('Button pressed');
  }
}`;

@Component({
  selector: 'app-button-basic-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonBasicDemo {
  onPress(): void {
    console.log('Button pressed');
  }
}
