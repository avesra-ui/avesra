import { Component, computed, signal } from '@angular/core';

import { AvAccordionImports, AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

interface AccordionDemoItem {
  id: string;
  title: string;
  content: string;
}

const CONTROLLED_ITEMS: AccordionDemoItem[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content:
      'Learn the basics of Avesra and how to integrate it into your Angular project. This section covers installation, setup, and your first component.',
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    content:
      'Understand the fundamental concepts behind Avesra, including the compound component pattern, styling with Tailwind CSS, and accessibility features.',
  },
  {
    id: 'advanced-usage',
    title: 'Advanced Usage',
    content:
      'Explore advanced features like custom variants, theme customization, and integration with other libraries in your Angular ecosystem.',
  },
];

const DEMO_TEMPLATE = `<div class="w-full max-w-md">
      <div class="mb-4 flex items-center justify-between">
        <p class="text-sm text-muted">
          Expanded: <strong>{{ expandedLabel() }}</strong>
        </p>
        <div class="flex gap-2">
          <button
            av-button
            type="button"
            variant="secondary"
            size="sm"
            aria-label="Previous item"
            [disabled]="isPrevDisabled()"
            (click)="onPrevious()"
          >
            <app-icon icon="solar:alt-arrow-up-linear" size="16" />
          </button>
          <button
            av-button
            type="button"
            variant="secondary"
            size="sm"
            aria-label="Next item"
            [disabled]="isNextDisabled()"
            (click)="onNext()"
          >
            <app-icon icon="solar:alt-arrow-down-linear" size="16" />
          </button>
        </div>
      </div>
      <av-accordion [(expandedKeys)]="expandedKeys">
        @for (item of items; track item.id) {
          <av-accordion-item [id]="item.id">
            <h3 av-accordion-heading>
              <button av-accordion-trigger>
                {{ item.title }}
                <svg av-accordion-indicator></svg>
              </button>
            </h3>
            <div av-accordion-panel>
              <div av-accordion-body>{{ item.content }}</div>
            </div>
          </av-accordion-item>
        }
      </av-accordion>
    </div>`;

export const DEMO_NAME = 'accordion-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import { AvAccordionImports, AvButtonComponent } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-accordion-controlled-demo',
  imports: [
    AvAccordionImports,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AccordionControlledDemo {
  readonly items = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content:
        'Learn the basics of Avesra and how to integrate it into your Angular project. This section covers installation, setup, and your first component.',
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      content:
        'Understand the fundamental concepts behind Avesra, including the compound component pattern, styling with Tailwind CSS, and accessibility features.',
    },
    {
      id: 'advanced-usage',
      title: 'Advanced Usage',
      content:
        'Explore advanced features like custom variants, theme customization, and integration with other libraries in your Angular ecosystem.',
    },
  ];

  readonly expandedKeys = signal<string[]>(['getting-started']);
  readonly itemIds = this.items.map((item) => item.id);

  readonly expandedLabel = computed(() => this.expandedKeys().join(', ') || 'none');

  readonly isPrevDisabled = computed(() => {
    const current = this.expandedKeys()[0];
    return !current || this.itemIds.indexOf(current) <= 0;
  });

  readonly isNextDisabled = computed(() => {
    const current = this.expandedKeys()[0];
    const index = this.itemIds.indexOf(current);
    return index < 0 || index >= this.itemIds.length - 1;
  });

  onPrevious(): void {
    const current = this.expandedKeys()[0];
    const index = this.itemIds.indexOf(current);
    if (index > 0) {
      this.expandedKeys.set([this.itemIds[index - 1]]);
    }
  }

  onNext(): void {
    const current = this.expandedKeys()[0];
    const index = this.itemIds.indexOf(current);
    if (index >= 0 && index < this.itemIds.length - 1) {
      this.expandedKeys.set([this.itemIds[index + 1]]);
    }
  }
}`;

@Component({
  selector: 'app-accordion-controlled-demo',
  imports: [
    AvAccordionImports,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AccordionControlledDemo {
  readonly items = CONTROLLED_ITEMS;
  readonly expandedKeys = signal<string[]>(['getting-started']);
  readonly itemIds = this.items.map((item) => item.id);

  readonly expandedLabel = computed(() => this.expandedKeys().join(', ') || 'none');

  readonly isPrevDisabled = computed(() => {
    const current = this.expandedKeys()[0];
    return !current || this.itemIds.indexOf(current) <= 0;
  });

  readonly isNextDisabled = computed(() => {
    const current = this.expandedKeys()[0];
    const index = this.itemIds.indexOf(current);
    return index < 0 || index >= this.itemIds.length - 1;
  });

  onPrevious(): void {
    const current = this.expandedKeys()[0];
    const index = this.itemIds.indexOf(current);
    if (index > 0) {
      this.expandedKeys.set([this.itemIds[index - 1]]);
    }
  }

  onNext(): void {
    const current = this.expandedKeys()[0];
    const index = this.itemIds.indexOf(current);
    if (index >= 0 && index < this.itemIds.length - 1) {
      this.expandedKeys.set([this.itemIds[index + 1]]);
    }
  }
}
