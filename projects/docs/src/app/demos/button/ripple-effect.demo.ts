import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<button av-button variant="secondary" class="relative overflow-hidden">
  <span class="ripple-dot" aria-hidden="true"></span>
  Click me
</button>`;

export const DEMO_NAME = 'button-ripple-effect';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-ripple-effect-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
  styles: [\`
    .ripple-dot {
      position: absolute;
      inset: 50% auto auto 50%;
      width: 0;
      height: 0;
      border-radius: 9999px;
      background: currentColor;
      opacity: 0.2;
      transform: translate(-50%, -50%);
      animation: ripple-pulse 1.5s ease-out infinite;
      pointer-events: none;
    }

    @keyframes ripple-pulse {
      0% { width: 0; height: 0; opacity: 0.3; }
      100% { width: 200%; height: 200%; opacity: 0; }
    }
  \`],
})
export class ButtonRippleEffectDemo {}`;

@Component({
  selector: 'app-button-ripple-effect-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
  styles: [`
    .ripple-dot {
      position: absolute;
      inset: 50% auto auto 50%;
      width: 0;
      height: 0;
      border-radius: 9999px;
      background: currentColor;
      opacity: 0.2;
      transform: translate(-50%, -50%);
      animation: ripple-pulse 1.5s ease-out infinite;
      pointer-events: none;
    }

    @keyframes ripple-pulse {
      0% { width: 0; height: 0; opacity: 0.3; }
      100% { width: 200%; height: 200%; opacity: 0; }
    }
  `],
})
export class ButtonRippleEffectDemo {}
