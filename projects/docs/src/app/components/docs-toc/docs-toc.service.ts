import { Injectable, signal } from '@angular/core';

import type { DocTocItem } from '../../models/doc-toc.model';

@Injectable({ providedIn: 'root' })
export class DocsTocService {
  readonly items = signal<DocTocItem[]>([]);

  setItems(items: DocTocItem[]): void {
    this.items.set(items);
  }

  clear(): void {
    this.items.set([]);
  }
}
