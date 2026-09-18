import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-3">
      <a av-link href="https://github.com/">
        GitHub (auto external)
        <span av-link-icon></span>
      </a>
      <a av-link href="mailto:support&#64;example.com">
        Email us
        <span av-link-icon></span>
      </a>
      <a av-link href="tel:+1234567890">
        Call us
        <span av-link-icon></span>
      </a>
      <a av-link href="https://example.com" [external]="false">
        External URL, same tab override
      </a>
      <a av-link href="https://example.com" target="_self" rel="nofollow">
        Explicit target and rel
      </a>
    </div>`;

export const DEMO_NAME = 'link-external-links';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

@Component({
  selector: 'app-link-external-links-demo',
  imports: [AvLinkImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class LinkExternalLinksDemo {}`;

@Component({
  selector: 'app-link-external-links-demo',
  imports: [AvLinkImports],
  template: DEMO_TEMPLATE,
})
export class LinkExternalLinksDemo {}
