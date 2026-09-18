import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap items-center gap-4">
      <a av-link href="#">
        Primary link
        <span av-link-icon></span>
      </a>
      <a av-link variant="secondary" href="#">
        Secondary link
        <span av-link-icon></span>
      </a>
      <a av-link variant="muted" href="#">
        Muted link
        <span av-link-icon></span>
      </a>
    </div>`;

export const DEMO_NAME = 'link-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

@Component({
  selector: 'app-link-variants-demo',
  imports: [AvLinkImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class LinkVariantsDemo {}`;

@Component({
  selector: 'app-link-variants-demo',
  imports: [AvLinkImports],
  template: DEMO_TEMPLATE,
})
export class LinkVariantsDemo {}
