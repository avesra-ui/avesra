import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';

import { AvTabsContext } from './tabs.context';
import { avTabsTabClasses } from './tabs.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-tabs-tab]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'tab',
    type: 'button',
    '[attr.id]': 'tabId()',
    '[attr.data-tab-key]': 'tabKey()',
    '[attr.aria-selected]': 'isSelected() ? "true" : "false"',
    '[attr.aria-controls]': 'panelId()',
    '[attr.aria-disabled]': 'disabledInput() ? "true" : null',
    '[attr.tabindex]': 'tabIndex()',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-disabled]': 'disabledInput() ? "true" : null',
    '[attr.data-hovered]': 'hovered() ? "true" : null',
    '[attr.data-pressed]': 'pressed() ? "true" : null',
    '[attr.data-focus-visible]': 'focusVisible() ? "true" : null',
    // Never apply the native disabled attribute — keep aria-disabled + Material skip via FocusableOption.
    '[attr.disabled]': 'null',
    'data-slot': 'tabs-tab',
    '(click)': 'select()',
    '(pointerenter)': 'onPointerEnter()',
    '(pointerleave)': 'onPointerLeave()',
    '(pointerdown)': 'onPointerDown($event)',
    '(pointerup)': 'onPointerUp()',
    '(pointercancel)': 'onPointerUp()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
  },
})
export class AvTabsTabComponent implements FocusableOption {
  private readonly context = inject(AvTabsContext);
  readonly elementRef = inject(ElementRef<HTMLElement>);

  /** Unique tab identifier matching the panel id. */
  readonly id = input.required<string>();

  /** Disables the tab. Skipped during keyboard navigation. */
  readonly disabledInput = input(false, { alias: 'disabled', transform: booleanAttribute });

  protected readonly classes = computed(() => avTabsTabClasses());

  protected readonly tabKey = computed(() => this.id());

  protected readonly tabId = computed(() => `av-tab-${this.id()}`);

  protected readonly panelId = computed(() => `av-tabpanel-${this.id()}`);

  protected readonly isSelected = computed(() => this.context.isSelected(this.id()));

  protected readonly tabIndex = computed(() => (this.isSelected() ? 0 : -1));

  protected readonly hovered = signal(false);
  protected readonly pressed = signal(false);
  protected readonly focusVisible = signal(false);

  private lastFocusOrigin: FocusOrigin | null = null;

  /** FocusableOption disabled flag — FocusKeyManager skips these items. */
  get disabled(): boolean {
    return this.disabledInput();
  }

  focus(origin?: FocusOrigin, options?: FocusOptions): void {
    this.lastFocusOrigin = origin ?? null;
    this.elementRef.nativeElement.focus(options);
  }

  protected onFocus(): void {
    if (this.lastFocusOrigin === 'keyboard') {
      this.focusVisible.set(true);
    } else if (this.lastFocusOrigin == null) {
      this.focusVisible.set(this.elementRef.nativeElement.matches(':focus-visible'));
    } else {
      this.focusVisible.set(false);
    }
    this.lastFocusOrigin = null;
  }

  protected onBlur(): void {
    this.focusVisible.set(false);
    this.pressed.set(false);
  }

  protected onPointerEnter(): void {
    this.hovered.set(true);
  }

  protected onPointerLeave(): void {
    this.hovered.set(false);
    this.pressed.set(false);
  }

  protected onPointerDown(event: PointerEvent): void {
    if (event.button === 0 && !this.disabledInput()) {
      this.pressed.set(true);
    }
  }

  protected onPointerUp(): void {
    this.pressed.set(false);
  }

  protected select(): void {
    if (this.disabledInput()) {
      return;
    }

    this.context.selectKey(this.id());
  }
}
