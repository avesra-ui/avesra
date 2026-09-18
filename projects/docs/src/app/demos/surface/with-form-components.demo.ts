import { Component } from '@angular/core';
import { AvInputComponent, AvSurfaceComponent, AvTextareaComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-surface
  variant="default"
  class="flex w-full max-w-md flex-col gap-3 rounded-3xl p-6"
>
  <input
    av-input
    full-width
    placeholder="Input with secondary variant"
    variant="secondary"
    aria-label="Name"
  />
  <textarea
    av-textarea
    full-width
    placeholder="TextArea with secondary variant"
    variant="secondary"
    aria-label="Message"
    rows="3"
  ></textarea>
</div>`;

export const DEMO_NAME = 'surface-with-form-components';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvSurfaceComponent, AvTextareaComponent } from '@avesra/angular';

@Component({
  selector: 'app-surface-with-form-components-demo',
  imports: [AvSurfaceComponent, AvInputComponent, AvTextareaComponent],
  host: { class: 'flex w-full items-center justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SurfaceWithFormComponentsDemo {}`;

@Component({
  selector: 'app-surface-with-form-components-demo',
  imports: [AvSurfaceComponent, AvInputComponent, AvTextareaComponent],
  host: { class: 'flex w-full items-center justify-center' },
  template: DEMO_TEMPLATE,
})
export class SurfaceWithFormComponentsDemo {}
