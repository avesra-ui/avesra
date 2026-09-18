import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-2">
  <label av-label>Primary variant</label>
  <div av-input-otp variant="primary" [maxLength]="6">
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
  </div>
</div>
<div class="flex flex-col gap-2">
  <label av-label>Secondary variant</label>
  <div av-input-otp variant="secondary" [maxLength]="6">
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
  </div>
</div>`;

export const DEMO_NAME = 'input-otp-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-variants-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-6' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpVariantsDemo {}`;

@Component({
  selector: 'app-input-otp-variants-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-6' },
  template: DEMO_TEMPLATE,
})
export class InputOtpVariantsDemo {}
