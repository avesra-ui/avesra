import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="label-email" required>Email Address</label>
      <input
        av-input
        class="w-64"
        id="label-email"
        placeholder="you&#64;example.com"
        type="email"
      />`;

export const DEMO_NAME = 'label-required';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-label-required-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class LabelRequiredDemo {}`;

@Component({
  selector: 'app-label-required-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class LabelRequiredDemo {}
