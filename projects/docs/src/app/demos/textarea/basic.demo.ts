import { Component } from '@angular/core';
import { AvLabelComponent, AvTextareaComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="textarea-basic">Description</label>
      <textarea
        av-textarea
        id="textarea-basic"
        placeholder="Describe your product"
        rows="4"
        aria-label="Description"
      ></textarea>`;

export const DEMO_NAME = 'textarea-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLabelComponent, AvTextareaComponent } from '@avesra/angular';

@Component({
  selector: 'app-textarea-basic-demo',
  imports: [AvTextareaComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: \`<label av-label for="textarea-basic">Description</label>
      <textarea
        av-textarea
        id="textarea-basic"
        placeholder="Describe your product"
        rows="4"
        aria-label="Description"
      ></textarea>\`,
})
export class TextareaBasicDemo {}`;

@Component({
  selector: 'app-textarea-basic-demo',
  imports: [AvTextareaComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class TextareaBasicDemo {}
