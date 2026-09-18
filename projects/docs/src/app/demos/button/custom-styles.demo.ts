import { Component } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="relative inline-flex items-center justify-center">
      <span
        class="pointer-events-none absolute inset-[-28%] rounded-full bg-accent/25 blur-2xl dark:bg-accent/35"
        aria-hidden="true"
      ></span>
      <button
        av-button
        variant="ghost"
        class="relative rounded-full border-0 bg-foreground px-9 py-3 text-[15px] font-medium tracking-wide text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_28px_-12px_rgba(0,0,0,0.45)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_16px_36px_-12px_rgba(0,0,0,0.5)] hover:brightness-110 active:translate-y-0 active:scale-[0.98] dark:bg-white dark:text-neutral-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_32px_-10px_rgba(255,255,255,0.35)]"
      >
        Upgrade
      </button>
    </div>`;

export const DEMO_NAME = 'button-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-button-custom-styles-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonCustomStylesDemo {}`;

@Component({
  selector: 'app-button-custom-styles-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonCustomStylesDemo {}
