import { Component, signal } from '@angular/core';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox [(selected)]="terms">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Accept terms</label>
    </div>
    <p class="text-sm text-muted">Checkbox is {{ terms() ? 'checked' : 'unchecked' }}</p>`;

export const DEMO_NAME = 'checkbox-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-controlled-demo',
  imports: [AvCheckboxImports, AvLabelComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`<div av-checkbox [(selected)]="terms">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Accept terms</label>
    </div>
    <p class="text-sm text-muted">Checkbox is {{ terms() ? 'checked' : 'unchecked' }}</p>\`,
})
export class CheckboxControlledDemo {
  readonly terms = signal(false);
}`;

@Component({
  selector: 'app-checkbox-controlled-demo',
  imports: [AvCheckboxImports, AvLabelComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class CheckboxControlledDemo {
  readonly terms = signal(false);
}
