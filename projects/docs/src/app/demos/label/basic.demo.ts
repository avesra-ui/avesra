import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="label-name">Name</label>
      <input
        av-input
        class="w-64"
        id="label-name"
        placeholder="Enter your name"
        type="text"
      />`;

export const DEMO_NAME = 'label-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-label-basic-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class LabelBasicDemo {}`;

@Component({
  selector: 'app-label-basic-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class LabelBasicDemo {}
