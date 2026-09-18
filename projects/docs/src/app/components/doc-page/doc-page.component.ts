import { Component, DestroyRef, effect, inject, input, untracked } from '@angular/core';

import type { DocTocItem } from '../../models/doc-toc.model';
import { DocsTocService } from '../docs-toc/docs-toc.service';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.scss',
})
export class DocPageComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly tocService = inject(DocsTocService);

  readonly toc = input<DocTocItem[]>([]);

  constructor() {
    effect(() => {
      const items = this.toc();
      untracked(() => this.tocService.setItems(items));
    });

    this.destroyRef.onDestroy(() => this.tocService.clear());
  }
}
