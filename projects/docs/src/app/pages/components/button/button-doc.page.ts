import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { buttonDemos } from '../../../demos/button';

@Component({
  selector: 'app-button-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './button-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ButtonDocPage {
  readonly demos = buttonDemos;
  readonly apiProps = getComponentProps('button');

  readonly cssOverrideExample = `@layer components {
  .av-button {
    @apply bg-purple-500 text-white hover:bg-purple-600;
  }

  .av-button--icon-only {
    @apply rounded-lg bg-blue-500;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'variants', title: 'Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'with-icons', title: 'With Icons' },
    { id: 'icon-only', title: 'Icon Only' },
    { id: 'loading', title: 'Loading' },
    { id: 'loading-state', title: 'Loading State' },
    { id: 'full-width', title: 'Full Width' },
    { id: 'disabled', title: 'Disabled State' },
    { id: 'social', title: 'Social Buttons' },
    { id: 'render-function', title: 'Render Function' },
    { id: 'custom-variants', title: 'Adding custom variants' },
    { id: 'ripple-effect', title: 'Adding Ripple Effect' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
