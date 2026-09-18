import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-surface class="flex w-full flex-col gap-4 rounded-3xl p-6">
  <div av-time-field class="w-full" name="time">
    <label av-label>Time</label>
    <div av-date-input-group variant="secondary">
      <div av-date-input-group-input></div>
    </div>
    <p av-description>Enter a time</p>
  </div>

  <div av-time-field class="w-full" name="time-2">
    <label av-label>Appointment time</label>
    <div av-date-input-group variant="secondary">
      <div av-date-input-group-prefix>
        <app-icon icon="solar:clock-circle-linear" size="16" class="text-muted" />
      </div>
      <div av-date-input-group-input></div>
    </div>
    <p av-description>Enter a time for your appointment</p>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-time-field-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldOnSurfaceDemo {}`;

@Component({
  selector: 'app-time-field-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: DEMO_TEMPLATE,
})
export class TimeFieldOnSurfaceDemo {}
