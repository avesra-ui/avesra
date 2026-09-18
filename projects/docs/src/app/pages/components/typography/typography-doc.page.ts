import { Component } from '@angular/core';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { typographyDemos } from '../../../demos/typography';

@Component({
  selector: 'app-typography-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    AvLinkComponent,
  ],
  templateUrl: './typography-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class TypographyDocPage {
  readonly demos = typographyDemos;
  readonly apiProps = getComponentProps('typography');

  readonly cssOverrideExample = `@layer components {
  .av-typography {
    @apply text-foreground;

    &.av-typography--h1 {
      @apply font-extrabold tracking-tight;
    }

    &.av-typography--code {
      @apply rounded-md bg-default font-mono;
    }
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'examples', title: 'Examples' },
    { id: 'basic', title: 'Default', depth: 2 },
    { id: 'primitives', title: 'Primitives', depth: 2 },
    { id: 'prose', title: 'Prose', depth: 2 },
    { id: 'typography-scale', title: 'Typography Scale', depth: 2 },
    { id: 'custom-styles', title: 'Custom Styles', depth: 2 },
    { id: 'customization', title: 'Customization' },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
