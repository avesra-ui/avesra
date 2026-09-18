import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label>Enter PIN</label>
<div av-input-otp [maxLength]="4">
  <div av-input-otp-group>
    <div av-input-otp-slot [index]="0"></div>
    <div av-input-otp-slot [index]="1"></div>
    <div av-input-otp-slot [index]="2"></div>
    <div av-input-otp-slot [index]="3"></div>
  </div>
</div>`;

export const DEMO_NAME = 'input-otp-four-digits';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-four-digits-demo',
  imports: [AvInputOtpImports, AvLabelComponent],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpFourDigitsDemo {}`;

@Component({
  selector: 'app-input-otp-four-digits-demo',
  imports: [AvInputOtpImports, AvLabelComponent],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpFourDigitsDemo {}
