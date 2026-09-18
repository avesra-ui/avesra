import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvCardImports,
  AvCloseButtonComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-card class="w-full items-stretch md:flex-row">
      <div
        class="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]"
      >
        <img
          alt="Yellow pears"
          class="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src="/images/food/food-yellow-pears-pair.png"
        />
      </div>
      <div class="flex flex-1 flex-col gap-3">
        <div av-card-header class="gap-1">
          <h3 av-card-title class="pr-8">Become an ACME Creator!</h3>
          <p av-card-description>
            Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
            faucibus etiam.
          </p>
          <button
            av-close-button
            aria-label="Close banner"
            class="absolute top-3 right-3"
          ></button>
        </div>
        <div
          av-card-footer
          class="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="flex flex-col">
            <span class="text-sm font-medium text-foreground">Only 10 spots</span>
            <span class="text-xs text-muted">Submission ends Oct 10.</span>
          </div>
          <button av-button class="w-full sm:w-auto">Apply Now</button>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'card-horizontal-with-image';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvCardImports,
  AvCloseButtonComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-card-horizontal-with-image-demo',
  imports: [
    AvCardImports,
    AvButtonComponent,
    AvCloseButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CardHorizontalWithImageDemo {}`;

@Component({
  selector: 'app-card-horizontal-with-image-demo',
  imports: [
    AvCardImports,
    AvButtonComponent,
    AvCloseButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CardHorizontalWithImageDemo {}
