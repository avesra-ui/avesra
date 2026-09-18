import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label>Verify account</label>
<div av-input-otp [maxLength]="6" [(value)]="value">
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
<p av-description>
  @if (value().length > 0) {
    Value: {{ value() }} ({{ value().length }}/6) •
    <button type="button" class="font-medium text-foreground underline" (click)="clear()">Clear</button>
  } @else {
    Enter a 6-digit code
  }
</p>`;

export const DEMO_NAME = 'input-otp-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-controlled-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpControlledDemo {
  value = signal('');

  clear(): void {
    this.value.set('');
  }
}`;

@Component({
  selector: 'app-input-otp-controlled-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpControlledDemo {
  value = signal('');

  clear(): void {
    this.value.set('');
  }
}
