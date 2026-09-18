import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { AppIconComponent } from '../../../components/app-icon/app-icon.component';
import {
  DOCS_SIDEBAR_BY_KEY,
  DOCS_SIDEBAR_TABS,
  resolveSidebarKey,
  type DocsSidebarItem,
} from '../../../config/docs-nav.config';
import { ScrollOnActiveDirective } from './scroll-on-active.directive';

/** Sidebar item — muted text, field radius, surface active state. */
const SIDEBAR_ITEM =
  'relative flex w-full flex-row items-center gap-2 rounded-field p-2 text-start text-sm text-muted break-keep [&_svg]:size-4 [&_svg]:shrink-0';

const SIDEBAR_LINK = [
  SIDEBAR_ITEM,
  'transition-none hover:bg-foreground/4 hover:text-foreground/80',
  'data-[active=true]:bg-surface data-[active=true]:text-foreground data-[active=true]:shadow-surface',
  'dark:data-[active=true]:bg-white/8 dark:data-[active=true]:shadow-none',
].join(' ');

const SIDEBAR_BADGE =
  'inline-flex h-5 shrink-0 items-center rounded-full bg-black/3 px-1.5 text-[10px] leading-none text-muted/90 dark:bg-white/8';

/** Docs sidebar — fixed section tabs and page tree. */
@Component({
  selector: 'app-docs-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, ScrollOnActiveDirective, AppIconComponent],
  template: `
    <aside class="flex h-full min-h-0 w-full flex-col items-start pt-4 text-sm">
      <div class="w-full shrink-0 px-1 pb-2">
        @for (tab of tabs; track tab.sidebarKey) {
          <a
            [routerLink]="tab.path"
            [attr.data-active]="activeKey() === tab.sidebarKey"
            [class]="linkClass"
          >
            <app-icon [icon]="tab.icon" size="16" />
            {{ tab.label }}
          </a>
        }
      </div>

      <nav
        class="no-scrollbar min-h-0 w-full flex-1 overflow-x-hidden overflow-y-auto border-t border-border/50 px-1 pt-2"
        aria-label="Documentation"
      >
        @for (item of items(); track trackItem(item)) {
          @if (item.type === 'separator') {
            <p class="mt-4 px-2 font-medium text-muted first:mt-0">{{ item.label }}</p>
          } @else if (item.disabled) {
            <span [class]="itemClass + ' cursor-not-allowed'">
              {{ item.label }}
              @if (item.badge) {
                <span [class]="badgeClass">{{ item.badge }}</span>
              }
            </span>
          } @else {
            <a
              [routerLink]="item.path"
              routerLinkActive
              [routerLinkActiveOptions]="{ exact: true }"
              #rla="routerLinkActive"
              [attr.data-active]="rla.isActive ? true : null"
              [class]="linkClass"
              scrollOnActive
            >
              {{ item.label }}
              @if (item.badge) {
                <span [class]="badgeClass">{{ item.badge }}</span>
              }
            </a>
          }
        }
      </nav>
    </aside>
  `,
})
export class DocsSidebarComponent {
  private readonly router = inject(Router);

  protected readonly tabs = DOCS_SIDEBAR_TABS;
  protected readonly itemClass = SIDEBAR_ITEM;
  protected readonly linkClass = SIDEBAR_LINK;
  protected readonly badgeClass = SIDEBAR_BADGE;

  readonly activeKey = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => resolveSidebarKey(this.router.url)),
    ),
    { initialValue: resolveSidebarKey(this.router.url) },
  );

  readonly items = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => DOCS_SIDEBAR_BY_KEY[resolveSidebarKey(this.router.url)]),
    ),
    { initialValue: DOCS_SIDEBAR_BY_KEY[resolveSidebarKey(this.router.url)] },
  );

  protected trackItem(item: DocsSidebarItem): string {
    return item.type === 'separator' ? `sep:${item.label}` : item.path;
  }
}
