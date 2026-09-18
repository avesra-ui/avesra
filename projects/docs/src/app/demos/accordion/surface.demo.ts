import { Component } from '@angular/core';

import { AvAccordionImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

interface AccordionDemoItem {
  title: string;
  content: string;
  icon?: string;
}

const DEFAULT_ITEMS: AccordionDemoItem[] = [
  {
    title: 'How do I place an order?',
    content:
      "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
    icon: 'solar:bag-linear',
  },
  {
    title: 'Can I modify or cancel my order?',
    content:
      "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
    icon: 'solar:bill-list-linear',
  },
  {
    title: 'What payment methods do you accept?',
    content: 'We accept all major credit cards, including Visa, Mastercard, and American Express.',
    icon: 'solar:card-linear',
  },
  {
    title: 'How much does shipping cost?',
    content:
      'Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.',
    icon: 'solar:box-linear',
  },
  {
    title: 'Do you ship internationally?',
    content:
      'Yes, we ship to most countries. Please check our shipping rates and policies for more information.',
    icon: 'solar:global-linear',
  },
  {
    title: 'How do I request a refund?',
    content:
      "If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",
    icon: 'solar:refresh-linear',
  },
];

const DEMO_TEMPLATE = `<div class="mx-auto w-full max-w-md">
      <av-accordion class="w-full max-w-md" variant="surface">
        @for (item of defaultItems; track item.title; let index = $index) {
          <av-accordion-item [id]="'surface-' + index">
            <h3 av-accordion-heading>
              <button av-accordion-trigger>
                @if (item.icon) {
                  <span class="me-3 inline-flex size-4 shrink-0 text-muted" aria-hidden="true">
                    <app-icon [icon]="item.icon" size="16" />
                  </span>
                }
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

export const DEMO_NAME = 'accordion-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAccordionImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-accordion-surface-demo',
  imports: [
    AvAccordionImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AccordionSurfaceDemo {
  readonly defaultItems = [
    {
      title: 'How do I place an order?',
      content:
        "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      icon: 'solar:bag-linear',
    },
    {
      title: 'Can I modify or cancel my order?',
      content:
        "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
      icon: 'solar:bill-list-linear',
    },
    {
      title: 'What payment methods do you accept?',
      content: 'We accept all major credit cards, including Visa, Mastercard, and American Express.',
      icon: 'solar:card-linear',
    },
    {
      title: 'How much does shipping cost?',
      content:
        'Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.',
      icon: 'solar:box-linear',
    },
    {
      title: 'Do you ship internationally?',
      content:
        'Yes, we ship to most countries. Please check our shipping rates and policies for more information.',
      icon: 'solar:global-linear',
    },
    {
      title: 'How do I request a refund?',
      content:
        "If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",
      icon: 'solar:refresh-linear',
    },
  ];
}`;

@Component({
  selector: 'app-accordion-surface-demo',
  imports: [
    AvAccordionImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AccordionSurfaceDemo {
  readonly defaultItems = DEFAULT_ITEMS;
}
