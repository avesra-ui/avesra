import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="w-[400px] space-y-4">
  <div av-date-field full-width name="date">
    <label av-label>Date</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
  </div>

  <div av-date-field full-width name="date-icons">
    <label av-label>Date</label>
    <div av-date-input-group>
      <div av-date-input-group-prefix>
        <app-icon icon="solar:calendar-linear" size="16" class="text-muted" />
      </div>
      <div av-date-input-group-input></div>
      <div av-date-input-group-suffix>
        <app-icon icon="solar:alt-arrow-down-linear" size="16" class="text-muted" />
      </div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-date-field-full-width-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldFullWidthDemo {}`;

@Component({
  selector: 'app-date-field-full-width-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldFullWidthDemo {}
