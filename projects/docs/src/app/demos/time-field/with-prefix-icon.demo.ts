import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-time-field class="w-[256px]" name="time">
  <label av-label>Time</label>
  <div av-date-input-group>
    <div av-date-input-group-prefix>
      <app-icon icon="solar:clock-circle-linear" size="16" class="text-muted" />
    </div>
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-with-prefix-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-time-field-with-prefix-icon-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldWithPrefixIconDemo {}`;

@Component({
  selector: 'app-time-field-with-prefix-icon-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldWithPrefixIconDemo {}
