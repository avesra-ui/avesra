import { Component } from '@angular/core';

import { AvCheckboxImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex gap-4">
      <div av-checkbox default-selected name="heart">
        <span av-checkbox-control>
          <span av-checkbox-indicator>
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </span>
        <span av-checkbox-content>Heart</span>
      </div>
      <div av-checkbox default-selected name="plus">
        <span av-checkbox-control>
          <span av-checkbox-indicator>
            <svg fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
              <path
                d="M12 18V6"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
            </svg>
          </span>
        </span>
        <span av-checkbox-content>Plus</span>
      </div>
      <div av-checkbox [indeterminate]="true" name="indeterminate">
        <span av-checkbox-control>
          <span av-checkbox-indicator>
            <svg stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="21" x2="3" y1="12" y2="12" />
            </svg>
          </span>
        </span>
        <span av-checkbox-content>Indeterminate</span>
      </div>
    </div>`;

export const DEMO_NAME = 'checkbox-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCheckboxImports } from '@avesra/angular';

@Component({
  selector: 'app-checkbox-custom-indicator-demo',
  imports: [AvCheckboxImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxCustomIndicatorDemo {}`;

@Component({
  selector: 'app-checkbox-custom-indicator-demo',
  imports: [AvCheckboxImports],
  template: DEMO_TEMPLATE,
})
export class CheckboxCustomIndicatorDemo {}
