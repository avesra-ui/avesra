export const SNIPPET_ID = 'input-otp-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div av-input-otp [maxLength]="6">
  <div av-input-otp-group>
    <div av-input-otp-slot [index]="0"></div>
    <div av-input-otp-slot [index]="1"></div>
    <!-- ...rest of the slots -->
  </div>
  <div av-input-otp-separator></div>
  <div av-input-otp-group>
    <div av-input-otp-slot [index]="3"></div>
    <!-- ...rest of the slots -->
  </div>
</div>`;
