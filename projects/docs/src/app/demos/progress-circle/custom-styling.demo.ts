import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-progress-circle aria-label="Loading" [value]="60">
  <svg av-progress-circle-track>
    <circle av-progress-circle-track-circle></circle>
    <circle av-progress-circle-fill-circle class="!stroke-purple-500"></circle>
  </svg>
</div>`;

export const DEMO_NAME = 'progress-circle-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';

@Component({
  selector: 'app-progress-circle-custom-styling-demo',
  imports: [AvProgressCircleImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressCircleCustomStylingDemo {}`;

@Component({
  selector: 'app-progress-circle-custom-styling-demo',
  imports: [AvProgressCircleImports],
  template: DEMO_TEMPLATE,
})
export class ProgressCircleCustomStylingDemo {}
