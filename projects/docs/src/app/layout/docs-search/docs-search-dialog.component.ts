import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { Router } from '@angular/router';

import {
  AvInputGroupComponent,
  AvInputGroupInputComponent,
  AvInputGroupPrefixComponent,
  AvKbdAbbrComponent,
  AvKbdComponent,
  AvModalComponent,
  AvModalContentDirective,
  AvModalDialogComponent,
  AvSeparatorComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import {
  filterDocsSearchGroups,
  type DocsSearchItem,
} from './docs-search-index';
import { DocsSearchService } from './docs-search.service';

@Directive({
  selector: 'input[appDocsSearchAutofocus]',
})
export class DocsSearchAutofocusDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  constructor() {
    afterNextRender(() => {
      this.el.nativeElement.focus();
    });
  }
}

@Component({
  selector: 'app-docs-search-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AvModalComponent,
    AvModalContentDirective,
    AvModalDialogComponent,
    AvInputGroupComponent,
    AvInputGroupInputComponent,
    AvInputGroupPrefixComponent,
    AvKbdComponent,
    AvKbdAbbrComponent,
    AvSeparatorComponent,
    AppIconComponent,
    DocsSearchAutofocusDirective,
  ],
  templateUrl: './docs-search-dialog.component.html',
  styleUrl: './docs-search-dialog.component.scss',
})
export class DocsSearchDialogComponent {
  private readonly router = inject(Router);
  private readonly search = inject(DocsSearchService);

  readonly open = this.search.open;
  readonly query = this.search.query;
  readonly activeIndex = signal(0);

  readonly groups = computed(() => filterDocsSearchGroups(this.query()));
  readonly flatItems = computed(() => this.groups().flatMap((group) => group.items));
  readonly empty = computed(
    () => this.query().trim().length > 0 && this.flatItems().length === 0,
  );

  readonly activeOptionId = computed(() => {
    const index = this.clampedIndex();

    return index < 0 ? null : `docs-search-option-${index}`;
  });

  constructor() {
    effect(() => {
      const isOpen = this.open();

      untracked(() => {
        this.activeIndex.set(0);

        if (!isOpen && this.query()) {
          this.query.set('');
        }
      });
    });
  }

  onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.activeIndex.set(0);
  }

  onInputKeydown(event: KeyboardEvent): void {
    const items = this.flatItems();

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();

      if (!items.length) {
        return;
      }

      const current = Math.max(this.clampedIndex(), 0);
      const next =
        event.key === 'ArrowDown'
          ? (current + 1) % items.length
          : (current - 1 + items.length) % items.length;

      this.activeIndex.set(next);
      queueMicrotask(() => this.scrollActiveIntoView(event.target));
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      const item = items[this.clampedIndex()];

      if (item) {
        this.goTo(item);
      }
    }
  }

  isActive(groupIndex: number, itemIndex: number): boolean {
    return this.flatIndex(groupIndex, itemIndex) === this.clampedIndex();
  }

  optionId(groupIndex: number, itemIndex: number): string {
    return `docs-search-option-${this.flatIndex(groupIndex, itemIndex)}`;
  }

  setActive(groupIndex: number, itemIndex: number): void {
    this.activeIndex.set(this.flatIndex(groupIndex, itemIndex));
  }

  goTo(item: DocsSearchItem): void {
    void this.router.navigateByUrl(item.path);
    this.search.closeModal();
  }

  private clampedIndex(): number {
    const length = this.flatItems().length;

    if (!length) {
      return -1;
    }

    const raw = this.activeIndex();

    return raw < 0 || raw >= length ? 0 : raw;
  }

  private flatIndex(groupIndex: number, itemIndex: number): number {
    const groups = this.groups();
    let offset = 0;

    for (let index = 0; index < groupIndex; index += 1) {
      offset += groups[index]?.items.length ?? 0;
    }

    return offset + itemIndex;
  }

  private scrollActiveIntoView(target: EventTarget | null): void {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    target
      .closest('.av-docs-search-dialog')
      ?.querySelector<HTMLElement>('[data-active="true"]')
      ?.scrollIntoView({ block: 'nearest' });
  }
}
