import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="current"></span>
        <span class="text-xs text-muted">Current</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="accent"></span>
        <span class="text-xs text-muted">Accent</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="success"></span>
        <span class="text-xs text-muted">Success</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="warning"></span>
        <span class="text-xs text-muted">Warning</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="danger"></span>
        <span class="text-xs text-muted">Danger</span>
      </div>
    </div>`;

export const DEMO_NAME = 'spinner-colors';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSpinnerComponent } from '@avesra/angular';

@Component({
  selector: 'app-spinner-colors-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: \`<div class="flex items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="current"></span>
        <span class="text-xs text-muted">Current</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="accent"></span>
        <span class="text-xs text-muted">Accent</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="success"></span>
        <span class="text-xs text-muted">Success</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="warning"></span>
        <span class="text-xs text-muted">Warning</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <span av-spinner color="danger"></span>
        <span class="text-xs text-muted">Danger</span>
      </div>
    </div>\`,
})
export class SpinnerColorsDemo {}`;

@Component({
  selector: 'app-spinner-colors-demo',
  imports: [AvSpinnerComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SpinnerColorsDemo {}
