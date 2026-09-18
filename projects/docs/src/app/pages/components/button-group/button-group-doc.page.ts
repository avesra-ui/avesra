import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { buttonGroupDemos } from '../../../demos/button-group';

@Component({
  selector: 'app-button-group-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './button-group-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ButtonGroupDocPage {
  readonly demos = buttonGroupDemos;
  readonly apiProps = getComponentProps('button-group');

  readonly cssOverrideExample = `@layer components {
  .av-button-group {
    @apply gap-2 rounded-lg;
  }

  .av-button-group__separator {
    @apply opacity-25;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'orientation', title: 'Orientation' },
    { id: 'with-icons', title: 'With Icons' },
    { id: 'full-width', title: 'Full Width' },
    { id: 'disabled', title: 'Disabled State' },
    { id: 'without-separator', title: 'Without Separator' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'notes', title: 'Note' },
    { id: 'api', title: 'API Reference' },
  ];
}
