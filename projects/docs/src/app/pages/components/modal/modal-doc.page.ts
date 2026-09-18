import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { modalDemos } from '../../../demos/modal';

@Component({
  selector: 'app-modal-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './modal-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ModalDocPage {
  readonly demos = modalDemos;
  readonly apiProps = getComponentProps('modal');

  readonly cssOverrideExample = `@layer components {
  .av-modal__backdrop {
    @apply bg-gradient-to-br from-black/50 to-black/70;
  }

  .av-modal__dialog {
    @apply rounded-2xl border border-white/10 shadow-2xl;
  }

  .av-modal__header {
    @apply text-center;
  }

  .av-modal__close-trigger {
    @apply rounded-full bg-white/10 hover:bg-white/20;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'placement', title: 'Placement' },
    { id: 'backdrop-variants', title: 'Backdrop Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'custom-backdrop', title: 'Custom Backdrop' },
    { id: 'dismiss-behavior', title: 'Dismiss Behavior' },
    { id: 'close-methods', title: 'Close Methods' },
    { id: 'programmatic', title: 'Programmatic' },
    { id: 'custom-animations', title: 'Custom Animations' },
    { id: 'scroll-behavior', title: 'Scroll Behavior' },
    { id: 'controlled', title: 'Controlled State' },
    { id: 'with-form', title: 'With Form' },
    { id: 'service', title: 'Service' },
    { id: 'custom-trigger', title: 'Custom Trigger' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
    { id: 'accessibility', title: 'Accessibility' },
  ];
}
