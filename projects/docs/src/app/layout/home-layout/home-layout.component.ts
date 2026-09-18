import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DocsSearchDialogComponent } from '../docs-search/docs-search-dialog.component';
import { DocsSearchService } from '../docs-search/docs-search.service';
import { DocsFooterComponent } from '../documentation/footer/docs-footer.component';
import { DocsHeaderComponent } from '../documentation/header/docs-header.component';

@Component({
  selector: 'app-home-layout',
  imports: [
    RouterModule,
    DocsHeaderComponent,
    DocsFooterComponent,
    DocsSearchDialogComponent,
  ],
  templateUrl: './home-layout.component.html',
  host: {
    class: 'layout-wrapper',
  },
  styles: `
    :host.layout-wrapper {
      background-color: var(--av-background);
    }
  `,
})
export class HomeLayoutComponent {
  /** Ensures global Ctrl/Cmd+K listener is registered. */
  private readonly search = inject(DocsSearchService);
}
