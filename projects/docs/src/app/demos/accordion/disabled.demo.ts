import { Component } from '@angular/core';

import { AvAccordionImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex w-full flex-col items-center gap-8">
      <div class="w-full max-w-md space-y-2">
        <h3 class="text-sm font-medium text-muted">Entire accordion disabled</h3>
        <av-accordion class="w-full max-w-md" disabled>
          <av-accordion-item id="disabled-all-1">
            <h3 av-accordion-heading>
              <button av-accordion-trigger>
                Disabled Item 1
                <svg av-accordion-indicator></svg>
              </button>
            </h3>
            <div av-accordion-panel>
              <div av-accordion-body>
                This content cannot be accessed when the accordion is disabled.
              </div>
            </div>
          </av-accordion-item>
          <av-accordion-item id="disabled-all-2">
            <h3 av-accordion-heading>
              <button av-accordion-trigger>
                Disabled Item 2
                <svg av-accordion-indicator></svg>
              </button>
            </h3>
            <div av-accordion-panel>
              <div av-accordion-body>
                This content cannot be accessed when the accordion is disabled.
              </div>
            </div>
          </av-accordion-item>
        </av-accordion>
      </div>

      <div class="w-full max-w-md space-y-2">
        <h3 class="text-sm font-medium text-muted">Individual items disabled</h3>
        <av-accordion class="w-full max-w-md">
          <av-accordion-item id="disabled-item-1">
            <h3 av-accordion-heading>
              <button av-accordion-trigger>
                Active Item
                <svg av-accordion-indicator></svg>
              </button>
            </h3>
            <div av-accordion-panel>
              <div av-accordion-body>This item is active and can be toggled normally.</div>
            </div>
          </av-accordion-item>
          <av-accordion-item id="disabled-item-2" disabled>
            <h3 av-accordion-heading>
              <button av-accordion-trigger>
                Disabled Item
                <svg av-accordion-indicator></svg>
              </button>
            </h3>
            <div av-accordion-panel>
              <div av-accordion-body>
                This content cannot be accessed when the item is disabled.
              </div>
            </div>
          </av-accordion-item>
          <av-accordion-item id="disabled-item-3">
            <h3 av-accordion-heading>
              <button av-accordion-trigger>
                Another Active Item
                <svg av-accordion-indicator></svg>
              </button>
            </h3>
            <div av-accordion-panel>
              <div av-accordion-body>This item is also active and can be toggled.</div>
            </div>
          </av-accordion-item>
        </av-accordion>
      </div>
    </div>`;

export const DEMO_NAME = 'accordion-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAccordionImports } from '@avesra/angular';

@Component({
  selector: 'app-accordion-disabled-demo',
  imports: [
    AvAccordionImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AccordionDisabledDemo {}`;

@Component({
  selector: 'app-accordion-disabled-demo',
  imports: [
    AvAccordionImports,
  ],
  template: DEMO_TEMPLATE,
})
export class AccordionDisabledDemo {}
