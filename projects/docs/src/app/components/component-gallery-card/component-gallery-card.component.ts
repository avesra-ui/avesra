import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentGalleryPreviewComponent } from '../component-gallery-preview/component-gallery-preview.component';
import type { DocComponentMeta } from '../../models/doc-component-meta.model';

@Component({
  selector: 'app-component-gallery-card',
  imports: [RouterLink, ComponentGalleryPreviewComponent],
  templateUrl: './component-gallery-card.component.html',
  styleUrl: './component-gallery-card.component.scss',
})
export class ComponentGalleryCardComponent {
  readonly component = input.required<DocComponentMeta>();

  protected statusLabel(status: DocComponentMeta['status']): string | null {
    return status === 'planned' ? 'Soon' : null;
  }
}
