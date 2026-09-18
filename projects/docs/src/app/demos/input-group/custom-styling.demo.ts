import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="ig-custom">Website</label>
    <div av-input-group class="rounded-xl border-2 border-accent">
      <div av-input-group-prefix class="bg-accent/10 text-accent">https://</div>
      <input av-input-group-input id="ig-custom" class="font-medium" />
      <div av-input-group-suffix class="bg-accent/10 text-accent">.com</div>
    </div>`;

export const DEMO_NAME = 'input-group-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-group-custom-styling-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-80 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupCustomStylingDemo {}`;

@Component({
  selector: 'app-input-group-custom-styling-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-80 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupCustomStylingDemo {}
