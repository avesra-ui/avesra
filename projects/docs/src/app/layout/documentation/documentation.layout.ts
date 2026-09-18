import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DocsSearchDialogComponent } from '../docs-search/docs-search-dialog.component';
import { DocsSearchService } from '../docs-search/docs-search.service';
import { DocsFooterComponent } from './footer/docs-footer.component';
import { DocsHeaderComponent } from './header/docs-header.component';
import { DocsSidebarComponent } from './sidebar/docs-sidebar.component';
import { DocsTocRailComponent } from './toc/docs-toc-rail.component';

/**
 * Docs shell — header, content, and footer live here (not in `AppComponent`).
 */
@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [
    RouterModule,
    DocsHeaderComponent,
    DocsFooterComponent,
    DocsSidebarComponent,
    DocsTocRailComponent,
    DocsSearchDialogComponent,
  ],
  templateUrl: './documentation.layout.html',
  host: {
    class: 'layout-wrapper',
  },
  styles: `
    :host.layout-wrapper {
      background-color: var(--av-background);
    }
  `,
})
export class DocumentationLayout {
  /** Registers global Ctrl/⌘K while docs routes are active. */
  private readonly search = inject(DocsSearchService);
}
