import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
} from '@angular/core';

import { AvMenuContext } from '../menu/menu.context';
import { avDropdownMenuItemClasses } from './menu-item.utils';
import type { AvDropdownMenuItemVariant } from './menu-item.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-dropdown-menu-item]',
  exportAs: 'avDropdownMenuItem',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.role]': 'role()',
    '[attr.tabindex]': 'isDisabled() ? -1 : 0',
    '[attr.aria-disabled]': 'isDisabled() ? "true" : null',
    '[attr.aria-checked]': 'ariaChecked()',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    'data-slot': 'dropdown-menu-item',
    '(click)': 'onClick($event)',
    '(keydown)': 'onKeydown($event)',
  },
})
export class AvDropdownMenuItemComponent implements FocusableOption {
  private readonly menuContext = inject(AvMenuContext);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  /** Unique item id emitted by the parent menu `action` output. */
  readonly itemId = input.required<string>({ alias: 'id' });

  /** Accessible label used for typeahead search. */
  readonly textValue = input<string>();

  /** Visual style variant. */
  readonly variant = input<AvDropdownMenuItemVariant>('default');

  /** Disables the item. */
  readonly disabledInput = input(false, { alias: 'disabled', transform: booleanAttribute });

  /** Extra classes merged onto the menu item host. */
  readonly customClass = input<string>('', { alias: 'class' });

  protected readonly classes = computed(() =>
    avDropdownMenuItemClasses({ variant: this.variant(), extraClass: this.customClass() }),
  );

  protected readonly isDisabled = computed(
    () => this.disabledInput() || this.menuContext.disabled(),
  );

  /** FocusableOption disabled flag used by FocusKeyManager. */
  get disabled(): boolean {
    return this.isDisabled();
  }

  readonly isSelected = computed(() => this.menuContext.isSelected(this.itemId()));

  protected readonly role = computed(() => {
    const mode = this.menuContext.selectionMode();
    if (mode === 'single') {
      return 'menuitemradio';
    }
    if (mode === 'multiple') {
      return 'menuitemcheckbox';
    }
    return 'menuitem';
  });

  protected readonly ariaChecked = computed(() => {
    const mode = this.menuContext.selectionMode();
    if (mode === 'none') {
      return null;
    }

    return this.isSelected() ? 'true' : 'false';
  });

  focus(_origin?: FocusOrigin, options?: FocusOptions): void {
    this.elementRef.nativeElement.focus(options);
  }

  getLabel(): string {
    return this.textValue()?.trim() || this.elementRef.nativeElement.textContent?.trim() || '';
  }

  protected onClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.activate();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.activate();
  }

  private activate(): void {
    if (this.isDisabled()) {
      return;
    }

    this.menuContext.selectItem(this.itemId());
  }
}
