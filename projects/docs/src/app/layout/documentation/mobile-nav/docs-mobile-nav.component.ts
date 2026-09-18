import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvButtonComponent } from '@avesra/angular';

import {
  DOCS_HEADER_PATHS,
  DOCS_SIDEBAR_PATHS,
  DOCS_VERSION,
} from '../../../config/docs-nav.config';


@Component({
  selector: 'app-docs-mobile-nav',
  standalone: true,
  imports: [RouterModule, AvButtonComponent],
  templateUrl: './docs-mobile-nav.component.html',
})
export class DocsMobileNavComponent {
  readonly mainMenu = [{ name: 'Home', path: '/', available: true }, ...DOCS_HEADER_PATHS];
  readonly sidebarPaths = DOCS_SIDEBAR_PATHS;
  readonly appVersion = DOCS_VERSION;
  readonly sidebarState = signal(false);

  toggleMenu(): void {
    this.sidebarState.update((open) => !open);
  }

  closeMenu(): void {
    this.sidebarState.set(false);
  }

  isAvailable(available: boolean): void {
    if (available) {
      this.closeMenu();
    }
  }
}
