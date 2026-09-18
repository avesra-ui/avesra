import { Component } from '@angular/core';
import { AvInputComponent, AvSurfaceComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
      av-surface
      class="flex h-[180px] w-[280px] items-center justify-center rounded-3xl p-4"
    >
      <input
        av-input
        class="w-full"
        placeholder="Your name"
        variant="secondary"
        aria-label="Name"
      />
    </div>`;

export const DEMO_NAME = 'input-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvSurfaceComponent } from '@avesra/angular';

@Component({
  selector: 'app-input-on-surface-demo',
  imports: [AvInputComponent, AvSurfaceComponent],
  host: { class: 'flex w-full items-center justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOnSurfaceDemo {}`;

@Component({
  selector: 'app-input-on-surface-demo',
  imports: [AvInputComponent, AvSurfaceComponent],
  host: { class: 'flex w-full items-center justify-center' },
  template: DEMO_TEMPLATE,
})
export class InputOnSurfaceDemo {}
