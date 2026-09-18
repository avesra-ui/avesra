import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<a av-link href="#">
  Call to action
  <span av-link-icon></span>
</a>`;

export const DEMO_NAME = 'link-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

@Component({
  selector: 'app-link-basic-demo',
  imports: [AvLinkImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class LinkBasicDemo {}`;

@Component({
  selector: 'app-link-basic-demo',
  imports: [AvLinkImports],
  template: DEMO_TEMPLATE,
})
export class LinkBasicDemo {}
