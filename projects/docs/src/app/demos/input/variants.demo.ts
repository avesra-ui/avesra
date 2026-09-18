import { Component } from '@angular/core';
import { AvInputComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<input av-input full-width placeholder="Primary input" variant="primary" />
      <input av-input full-width placeholder="Secondary input" variant="secondary" />`;

export const DEMO_NAME = 'input-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent } from '@avesra/angular';

@Component({
  selector: 'app-input-variants-demo',
  imports: [AvInputComponent],
  host: { class: 'flex w-full max-w-[240px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputVariantsDemo {}`;

@Component({
  selector: 'app-input-variants-demo',
  imports: [AvInputComponent],
  host: { class: 'flex w-full max-w-[240px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputVariantsDemo {}
