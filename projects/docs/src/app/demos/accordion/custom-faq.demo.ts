import { Component } from '@angular/core';

import { AvAccordionImports } from '@avesra/angular';

interface AccordionDemoItem {
  title: string;
  content: string;
}

interface AccordionDemoCategory {
  title: string;
  items: AccordionDemoItem[];
}

const FAQ_CATEGORIES: AccordionDemoCategory[] = [
  {
    title: 'General',
    items: [
      {
        title: 'How do I place an order?',
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
      {
        title: 'Can I modify or cancel my order?',
        content:
          "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
      },
    ],
  },
  {
    title: 'Licensing',
    items: [
      {
        title: 'How do I purchase a license?',
        content:
          'You can purchase a license directly from our website. Select the license type that fits your needs and proceed to checkout.',
      },
      {
        title: 'What is the difference between a standard and a pro license?',
        content:
          'A standard license is for personal use or small projects, while a pro license includes commercial use rights and priority support.',
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        title: 'How do I get support?',
        content:
          'You can reach our support team through the contact form on our website, or email us directly at support@example.com.',
      },
    ],
  },
];

const DEMO_TEMPLATE = `<div class="flex w-full flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
        <p class="mb-4 text-lg font-medium text-muted">
          Everything you need to know about licensing and usage.
        </p>
      </div>
      @for (category of categories; track category.title) {
        <div>
          <p class="text-md mb-2 font-medium text-muted">{{ category.title }}</p>
          <av-accordion class="w-full" variant="surface">
            @for (item of category.items; track item.title; let index = $index) {
              <av-accordion-item [id]="category.title + '-' + index">
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
        </div>
      }
    </div>`;

export const DEMO_NAME = 'accordion-faq';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAccordionImports } from '@avesra/angular';

@Component({
  selector: 'app-accordion-custom-faq-demo',
  imports: [
    AvAccordionImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AccordionCustomFaqDemo {
  readonly categories = ${JSON.stringify(FAQ_CATEGORIES, null, 2)};
}`;

@Component({
  selector: 'app-accordion-custom-faq-demo',
  imports: [
    AvAccordionImports,
  ],
  template: DEMO_TEMPLATE,
})
export class AccordionCustomFaqDemo {
  readonly categories = FAQ_CATEGORIES;
}
