import { Component } from '@angular/core';

import { AvCloseButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<button av-close-button aria-label="Close"></button>`;

export const DEMO_NAME = 'close-button-default';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCloseButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-close-button-default-demo',
  imports: [AvCloseButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CloseButtonDefaultDemo {}`;

@Component({
  selector: 'app-close-button-default-demo',
  imports: [AvCloseButtonComponent],
  template: DEMO_TEMPLATE,
})
export class CloseButtonDefaultDemo {}
