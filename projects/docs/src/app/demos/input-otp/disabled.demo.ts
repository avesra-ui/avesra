import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label disabled>Verify account</label>
<p av-description>Code verification is currently disabled</p>
<div av-input-otp disabled [maxLength]="6">
  <div av-input-otp-group>
    <div av-input-otp-slot [index]="0"></div>
    <div av-input-otp-slot [index]="1"></div>
    <div av-input-otp-slot [index]="2"></div>
  </div>
  <div av-input-otp-separator></div>
  <div av-input-otp-group>
    <div av-input-otp-slot [index]="3"></div>
    <div av-input-otp-slot [index]="4"></div>
    <div av-input-otp-slot [index]="5"></div>
  </div>
</div>`;

export const DEMO_NAME = 'input-otp-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-disabled-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpDisabledDemo {}`;

@Component({
  selector: 'app-input-otp-disabled-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpDisabledDemo {}
