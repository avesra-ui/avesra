import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { avatarDemos } from '../../../demos/avatar';

@Component({
  selector: 'app-avatar-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './avatar-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class AvatarDocPage {
  readonly demos = avatarDemos;
  readonly apiProps = getComponentProps('avatar');

  readonly cssOverrideExample = `@layer components {
  .av-avatar {
    @apply size-16 border-2 border-accent;
  }

  .av-avatar__fallback {
    @apply bg-linear-to-br from-purple-500 to-pink-500;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'colors', title: 'Colors' },
    { id: 'variants', title: 'Variants' },
    { id: 'fallback', title: 'Fallback Content' },
    { id: 'group', title: 'Avatar Group' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
