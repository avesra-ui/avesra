import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocApiProp } from '../../../models/doc-api-prop.model';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { radioGroupDemos } from '../../../demos/radio-group';

@Component({
  selector: 'app-radio-group-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './radio-group-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class RadioGroupDocPage {
  readonly demos = radioGroupDemos;
  readonly apiProps = getComponentProps('radio-group');

  readonly radioApiProps: DocApiProp[] = [
    {
      name: 'value',
      type: 'string',
      description: 'Option value when used inside `av-radio-group`. Required in groups.',
    },
    {
      name: 'variant',
      type: "'primary' | 'secondary'",
      description: 'Visual style variant. Inherits from `av-radio-group` when omitted.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables interaction. Also set by reactive forms or parent group.',
    },
    {
      name: 'invalid',
      type: 'boolean',
      default: 'false',
      description: 'Marks the radio as invalid. Inherits from parent group when omitted.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Form field name for native form submission. Inherits from parent group when omitted.',
    },
    {
      name: 'aria-label',
      type: 'string',
      description: 'Accessible label when no visible label is provided.',
    },
  ];

  readonly cssOverrideExample = `@layer components {
  .av-radio-group {
    @apply gap-2;
  }

  .av-radio {
    @apply gap-4 rounded-lg border border-border p-3 hover:bg-surface-hovered;
  }

  .av-radio__control {
    @apply border-2 border-accent;
  }

  .av-radio__indicator {
    @apply bg-accent;
  }

  .av-radio__content {
    @apply gap-1;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'horizontal-orientation', title: 'Horizontal Orientation' },
    { id: 'variants', title: 'Variants' },
    { id: 'in-surface', title: 'In Surface' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'uncontrolled', title: 'Uncontrolled' },
    { id: 'validation', title: 'Validation' },
    { id: 'delivery-and-payment', title: 'Delivery & Payment' },
    { id: 'custom-indicator', title: 'Custom Indicator' },
    { id: 'reactive-form', title: 'Reactive form' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}


