import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-surface class="flex w-full flex-col gap-4 rounded-3xl p-6">
  <div av-date-field class="w-full" name="date">
    <label av-label>Date</label>
    <div av-date-input-group variant="secondary">
      <div av-date-input-group-input></div>
    </div>
    <p av-description>Enter a date</p>
  </div>

  <div av-date-field class="w-full" name="date-2">
    <label av-label>Appointment date</label>
    <div av-date-input-group variant="secondary">
      <div av-date-input-group-prefix>
        <app-icon icon="solar:calendar-linear" size="16" class="text-muted" />
      </div>
      <div av-date-input-group-input></div>
    </div>
    <p av-description>Enter a date for your appointment</p>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-date-field-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldOnSurfaceDemo {}`;

@Component({
  selector: 'app-date-field-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: DEMO_TEMPLATE,
})
export class DateFieldOnSurfaceDemo {}
