import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { tooltipDemos } from '../../../demos/tooltip';

@Component({
  selector: 'app-tooltip-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './tooltip-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class TooltipDocPage {
  readonly demos = tooltipDemos;
  readonly apiProps = getComponentProps('tooltip');

  readonly globalCssExample = `@layer components {
  .av-tooltip {
    @apply rounded-xl shadow-lg;
  }

  .av-tooltip__text {
    @apply text-xs;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'placement', title: 'Placement' },
    { id: 'with-arrow', title: 'With Arrow' },
    { id: 'custom-triggers', title: 'Custom Triggers' },
    { id: 'events', title: 'Events' },
    { id: 'delays', title: 'Delays' },
    { id: 'auto-hide', title: 'Auto Hide' },
    { id: 'hide-on-escape', title: 'Hide on Escape' },
    { id: 'position-offset', title: 'Position Offset' },
    { id: 'template-content', title: 'Template Content' },
    { id: 'dynamic-content', title: 'Dynamic Content' },
    { id: 'long-text', title: 'Long Text' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'viewport-flip', title: 'Viewport Flip' },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 3 },
    { id: 'global-css', title: 'Global CSS', depth: 3 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'api', title: 'API Reference' },
  ];
}
