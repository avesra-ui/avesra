import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="sm"></span>
        <span class="text-xs text-muted">Small</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="md"></span>
        <span class="text-xs text-muted">Medium</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="lg"></span>
        <span class="text-xs text-muted">Large</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="xl"></span>
        <span class="text-xs text-muted">Extra Large</span>
      </div>
    </div>`;

export const DEMO_NAME = 'spinner-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

@Component({
  selector: 'app-spinner-sizes-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: \`<div class="flex items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="sm"></span>
        <span class="text-xs text-muted">Small</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="md"></span>
        <span class="text-xs text-muted">Medium</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="lg"></span>
        <span class="text-xs text-muted">Large</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner size="xl"></span>
        <span class="text-xs text-muted">Extra Large</span>
      </div>
    </div>\`,
})
export class SpinnerSizesDemo {}`;

@Component({
  selector: 'app-spinner-sizes-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SpinnerSizesDemo {}
