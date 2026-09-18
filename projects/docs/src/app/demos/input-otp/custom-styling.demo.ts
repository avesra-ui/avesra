import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-2">
  <label av-label>Enter verification code</label>
  <div av-input-otp class="gap-3" container-class="gap-4" [maxLength]="6">
    <div av-input-otp-group class="gap-3">
      <div av-input-otp-slot class="size-12 rounded-lg border-2 text-lg font-bold" [index]="0"></div>
      <div av-input-otp-slot class="size-12 rounded-lg border-2 text-lg font-bold" [index]="1"></div>
      <div av-input-otp-slot class="size-12 rounded-lg border-2 text-lg font-bold" [index]="2"></div>
    </div>
    <div av-input-otp-separator class="bg-border h-1 w-2 rounded-full"></div>
    <div av-input-otp-group class="gap-3">
      <div av-input-otp-slot class="size-12 rounded-lg border-2 text-lg font-bold" [index]="3"></div>
      <div av-input-otp-slot class="size-12 rounded-lg border-2 text-lg font-bold" [index]="4"></div>
      <div av-input-otp-slot class="size-12 rounded-lg border-2 text-lg font-bold" [index]="5"></div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'input-otp-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-custom-styling-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-[320px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpCustomStylingDemo {}`;

@Component({
  selector: 'app-input-otp-custom-styling-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full max-w-[320px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpCustomStylingDemo {}
