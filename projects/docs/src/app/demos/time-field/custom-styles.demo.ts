import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-time-field class="w-[256px]" name="meeting-time">
  <label av-label>Meeting time</label>
  <div
    av-date-input-group
    variant="secondary"
    class="rounded-xl border border-border/80 bg-default shadow-sm"
  >
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-custom-styles-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldCustomStylesDemo {}`;

@Component({
  selector: 'app-time-field-custom-styles-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldCustomStylesDemo {}
