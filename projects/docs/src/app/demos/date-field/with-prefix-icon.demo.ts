import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-date-field class="w-64" name="date">
  <label av-label>Date</label>
  <div av-date-input-group>
    <div av-date-input-group-prefix>
      <app-icon icon="solar:calendar-linear" size="16" class="text-muted" />
    </div>
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-with-prefix-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-date-field-with-prefix-icon-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldWithPrefixIconDemo {}`;

@Component({
  selector: 'app-date-field-with-prefix-icon-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldWithPrefixIconDemo {}
