import { Component } from '@angular/core';
import { AvProgressBarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-64" av-progress-bar aria-label="Loading progress" [value]="45">
  <div av-progress-bar-track>
    <div av-progress-bar-fill></div>
  </div>
</div>`;

export const DEMO_NAME = 'progress-bar-without-label';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvProgressBarImports } from '@avesra/angular';

@Component({
  selector: 'app-progress-bar-without-label-demo',
  imports: [AvProgressBarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressBarWithoutLabelDemo {}`;

@Component({
  selector: 'app-progress-bar-without-label-demo',
  imports: [AvProgressBarImports],
  template: DEMO_TEMPLATE,
})
export class ProgressBarWithoutLabelDemo {}
