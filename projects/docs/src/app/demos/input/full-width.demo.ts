import { Component } from '@angular/core';
import { AvInputComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<input av-input full-width placeholder="Full width input" aria-label="Full width" />`;

export const DEMO_NAME = 'input-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent } from '@avesra/angular';

@Component({
  selector: 'app-input-full-width-demo',
  imports: [AvInputComponent],
  host: { class: 'w-full max-w-[400px]' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputFullWidthDemo {}`;

@Component({
  selector: 'app-input-full-width-demo',
  imports: [AvInputComponent],
  host: { class: 'w-full max-w-[400px]' },
  template: DEMO_TEMPLATE,
})
export class InputFullWidthDemo {}
