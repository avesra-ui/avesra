import { Component } from '@angular/core';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { dateFieldDemos } from '../../../demos/date-field';

@Component({
  selector: 'app-date-field-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    AvLinkComponent,
  ],
  templateUrl: './date-field-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class DateFieldDocPage {
  readonly demos = dateFieldDemos;
  readonly apiProps = getComponentProps('date-field');

  readonly cssOverrideExample = `@layer components {
  .av-date-field {
    @apply flex flex-col gap-1;

    &[data-invalid="true"],
    &[aria-invalid="true"] {
      [data-slot="description"] {
        @apply hidden;
      }
    }

    [data-slot="label"] {
      @apply w-fit;
    }

    [data-slot="description"] {
      @apply px-1;
    }
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'examples', title: 'Examples' },
    { id: 'with-icons', title: 'With Icons', depth: 2 },
    { id: 'variants', title: 'Variants', depth: 2 },
    { id: 'on-surface', title: 'In Surface', depth: 2 },
    { id: 'with-description', title: 'With Description', depth: 2 },
    { id: 'required', title: 'Required Field', depth: 2 },
    { id: 'disabled', title: 'Disabled State', depth: 2 },
    { id: 'full-width', title: 'Full Width', depth: 2 },
    { id: 'validation', title: 'Validation', depth: 2 },
    { id: 'granularity', title: 'Granularity', depth: 2 },
    { id: 'controlled', title: 'Controlled', depth: 2 },
    { id: 'form-example', title: 'Form Example', depth: 2 },
    { id: 'with-validation', title: 'With Validation', depth: 2 },
    { id: 'customization', title: 'Customization' },
    { id: 'custom-styles', title: 'Tailwind CSS', depth: 2 },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
