import { Component } from '@angular/core';
import { AvSurfaceComponent, AvTextareaComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<textarea av-textarea full-width placeholder="Full width textarea" rows="4"></textarea>
      <div av-surface class="w-full rounded-3xl p-6">
        <textarea
          av-textarea
          full-width
          placeholder="Full width textarea on surface"
          variant="secondary"
          rows="4"
        ></textarea>
      </div>`;

export const DEMO_NAME = 'textarea-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSurfaceComponent, AvTextareaComponent } from '@avesra/angular';

@Component({
  selector: 'app-textarea-full-width-demo',
  imports: [AvTextareaComponent, AvSurfaceComponent],
  host: { class: 'flex w-full max-w-96 flex-col gap-4' },
  template: \`<textarea av-textarea full-width placeholder="Full width textarea" rows="4"></textarea>
      <div av-surface class="w-full rounded-3xl p-6">
        <textarea
          av-textarea
          full-width
          placeholder="Full width textarea on surface"
          variant="secondary"
          rows="4"
        ></textarea>
      </div>\`,
})
export class TextareaFullWidthDemo {}`;

@Component({
  selector: 'app-textarea-full-width-demo',
  imports: [AvTextareaComponent, AvSurfaceComponent],
  host: { class: 'flex w-full max-w-96 flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class TextareaFullWidthDemo {}
