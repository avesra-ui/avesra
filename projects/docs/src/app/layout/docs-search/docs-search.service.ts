import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

/** Opens and controls the docs command-palette search modal. */
@Injectable({ providedIn: 'root' })
export class DocsSearchService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly open = signal(false);
  readonly query = signal('');
  /** True on macOS / iOS — use ⌘ instead of Ctrl in the UI. */
  readonly isApple = signal(false);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isApple.set(/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent));

    const onKeydown = (event: KeyboardEvent): void => {
      // Windows / Linux: Ctrl+K — macOS: ⌘+K
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') {
        return;
      }

      event.preventDefault();

      if (this.open()) {
        this.closeModal();
      } else {
        this.openModal();
      }
    };

    this.document.addEventListener('keydown', onKeydown);
    this.destroyRef.onDestroy(() => {
      this.document.removeEventListener('keydown', onKeydown);
    });
  }

  openModal(initialQuery = ''): void {
    this.query.set(initialQuery);
    this.open.set(true);
  }

  closeModal(): void {
    this.open.set(false);
    this.query.set('');
  }

  /** @deprecated Use {@link openModal} */
  openSearch(initialQuery = ''): void {
    this.openModal(initialQuery);
  }

  /** @deprecated Use {@link closeModal} */
  closeSearch(): void {
    this.closeModal();
  }
}
