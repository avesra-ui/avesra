import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { drawerDemos } from '../../../demos/drawer';

@Component({
  selector: 'app-drawer-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
  ],
  templateUrl: './drawer-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class DrawerDocPage {
  readonly demos = drawerDemos;
  readonly apiProps = getComponentProps('drawer');

  readonly cssOverrideExample = `@layer components {
  .av-drawer__backdrop {
    @apply bg-gradient-to-br from-black/50 to-black/70;
  }

  .av-drawer__dialog {
    @apply rounded-2xl border border-white/10 shadow-2xl;
  }

  .av-drawer__header {
    @apply text-center;
  }

  .av-drawer__close-trigger {
    @apply rounded-full bg-white/10 hover:bg-white/20;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'placement', title: 'Placement' },
    { id: 'non-dismissable', title: 'Non-Dismissable' },
    { id: 'scrollable-content', title: 'Scrollable Content' },
    { id: 'controlled-state', title: 'Controlled State' },
    { id: 'with-form', title: 'With Form' },
    { id: 'navigation-drawer', title: 'Navigation Drawer' },
    { id: 'backdrop-variants', title: 'Backdrop Variants' },
    { id: 'custom-backdrop', title: 'Custom Backdrop' },
    { id: 'service', title: 'Service' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
    { id: 'accessibility', title: 'Accessibility' },
  ];
}
