import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvTagGroupContext } from '../tag-group/tag-group.context';
import { AvTagRemoveButtonComponent } from './tag-remove-button.component';
import { AvTagContext } from './tag.context';
import { avTagClasses } from './tag.utils';
import type { AvTagSize, AvTagVariant } from './tag.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-tag], span[av-tag]',
  imports: [AvTagRemoveButtonComponent],
  template: `
    <ng-content />
    @if (showDefaultRemove()) {
      <button av-tag-remove-button type="button"></button>
    }
  `,
  host: {
    '[class]': 'classes()',
    '[attr.role]': 'hostRole()',
    '[attr.tabindex]': 'tabIndex()',
    '[attr.aria-selected]': 'selectionEnabled() ? isSelected() : null',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.aria-label]': 'ariaLabel() || textValue() || null',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-value]': 'value() || null',
    'data-slot': 'tag',
    '(click)': 'onHostClick($event)',
    '(keydown)': 'onKeydown($event)',
    '(blur)': 'onBlur()',
  },
  providers: [AvTagContext],
})
export class AvTagComponent {
  private readonly group = inject(AvTagGroupContext, { optional: true });
  private readonly context = inject(AvTagContext);
  private readonly customRemove = contentChild(AvTagRemoveButtonComponent);

  /** Tag size. Inherits from `av-tag-group` when omitted. */
  readonly size = input<AvTagSize>();

  /** Visual style variant. Inherits from `av-tag-group` when omitted. */
  readonly variant = input<AvTagVariant>();

  /** Unique key when used inside `av-tag-group`. */
  readonly value = input('');

  /** Disables interaction for this tag. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Accessible label when needed beyond visible text. */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /** Text value for assistive technologies. */
  readonly textValue = input<string>(undefined, { alias: 'text-value' });

  protected readonly classes = computed(() =>
    avTagClasses({
      size: this.size() ?? this.group?.size() ?? 'md',
      variant: this.variant() ?? this.group?.variant() ?? 'default',
    }),
  );

  protected readonly selectionEnabled = computed(() => {
    const mode = this.group?.selectionMode() ?? 'none';
    return mode === 'single' || mode === 'multiple';
  });

  protected readonly hostRole = computed(() => {
    if (this.selectionEnabled()) {
      return 'option';
    }
    return this.group ? 'listitem' : null;
  });

  protected readonly allowsRemoving = computed(() => this.group?.allowsRemoving() ?? false);

  protected readonly isInteractive = computed(
    () => this.selectionEnabled() || this.allowsRemoving(),
  );

  protected readonly isDisabled = computed(() => {
    const key = this.value();
    return (
      this.disabled() ||
      (this.group?.disabled() ?? false) ||
      (this.group?.isKeyDisabled(key) ?? false)
    );
  });

  protected readonly isSelected = computed(() => {
    const key = this.value();
    if (this.group && key) {
      return this.group.isSelected(key);
    }
    return false;
  });

  protected readonly showDefaultRemove = computed(
    () => this.allowsRemoving() && !this.customRemove(),
  );

  protected readonly tabIndex = computed(() => {
    if (!this.isInteractive()) {
      return null;
    }
    return this.isDisabled() ? -1 : 0;
  });

  constructor() {
    this.context.registerRemoveCallback(() => this.remove());

    effect(() => {
      const allowsRemoving = this.allowsRemoving();
      const isDisabled = this.isDisabled();

      untracked(() => {
        this.context.allowsRemoving.set(allowsRemoving);
        this.context.isDisabled.set(isDisabled);
      });
    });
  }

  protected onHostClick(event: Event): void {
    if (this.isDisabled() || !this.selectionEnabled()) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (target?.closest('[data-slot="tag-remove-button"]')) {
      return;
    }

    const key = this.value();
    if (this.group && key) {
      this.group.toggleKey(key);
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.isDisabled()) {
      return;
    }

    if (this.selectionEnabled() && (event.key === ' ' || event.key === 'Enter')) {
      event.preventDefault();
      const key = this.value();
      if (this.group && key) {
        this.group.toggleKey(key);
      }
      return;
    }

    if (this.allowsRemoving() && (event.key === 'Delete' || event.key === 'Backspace')) {
      event.preventDefault();
      this.remove();
    }
  }

  protected onBlur(): void {
    this.group?.markTouched();
  }

  /** Removes this tag when the group allows removing. */
  remove(): void {
    const key = this.value();
    if (this.group && key) {
      this.group.removeKey(key);
    }
  }
}
