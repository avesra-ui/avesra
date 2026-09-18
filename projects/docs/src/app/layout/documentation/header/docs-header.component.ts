import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import {
  AvButtonComponent,
  AvChipComponent,
  AvDrawerBodyComponent,
  AvDrawerComponent,
  AvDrawerContentDirective,
  AvDrawerDialogComponent,
  AvDrawerHeaderComponent,
  AvDrawerTriggerDirective,
} from '@avesra/angular';
import { AvThemeService } from '@avesra/styles';

import { AppIconComponent } from '../../../components/app-icon/app-icon.component';
import { AvesraLogoComponent } from '../../../components/avesra-logo/avesra-logo.component';
import {
  DOCS_SIDEBAR_BY_KEY,
  DOCS_SIDEBAR_TABS,
  resolveSidebarKey,
  type DocsSidebarItem,
} from '../../../config/docs-nav.config';
import { DocsSearchService } from '../../docs-search/docs-search.service';
import { DocsThemePickerComponent } from '../../docs-theme-picker/docs-theme-picker.component';

/**
 * Docs header — mounted inside `DocumentationLayout` (not `AppComponent`).
 */
@Component({
  selector: 'app-docs-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    AvButtonComponent,
    AvChipComponent,
    AvDrawerComponent,
    AvDrawerTriggerDirective,
    AvDrawerContentDirective,
    AvDrawerDialogComponent,
    AvDrawerHeaderComponent,
    AvDrawerBodyComponent,
    AppIconComponent,
    AvesraLogoComponent,
    DocsThemePickerComponent,
  ],
  templateUrl: './docs-header.component.html',
  host: {
    class:
      'bg-background sticky top-0 z-50 block w-full border-b border-border [--header-height:var(--topbar-height)]',
    role: 'banner',
  },
})
export class DocsHeaderComponent {
  private readonly router = inject(Router);

  readonly theme = inject(AvThemeService);
  readonly search = inject(DocsSearchService);

  readonly githubUrl = 'https://github.com/avesra-ui';
  readonly sidebarTabs = DOCS_SIDEBAR_TABS;
  navDrawerOpen = false;

  readonly activeKey = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => resolveSidebarKey(this.router.url)),
    ),
    { initialValue: resolveSidebarKey(this.router.url) },
  );

  readonly drawerItems = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => DOCS_SIDEBAR_BY_KEY[resolveSidebarKey(this.router.url)]),
    ),
    { initialValue: DOCS_SIDEBAR_BY_KEY[resolveSidebarKey(this.router.url)] },
  );

  openGithub(): void {
    window.open(this.githubUrl, '_blank', 'noopener,noreferrer');
  }

  openSearch(): void {
    this.search.openModal();
  }

  closeNavDrawer(): void {
    this.navDrawerOpen = false;
  }

  trackDrawerItem(item: DocsSidebarItem): string {
    return item.type === 'separator' ? `sep:${item.label}` : item.path;
  }
}
