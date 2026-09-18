import { Component } from '@angular/core';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { dateRangePickerDemos } from '../../../demos/date-range-picker';

@Component({
  selector: 'app-date-range-picker-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    AvLinkComponent,
  ],
  templateUrl: './date-range-picker-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class DateRangePickerDocPage {
  readonly demos = dateRangePickerDemos;
  readonly apiProps = getComponentProps('date-range-picker');

  readonly cssOverrideExample = `@layer components {
  .av-date-range-picker {
    @apply inline-flex flex-col gap-1;
  }

  .av-date-range-picker__trigger {
    @apply inline-flex items-center justify-between;
  }

  .av-date-range-picker__range-separator {
    @apply text-muted;
  }

  .av-date-range-picker__popover {
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
    { id: 'form-example', title: 'Form Example', depth: 2 },
    { id: 'custom-indicator', title: 'Custom Indicator', depth: 2 },
    { id: 'customization', title: 'Customization' },
    { id: 'custom-styles', title: 'Tailwind CSS', depth: 2 },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
