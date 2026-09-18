import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="label-username" disabled>Username</label>
      <input
        av-input
        class="w-64"
        disabled
        id="label-username"
        placeholder="Disabled field"
        type="text"
      />`;

export const DEMO_NAME = 'label-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-label-disabled-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class LabelDisabledDemo {}`;

@Component({
  selector: 'app-label-disabled-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class LabelDisabledDemo {}
