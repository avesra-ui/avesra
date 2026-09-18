import { Component } from '@angular/core';

import { AvCloseButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<button
  av-close-button
  class="size-8 rounded-full bg-danger-soft text-danger hover:bg-danger-soft-hover"
  aria-label="Close"
></button>`;

export const DEMO_NAME = 'close-button-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCloseButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-close-button-custom-styling-demo',
  imports: [AvCloseButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CloseButtonCustomStylingDemo {}`;

@Component({
  selector: 'app-close-button-custom-styling-demo',
  imports: [AvCloseButtonComponent],
  template: DEMO_TEMPLATE,
})
export class CloseButtonCustomStylingDemo {}
