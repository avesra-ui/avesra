import { Component } from '@angular/core';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { datePickerDemos } from '../../../demos/date-picker';

@Component({
  selector: 'app-date-picker-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    AvLinkComponent,
  ],
  templateUrl: './date-picker-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class DatePickerDocPage {
  readonly demos = datePickerDemos;
  readonly apiProps = getComponentProps('date-picker');

  readonly cssOverrideExample = `@layer components {
  .av-date-picker {
    @apply inline-flex flex-col gap-1;
  }

  .av-date-picker__trigger {
    @apply inline-flex items-center justify-between;
  }

  .av-date-picker__trigger-indicator {
    @apply text-muted;
  }

  .av-date-picker__popover {
    @apply p-0;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'examples', title: 'Examples' },
    { id: 'disabled', title: 'Disabled', depth: 2 },
    { id: 'controlled', title: 'Controlled', depth: 2 },
    { id: 'validation', title: 'Validation', depth: 2 },
    { id: 'format-options', title: 'Format Options', depth: 2 },
    { id: 'form-example', title: 'Form Example', depth: 2 },
    { id: 'custom-indicator', title: 'Custom Indicator', depth: 2 },
    { id: 'render-function', title: 'Host attributes', depth: 2 },
    { id: 'international-calendar', title: 'International Calendar', depth: 2 },
    { id: 'customization', title: 'Customization' },
    { id: 'custom-styles', title: 'Tailwind CSS', depth: 2 },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
