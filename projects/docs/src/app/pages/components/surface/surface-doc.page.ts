import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { surfaceDemos } from '../../../demos/surface';

@Component({
  selector: 'app-surface-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './surface-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class SurfaceDocPage {
  readonly demos = surfaceDemos;
  readonly apiProps = getComponentProps('surface');

  readonly cssOverrideExample = `@layer components {
  .av-surface {
    @apply rounded-2xl border border-border;
  }

  .av-surface--secondary {
    @apply bg-linear-to-br from-blue-50 to-purple-50;
  }
}`;

  readonly contextExample = `import { Component, inject } from '@angular/core';
import { AvSurfaceContext } from '@avesra/angular';

@Component({
  selector: 'app-my-component',
  template: \`...\`,
})
export class MyComponent {
  private readonly surface = inject(AvSurfaceContext, { optional: true });

  // this.surface?.variant() → "transparent" | "default" | "secondary" | "tertiary" | undefined
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'overview', title: 'Overview' },
    { id: 'variants', title: 'Variants', depth: 2 },
    { id: 'usage-with-form-components', title: 'Usage with Form Components' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API' },
    { id: 'context-api', title: 'Context API' },
    { id: 'surface-context', title: 'AvSurfaceContext', depth: 2 },
  ];
}
