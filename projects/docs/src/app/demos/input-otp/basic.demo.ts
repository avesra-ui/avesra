import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
  AvLinkImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-1">
  <label av-label>Verify account</label>
  <p class="text-sm text-muted">We've sent a code to a****&#64;gmail.com</p>
</div>
<div av-input-otp [maxLength]="6">
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
<div class="flex items-center gap-[5px] px-1 pt-1">
  <p class="text-sm text-muted">Didn't receive a code?</p>
  <a av-link class="text-foreground" underline="always" href="#" (click)="$event.preventDefault()">Resend</a>
</div>`;

export const DEMO_NAME = 'input-otp-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
  AvLinkImports,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-basic-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvLinkImports,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpBasicDemo {}`;

@Component({
  selector: 'app-input-otp-basic-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvLinkImports,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpBasicDemo {}
