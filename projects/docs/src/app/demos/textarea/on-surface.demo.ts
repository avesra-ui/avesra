import { Component } from '@angular/core';

import { AvSurfaceComponent, AvTextareaComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-surface class="w-full rounded-3xl p-6">
  <textarea
    av-textarea
    full-width
    placeholder="Describe your product"
    variant="secondary"
    rows="4"
  ></textarea>
</div>`;

export const DEMO_NAME = 'textarea-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSurfaceComponent, AvTextareaComponent } from '@avesra/angular';

@Component({
  selector: 'app-textarea-on-surface-demo',
  imports: [AvTextareaComponent, AvSurfaceComponent],
  host: { class: 'w-full max-w-sm' },
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TextareaOnSurfaceDemo {}`;

@Component({
  selector: 'app-textarea-on-surface-demo',
  imports: [AvTextareaComponent, AvSurfaceComponent],
  host: { class: 'w-full max-w-sm' },
  template: DEMO_TEMPLATE,
})
export class TextareaOnSurfaceDemo {}
