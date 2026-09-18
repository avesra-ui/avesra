import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="label-password" invalid>Password</label>
      <input
        av-input
        class="w-64"
        id="label-password"
        invalid
        placeholder="Enter password"
        type="password"
      />`;

export const DEMO_NAME = 'label-invalid';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-label-invalid-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class LabelInvalidDemo {}`;

@Component({
  selector: 'app-label-invalid-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class LabelInvalidDemo {}
