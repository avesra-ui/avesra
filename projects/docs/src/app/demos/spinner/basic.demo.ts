import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
      <span av-spinner></span>
    </div>`;

export const DEMO_NAME = 'spinner-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

@Component({
  selector: 'app-spinner-basic-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: \`<div class="flex items-center gap-4">
      <span av-spinner></span>
    </div>\`,
})
export class SpinnerBasicDemo {}`;

@Component({
  selector: 'app-spinner-basic-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SpinnerBasicDemo {}
