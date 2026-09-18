import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4">
  <span av-spinner class="text-accent" size="sm"></span>
  <span av-spinner class="text-muted" size="md"></span>
  <span av-spinner class="text-success" size="lg"></span>
</div>`;

export const DEMO_NAME = 'spinner-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

@Component({
  selector: 'app-spinner-custom-styling-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SpinnerCustomStylingDemo {}`;

@Component({
  selector: 'app-spinner-custom-styling-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SpinnerCustomStylingDemo {}
