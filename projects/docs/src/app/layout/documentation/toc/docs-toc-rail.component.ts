import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { DocsTocComponent } from '../../../components/docs-toc/docs-toc.component';
import { DocsTocService } from '../../../components/docs-toc/docs-toc.service';

/**
 * Desktop TOC rail — sticky beside the page content.
 */
@Component({
  selector: 'app-docs-toc-rail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DocsTocComponent],
  host: {
    class:
      'layout-toc sticky top-[calc(var(--sticky-offset-top)+1.75rem)] ms-14 hidden w-[220px] shrink-0 self-start ps-4 pt-6 pb-2 xl:block 2xl:w-[240px]',
  },
  template: `
    @if (items().length > 0) {
      <app-docs-toc class="w-full" [items]="items()" />
    }
  `,
})
export class DocsTocRailComponent {
  private readonly toc = inject(DocsTocService);

  readonly items = this.toc.items;
}
