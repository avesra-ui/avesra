import { Component } from '@angular/core';

import { AvDescriptionComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="password">Password</label>
    <input
      av-input
      aria-describedby="password-description"
      class="w-64"
      id="password"
      type="password"
    />
    <p av-description id="password-description">
      Must be at least 8 characters with one uppercase letter
    </p>`;

export const DEMO_NAME = 'description-with-form-fields';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvDescriptionComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-description-with-form-fields-demo',
  imports: [AvDescriptionComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class DescriptionWithFormFieldsDemo {}`;

@Component({
  selector: 'app-description-with-form-fields-demo',
  imports: [AvDescriptionComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class DescriptionWithFormFieldsDemo {}
