import { Component } from '@angular/core';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { rangeCalendarDemos } from '../../../demos/range-calendar';

@Component({
  selector: 'app-range-calendar-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    AvLinkComponent,
  ],
  templateUrl: './range-calendar-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class RangeCalendarDocPage {
  readonly demos = rangeCalendarDemos;
  readonly apiProps = getComponentProps('range-calendar');

  readonly cssOverrideExample = `@layer components {
  .av-range-calendar {
    @apply w-80 rounded-2xl border border-border bg-surface p-3 shadow-sm;
  }

  .av-range-calendar__heading {
    @apply text-sm font-semibold text-default;
  }

  .av-range-calendar__cell[data-selected="true"] .av-range-calendar__cell-button {
    @apply bg-accent text-accent-foreground;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'year-picker', title: 'Year Picker' },
    { id: 'default-value', title: 'Default Value' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'min-max', title: 'Min and Max Dates' },
    { id: 'unavailable', title: 'Unavailable Dates' },
    { id: 'anchor-unavailable', title: 'Anchor-Based Unavailable Dates' },
    { id: 'weeks-in-month', title: 'Weeks in Month' },
    { id: 'week-view', title: 'Week View' },
    { id: 'day-view', title: 'Day View' },
    { id: 'allows-non-contiguous', title: 'Allows Non-Contiguous Ranges' },
    { id: 'read-only', title: 'Read Only' },
    { id: 'invalid', title: 'Invalid' },
    { id: 'focused-value', title: 'Focused Value' },
    { id: 'with-indicators', title: 'Cell Indicators' },
    { id: 'booking-calendar', title: 'Real-World Example' },
    { id: 'multiple-months', title: 'Multiple Months' },
    { id: 'international-calendar', title: 'International Calendars' },
    { id: 'customization', title: 'Customization' },
    { id: 'custom-styles', title: 'Tailwind CSS', depth: 2 },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
