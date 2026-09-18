import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-3">
      <a av-link href="#">
        Icon at end (default)
        <span av-link-icon></span>
      </a>
      <a av-link class="gap-1" href="#">
        <span av-link-icon></span>
        Icon at start
      </a>
    </div>`;

export const DEMO_NAME = 'link-icon-placement';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

@Component({
  selector: 'app-link-icon-placement-demo',
  imports: [AvLinkImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class LinkIconPlacementDemo {}`;

@Component({
  selector: 'app-link-icon-placement-demo',
  imports: [AvLinkImports],
  template: DEMO_TEMPLATE,
})
export class LinkIconPlacementDemo {}
