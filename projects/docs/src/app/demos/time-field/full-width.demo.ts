import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="w-[400px] space-y-4">
  <div av-time-field full-width name="time">
    <label av-label>Time</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
  </div>

  <div av-time-field full-width name="time-icons">
    <label av-label>Time</label>
    <div av-date-input-group>
      <div av-date-input-group-prefix>
        <app-icon icon="solar:clock-circle-linear" size="16" class="text-muted" />
      </div>
      <div av-date-input-group-input></div>
      <div av-date-input-group-suffix>
        <app-icon icon="solar:alt-arrow-down-linear" size="16" class="text-muted" />
      </div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-time-field-full-width-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldFullWidthDemo {}`;

@Component({
  selector: 'app-time-field-full-width-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldFullWidthDemo {}
