import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { toggleButtonDemos } from '../../../demos/toggle-button';

@Component({
  selector: 'app-toggle-button-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './toggle-button-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ToggleButtonDocPage {
  readonly demos = toggleButtonDemos;
  readonly apiProps = getComponentProps('toggle-button');

  readonly globalCssExample = `@layer components {
  .av-toggle-button {
    @apply bg-accent text-accent-foreground;
  }

  .av-toggle-button--icon-only {
    @apply rounded-lg;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'icon-only', title: 'Icon Only' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 3 },
    { id: 'global-css', title: 'Global CSS', depth: 3 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'api', title: 'API Reference' },
  ];
}
