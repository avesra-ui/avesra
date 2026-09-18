import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocApiProp } from '../../../models/doc-api-prop.model';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { sliderDemos } from '../../../demos/slider';
import { RANGE_SNIPPET_SOURCE } from '../../../demos/snippets/slider-anatomy.snippet';

@Component({
  selector: 'app-slider-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './slider-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class SliderDocPage {
  readonly demos = sliderDemos;
  readonly apiProps = getComponentProps('slider');
  readonly rangeAnatomySource = RANGE_SNIPPET_SOURCE;

  readonly thumbApiProps: DocApiProp[] = [
    {
      name: 'index',
      type: 'number',
      default: '0',
      description: 'Index of the thumb within the slider. Use `0` and `1` for range sliders.',
    },
  ];

  readonly cssOverrideExample = `@layer components {
  .av-slider {
    @apply flex flex-col gap-2;
  }

  .av-slider__output {
    @apply text-muted text-sm;
  }

  .av-slider__track {
    @apply relative h-2 w-full rounded-full bg-surface-secondary;
  }

  .av-slider__fill {
    @apply absolute h-full rounded-full bg-accent;
  }

  .av-slider__thumb {
    @apply size-4 rounded-full border-2 border-background bg-accent;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'range-slider-anatomy', title: 'Range Slider Anatomy', depth: 2 },
    { id: 'disabled', title: 'Disabled' },
    { id: 'vertical', title: 'Vertical' },
    { id: 'range', title: 'Range' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'custom-formatting', title: 'Custom Value Formatting' },
    { id: 'custom-output', title: 'Custom Output Display' },
    { id: 'reactive-form', title: 'Reactive form' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api', title: 'API' },
  ];
}
