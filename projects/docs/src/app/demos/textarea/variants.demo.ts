import { Component } from '@angular/core';
import { AvTextareaComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<textarea av-textarea full-width placeholder="Primary textarea" variant="primary" rows="3"></textarea>
      <textarea av-textarea full-width placeholder="Secondary textarea" variant="secondary" rows="3"></textarea>`;

export const DEMO_NAME = 'textarea-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTextareaComponent } from '@avesra/angular';

@Component({
  selector: 'app-textarea-variants-demo',
  imports: [AvTextareaComponent],
  host: { class: 'flex w-full max-w-96 flex-col gap-4' },
  template: \`<textarea av-textarea full-width placeholder="Primary textarea" variant="primary" rows="3"></textarea>
      <textarea av-textarea full-width placeholder="Secondary textarea" variant="secondary" rows="3"></textarea>\`,
})
export class TextareaVariantsDemo {}`;

@Component({
  selector: 'app-textarea-variants-demo',
  imports: [AvTextareaComponent],
  host: { class: 'flex w-full max-w-96 flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class TextareaVariantsDemo {}
