import { Component } from '@angular/core';

import { AvDescriptionComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="email">Email</label>
    <input
      av-input
      aria-describedby="email-description"
      class="w-64"
      id="email"
      placeholder="you&#64;example.com"
      type="email"
    />
    <p av-description id="email-description">
      We'll never share your email with anyone else.
    </p>`;

export const DEMO_NAME = 'description-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvDescriptionComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-description-basic-demo',
  imports: [AvDescriptionComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class DescriptionBasicDemo {}`;

@Component({
  selector: 'app-description-basic-demo',
  imports: [AvDescriptionComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class DescriptionBasicDemo {}
