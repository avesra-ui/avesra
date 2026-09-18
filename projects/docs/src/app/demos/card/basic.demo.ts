import { Component } from '@angular/core';

import {
  AvCardImports,
  AvLinkImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-card class="w-[400px]">
      <span class="self-start" role="img" aria-label="Dollar sign icon">
        <app-icon icon="solar:dollar-linear" size="24" class="text-foreground" />
      </span>
      <div av-card-header>
        <h3 av-card-title>Become an Acme Creator!</h3>
        <p av-card-description>
          Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
          followers.
        </p>
      </div>
      <div av-card-footer>
        <a
          av-link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://github.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <span av-link-icon></span>
        </a>
      </div>
    </div>`;

export const DEMO_NAME = 'card-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCardImports,
  AvLinkImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-card-basic-demo',
  imports: [
    AvCardImports,
    AvLinkImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CardBasicDemo {}`;

@Component({
  selector: 'app-card-basic-demo',
  imports: [
    AvCardImports,
    AvLinkImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CardBasicDemo {}
