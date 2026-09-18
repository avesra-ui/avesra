import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
  AvLinkImports,
  AvSurfaceComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-surface class="flex w-full flex-col gap-2 rounded-3xl p-6">
  <div class="flex flex-col gap-1">
    <label av-label>Verify account</label>
    <p class="text-sm text-muted">We've sent a code to a****&#64;gmail.com</p>
  </div>
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
  <div class="flex items-center gap-[5px] px-1 pt-1">
    <p class="text-sm text-muted">Didn't receive a code?</p>
    <a av-link class="text-foreground" underline="always" href="#" (click)="$event.preventDefault()">Resend</a>
  </div>
</div>`;

export const DEMO_NAME = 'input-otp-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
  AvLinkImports,
  AvSurfaceComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-on-surface-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvLinkImports,
    AvSurfaceComponent,
  ],
  host: { class: 'flex w-full flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpOnSurfaceDemo {}`;

@Component({
  selector: 'app-input-otp-on-surface-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvLinkImports,
    AvSurfaceComponent,
  ],
  host: { class: 'flex w-full flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpOnSurfaceDemo {}
