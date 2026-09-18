import { Component } from '@angular/core';

import { ComponentGalleryCardComponent } from '../../components/component-gallery-card/component-gallery-card.component';
import { DocPageComponent } from '../../components/doc-page/doc-page.component';
import {
  DOC_COMPONENT_CATEGORIES,
  getComponentsByCategory,
} from '../../config/docs-components.config';
import type { DocComponentCategory, DocComponentMeta } from '../../models/doc-component-meta.model';
import type { DocTocItem } from '../../models/doc-toc.model';
import { categoryToTocId } from '../../utils/component-gallery-preview';

export interface ComponentsGallerySection {
  category: DocComponentCategory;
  id: string;
  components: DocComponentMeta[];
}

@Component({
  selector: 'app-components-index-page',
  imports: [DocPageComponent, ComponentGalleryCardComponent],
  templateUrl: './components-index.page.html',
  styleUrl: './components-index.page.scss',
})
export class ComponentsIndexPage {
  readonly sections: ComponentsGallerySection[] = DOC_COMPONENT_CATEGORIES.map((category) => {
    const components = [...getComponentsByCategory(category)].sort((a, b) =>
      a.label.localeCompare(b.label),
    );

    return {
      category,
      components,
      id: categoryToTocId(category),
    };
  }).filter((section) => section.components.length > 0);

  readonly toc: DocTocItem[] = this.sections.map((section) => ({
    id: section.id,
    title: section.category,
  }));
}
