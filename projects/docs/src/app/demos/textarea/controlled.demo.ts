import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AvDescriptionComponent, AvTextareaComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<textarea
  av-textarea
  full-width
  aria-label="Announcement"
  aria-describedby="textarea-controlled-description"
  placeholder="Compose an announcement..."
  rows="4"
  [(ngModel)]="value"
></textarea>
<p av-description id="textarea-controlled-description">
  Characters: {{ value.length }} / 280
</p>`;

export const DEMO_NAME = 'textarea-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvDescriptionComponent, AvTextareaComponent } from '@avesra/angular';

@Component({
  selector: 'app-textarea-controlled-demo',
  imports: [FormsModule, AvTextareaComponent, AvDescriptionComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-2' },
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TextareaControlledDemo {
  value = '';
}`;

@Component({
  selector: 'app-textarea-controlled-demo',
  imports: [FormsModule, AvTextareaComponent, AvDescriptionComponent],
  host: { class: 'flex w-full max-w-sm flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class TextareaControlledDemo {
  value = '';
}
