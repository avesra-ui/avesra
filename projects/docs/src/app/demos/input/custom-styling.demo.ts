import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-2">
      <label av-label for="custom-input">Project name</label>
      <input
        av-input
        id="custom-input"
        class="rounded-xl border border-border/70 bg-surface px-4 py-2 text-sm shadow-sm"
        placeholder="New web app"
      />
    </div>`;

export const DEMO_NAME = 'input-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-input-custom-styling-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputCustomStylingDemo {}`;

@Component({
  selector: 'app-input-custom-styling-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-sm justify-center' },
  template: DEMO_TEMPLATE,
})
export class InputCustomStylingDemo {}
