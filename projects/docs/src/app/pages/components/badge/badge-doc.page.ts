import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { badgeDemos } from '../../../demos/badge';

@Component({
  selector: 'app-badge-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './badge-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class BadgeDocPage {
  readonly demos = badgeDemos;
  readonly apiProps = getComponentProps('badge');

  readonly cssOverrideExample = `@layer components {
  .av-badge {
    @apply rounded-full text-xs;
  }

  .av-badge__label {
    @apply font-semibold;
  }

  .av-badge--accent {
    @apply shadow-sm;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'colors', title: 'Colors' },
    { id: 'placements', title: 'Placements' },
    { id: 'dot-badge', title: 'Dot Badge' },
    { id: 'with-content', title: 'With Content' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
