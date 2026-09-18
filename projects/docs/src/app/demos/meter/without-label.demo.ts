import { Component } from '@angular/core';
import { AvMeterImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-64" av-meter aria-label="Storage usage" [value]="45">
  <div av-meter-track>
    <div av-meter-fill></div>
  </div>
</div>`;

export const DEMO_NAME = 'meter-without-label';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvMeterImports } from '@avesra/angular';

@Component({
  selector: 'app-meter-without-label-demo',
  imports: [AvMeterImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class MeterWithoutLabelDemo {}`;

@Component({
  selector: 'app-meter-without-label-demo',
  imports: [AvMeterImports],
  template: DEMO_TEMPLATE,
})
export class MeterWithoutLabelDemo {}
