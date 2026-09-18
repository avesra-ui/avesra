import { Component, signal } from '@angular/core';

import { AvAccordionImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-accordion
      class="w-full max-w-md"
      variant="surface"
      [(expandedKeys)]="expandedKeys"
    >
      <av-accordion-item id="1">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Using Plus/Minus Icon
            <span
              av-accordion-indicator
              class="inline-flex size-4 items-center justify-center data-[expanded=true]:!rotate-0"
            >
              @if (expandedKeys().includes('1')) {
                <app-icon icon="solar:minus-circle-linear" size="16" />
              } @else {
                <app-icon icon="solar:add-circle-linear" size="16" />
              }
            </span>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>
            This accordion uses a plus icon that transforms when expanded. The icon automatically
            rotates 45 degrees to form an X.
          </div>
        </div>
      </av-accordion-item>

      <av-accordion-item id="2">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Using Caret Icon
            <span av-accordion-indicator class="inline-flex size-4 items-center justify-center">
              <app-icon icon="solar:alt-arrow-down-linear" size="16" />
            </span>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>
            This item uses a caret icon for the indicator. The rotation animation is applied
            automatically.
          </div>
        </div>
      </av-accordion-item>

      <av-accordion-item id="3">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Using Arrow Icon
            <span av-accordion-indicator class="inline-flex size-4 items-center justify-center">
              <app-icon icon="solar:double-alt-arrow-down-linear" size="16" />
            </span>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>
            This item uses an arrow icon. Any icon you pass will receive the rotation animation when
            the item expands.
          </div>
        </div>
      </av-accordion-item>
    </av-accordion>`;

export const DEMO_NAME = 'accordion-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvAccordionImports } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-accordion-custom-indicator-demo',
  imports: [
    AvAccordionImports,
    AppIconComponent,
  ],
  host: { class: 'flex w-full justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class AccordionCustomIndicatorDemo {
  readonly expandedKeys = signal<string[]>([]);
}`;

@Component({
  selector: 'app-accordion-custom-indicator-demo',
  imports: [
    AvAccordionImports,
    AppIconComponent,
  ],
  host: { class: 'flex w-full justify-center' },
  template: DEMO_TEMPLATE,
})
export class AccordionCustomIndicatorDemo {
  readonly expandedKeys = signal<string[]>([]);
}
