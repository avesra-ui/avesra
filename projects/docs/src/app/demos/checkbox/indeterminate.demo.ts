import { Component, signal } from '@angular/core';

import {
  AvCheckboxImports,
  AvDescriptionComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      av-checkbox
      id="select-all"
      [indeterminate]="isIndeterminate()"
      [(selected)]="isSelected"
      (selectedChange)="onSelectedChange($event)"
    >
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        Select all
        <p av-description>Shows indeterminate state (dash icon)</p>
      </span>
    </div>`;

export const DEMO_NAME = 'checkbox-indeterminate';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvCheckboxImports,
  AvDescriptionComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-indeterminate-demo',
  imports: [
    AvCheckboxImports,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxIndeterminateDemo {
  readonly isIndeterminate = signal(true);
  readonly isSelected = signal(false);

  onSelectedChange(_selected: boolean): void {
    this.isIndeterminate.set(false);
  }
}`;

@Component({
  selector: 'app-checkbox-indeterminate-demo',
  imports: [
    AvCheckboxImports,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxIndeterminateDemo {
  readonly isIndeterminate = signal(true);
  readonly isSelected = signal(false);

  onSelectedChange(_selected: boolean): void {
    this.isIndeterminate.set(false);
  }
}
