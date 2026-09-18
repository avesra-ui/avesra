import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { linkDemos } from '../../../demos/link';

@Component({
  selector: 'app-link-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './link-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class LinkDocPage {
  readonly demos = linkDemos;
  readonly apiProps = getComponentProps('link');

  readonly cssOverrideExample = `@layer components {
  .av-link {
    @apply font-semibold;
  }
}`;

  readonly routerLinkExample = `import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvLinkComponent, AvLinkIconComponent } from '@avesra/angular';

@Component({
  selector: 'app-nav-link',
  imports: [RouterLink, AvLinkComponent, AvLinkIconComponent],
  template: \`
    <a av-link routerLink="/about">
      About Page
      <span av-link-icon></span>
    </a>
  \`,
})
export class NavLink {}`;

  readonly routerLinkVariantsExample = `import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { avLinkClasses, avLinkIconClasses } from '@avesra/angular';

@Component({
  selector: 'app-styled-router-link',
  imports: [RouterLink],
  template: \`
    <a [routerLink]="'/about'" [class]="linkClasses">
      About Page
      <span [class]="iconClasses" aria-hidden="true">
        <!-- icon markup -->
      </span>
    </a>
  \`,
})
export class StyledRouterLink {
  readonly linkClasses = avLinkClasses({ variant: 'primary', underline: 'hover' });
  readonly iconClasses = avLinkIconClasses();
}`;

  readonly directClassExample = `<!-- Apply BEM classes directly with Tailwind utilities -->
<a href="/about" class="av-link underline-offset-2">
  About Page
</a>

<!-- Or with a native anchor and icon slot class -->
<a
  href="/about"
  class="av-link underline decoration-accent underline-offset-4"
>
  About Page
  <span class="av-link__icon" aria-hidden="true"><!-- icon --></span>
</a>`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'icon-placement', title: 'Icon Placement' },
    { id: 'text-decorations', title: 'Text Decorations with Tailwind CSS' },
    { id: 'custom-icon', title: 'Custom Icon' },
    { id: 'variants', title: 'Variants' },
    { id: 'external-links', title: 'External Links' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
    { id: 'using-with-router', title: 'Using with Angular Router', depth: 2 },
    { id: 'direct-class-application', title: 'Direct Class Application', depth: 2 },
  ];
}
