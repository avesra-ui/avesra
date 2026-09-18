import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-end gap-6">
  <div av-progress-circle aria-label="Thin circle" [value]="60">
    <svg av-progress-circle-track viewBox="0 0 36 36">
      <circle av-progress-circle-track-circle [cx]="18" [cy]="18" [r]="17" stroke-width="2"></circle>
      <circle av-progress-circle-fill-circle [cx]="18" [cy]="18" [r]="17" stroke-width="2"></circle>
    </svg>
  </div>

  <div av-progress-circle aria-label="Default circle" [value]="60">
    <svg av-progress-circle-track>
      <circle av-progress-circle-track-circle></circle>
      <circle av-progress-circle-fill-circle></circle>
    </svg>
  </div>

  <div av-progress-circle aria-label="Thick circle" [value]="60">
    <svg av-progress-circle-track viewBox="0 0 36 36">
      <circle av-progress-circle-track-circle [cx]="18" [cy]="18" [r]="15" stroke-width="6"></circle>
      <circle av-progress-circle-fill-circle [cx]="18" [cy]="18" [r]="15" stroke-width="6"></circle>
    </svg>
  </div>
</div>`;

export const DEMO_NAME = 'progress-circle-custom-svg';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvProgressCircleImports } from '@avesra/angular';

@Component({
  selector: 'app-progress-circle-custom-svg-demo',
  imports: [AvProgressCircleImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ProgressCircleCustomSvgDemo {}`;

@Component({
  selector: 'app-progress-circle-custom-svg-demo',
  imports: [AvProgressCircleImports],
  template: DEMO_TEMPLATE,
})
export class ProgressCircleCustomSvgDemo {}
