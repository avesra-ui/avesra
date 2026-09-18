import { Component } from '@angular/core';

import { AvAccordionImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-accordion class="w-full max-w-md" allows-multiple>
      <av-accordion-item id="getting-started">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Getting Started
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>
            Learn the basics of Avesra and how to integrate it into your Angular project. This
            section covers installation, setup, and your first component.
          </div>
        </div>
      </av-accordion-item>

      <av-accordion-item id="core-concepts">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Core Concepts
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>
            Understand the fundamental concepts behind Avesra, including the compound component
            pattern, styling with Tailwind CSS, and accessibility features.
          </div>
        </div>
      </av-accordion-item>

      <av-accordion-item id="advanced-usage">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Advanced Usage
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>
            Explore advanced features like custom variants, theme customization, and integration
            with other libraries in your Angular ecosystem.
          </div>
        </div>
      </av-accordion-item>

      <av-accordion-item id="best-practices">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Best Practices
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>
            Follow our recommended best practices for building performant, accessible, and
            maintainable applications with Avesra components.
          </div>
        </div>
      </av-accordion-item>
    </av-accordion>`;

export const DEMO_NAME = 'accordion-multiple';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAccordionImports } from '@avesra/angular';

@Component({
  selector: 'app-accordion-multiple-demo',
  imports: [
    AvAccordionImports,
  ],
  host: { class: 'flex w-full justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class AccordionMultipleDemo {}`;

@Component({
  selector: 'app-accordion-multiple-demo',
  imports: [
    AvAccordionImports,
  ],
  host: { class: 'flex w-full justify-center' },
  template: DEMO_TEMPLATE,
})
export class AccordionMultipleDemo {}
