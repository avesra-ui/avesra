import { Component } from '@angular/core';
import { AvInputComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<input
      av-input
      class="w-64"
      type="text"
      placeholder="Enter your name"
      aria-label="Name"
    />`;

export const DEMO_NAME = 'input-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent } from '@avesra/angular';

@Component({
  selector: 'app-input-basic-demo',
  imports: [AvInputComponent],
  host: { class: 'flex w-full items-center justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputBasicDemo {}`;

@Component({
  selector: 'app-input-basic-demo',
  imports: [AvInputComponent],
  host: { class: 'flex w-full items-center justify-center' },
  template: DEMO_TEMPLATE,
})
export class InputBasicDemo {}
