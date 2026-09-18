import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  AfterContentInit,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  model,
  OnDestroy,
  output,
  QueryList,
  untracked,
} from '@angular/core';

import { AvMenuItemComponent } from '../menu-item/menu-item.component';
import { AvMenuContext } from '../menu/menu.context';
import type { AvMenuSelectionMode } from '../menu/menu.context';
import { AvDropdownContext } from './dropdown.context';
import type { AvDropdownMenuPanel } from './dropdown.context';
import { avDropdownMenuClasses } from './dropdown.utils';
import type { AvDropdownOpenOrigin } from './dropdown.utils';

let nextMenuPanelId = 0;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-dropdown-menu]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[id]': 'panelId',
    role: 'menu',
    tabindex: '-1',
    '[attr.data-selection-mode]': 'selectionMode() !== "none" ? selectionMode() : null',
    'data-slot': 'dropdown-menu',
  },
  providers: [AvMenuContext],
})
export class AvDropdownMenuComponent implements AfterContentInit, OnDestroy, AvDropdownMenuPanel {
  private readonly dropdownContext = inject(AvDropdownContext);
  private readonly menuContext = inject(AvMenuContext);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  @ContentChildren(AvMenuItemComponent, { descendants: true })
  private readonly items!: QueryList<AvMenuItemComponent>;

  /** How menu items can be selected. */
  readonly selectionMode = input<AvMenuSelectionMode>('none', { alias: 'selection-mode' });

  /** Selected item ids. Supports two-way binding with `[(selectedKeys)]`. */
  readonly selectedKeys = model<string[]>([]);

  /** Disables all menu items. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Emitted when a menu item is activated. */
  readonly action = output<string>();

  readonly panelId = `av-dropdown-menu-${++nextMenuPanelId}`;

  protected readonly classes = computed(() => avDropdownMenuClasses());

  private keyManager!: FocusKeyManager<AvMenuItemComponent>;

  constructor() {
    this.dropdownContext.registerMenu(this);

    this.menuContext.registerActionHandler((key) => {
      this.action.emit(key);
    });

    this.menuContext.registerCloseHandler(() => {
      this.dropdownContext.close('click');
    });

    this.menuContext.registerSelectedKeysChangeHandler((keys) => {
      if (!this.arraysEqual(keys, this.selectedKeys())) {
        this.selectedKeys.set(keys);
      }
    });

    effect(() => {
      const selectionMode = this.selectionMode();
      const disabled = this.disabled();
      const selectedKeys = this.selectedKeys();

      untracked(() => {
        this.menuContext.selectionMode.set(selectionMode);
        this.menuContext.disabled.set(disabled);
        this.menuContext.setSelectedKeys(selectedKeys);
      });
    });

    this.destroyRef.onDestroy(() => {
      this.menuContext.dispose();
      this.dropdownContext.unregisterMenu();
    });
  }

  ngAfterContentInit(): void {
    this.keyManager = new FocusKeyManager(this.items)
      .withWrap()
      .withTypeAhead()
      .withHomeAndEnd();

    this.keyManager.tabOut.subscribe(() => {
      this.dropdownContext.close('tab');
    });
  }

  ngOnDestroy(): void {
    this.keyManager?.destroy();
  }

  focusFirstItem(origin: AvDropdownOpenOrigin = 'program'): void {
    if (!this.keyManager) {
      return;
    }

    if (origin === 'mouse') {
      this.keyManager.setActiveItem(-1);
      return;
    }

    this.keyManager.setFocusOrigin(origin === 'keyboard' ? 'keyboard' : 'program');
    this.keyManager.setFirstItemActive();

    if (!this.keyManager.activeItem) {
      this.elementRef.nativeElement.focus();
    }
  }

  resetActiveItem(): void {
    this.keyManager?.setActiveItem(-1);
  }

  handleKeydown(event: KeyboardEvent): void {
    if (!this.keyManager) {
      return;
    }

    if (event.key === 'Escape') {
      if (this.dropdownContext.keyboardDismissDisabled() || event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      event.preventDefault();
      this.dropdownContext.close('keydown');
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      this.keyManager.setFocusOrigin('keyboard');
    }

    this.keyManager.onKeydown(event);
  }

  private arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }

    return a.every((value, index) => value === b[index]);
  }
}
