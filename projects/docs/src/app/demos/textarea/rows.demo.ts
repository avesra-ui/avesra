import { Component } from '@angular/core';

import { AvLabelComponent, AvTextareaComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-2">
  <label av-label for="textarea-rows-3">Short feedback</label>
  <textarea
    av-textarea
    full-width
    id="textarea-rows-3"
    aria-label="Short feedback"
    placeholder="This week's highlights..."
    rows="3"
  ></textarea>
</div>
<div class="flex flex-col gap-2">
  <label av-label for="textarea-rows-6">Detailed notes</label>
  <textarea
    av-textarea
    full-width
    id="textarea-rows-6"
    class="resize-y"
    aria-label="Detailed notes"
    placeholder="Write out the full meeting notes..."
    rows="6"
  ></textarea>
</div>`;

export const DEMO_NAME = 'textarea-rows';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLabelComponent, AvTextareaComponent } from '@avesra/angular';

@Component({
  selector: 'app-textarea-rows-demo',
  imports: [AvTextareaComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-4' },
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TextareaRowsDemo {}`;

@Component({
  selector: 'app-textarea-rows-demo',
  imports: [AvTextareaComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class TextareaRowsDemo {}
