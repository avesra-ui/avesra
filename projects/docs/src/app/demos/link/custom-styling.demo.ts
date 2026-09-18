import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<a
  av-link
  class="text-lg font-bold text-accent hover:text-accent/80"
  href="#"
>
  Custom styled link
</a>`;

export const DEMO_NAME = 'link-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

@Component({
  selector: 'app-link-custom-styling-demo',
  imports: [AvLinkImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class LinkCustomStylingDemo {}`;

@Component({
  selector: 'app-link-custom-styling-demo',
  imports: [AvLinkImports],
  template: DEMO_TEMPLATE,
})
export class LinkCustomStylingDemo {}
