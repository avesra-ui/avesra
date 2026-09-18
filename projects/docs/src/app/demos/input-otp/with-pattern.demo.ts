import { Component } from '@angular/core';
import {
  AV_REGEXP_ONLY_CHARS,
  AvDescriptionComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label>Enter code (letters only)</label>
<p av-description>Only alphabetic characters are allowed</p>
<div av-input-otp [maxLength]="6" [pattern]="regexpOnlyChars">
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

export const DEMO_NAME = 'input-otp-with-pattern';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AV_REGEXP_ONLY_CHARS,
  AvDescriptionComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-with-pattern-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpWithPatternDemo {
  readonly regexpOnlyChars = AV_REGEXP_ONLY_CHARS;
}`;

@Component({
  selector: 'app-input-otp-with-pattern-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpWithPatternDemo {
  readonly regexpOnlyChars = AV_REGEXP_ONLY_CHARS;
}
