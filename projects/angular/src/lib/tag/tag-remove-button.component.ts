import { booleanAttribute, Component, computed, inject, input } from '@angular/core';

import { AvTagGroupContext } from '../tag-group/tag-group.context';
import { AvTagContext } from './tag.context';
import { avTagRemoveButtonClasses } from './tag.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-tag-remove-button]',
  template: `
    <ng-content />
    @if (useDefaultIcon()) {
      <svg
        data-slot="tag-remove-button-icon"
        aria-hidden="true"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z"
        />
      </svg>
    }
  `,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[disabled]': 'isDisabled()',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.aria-label]': 'ariaLabel()',
    'data-slot': 'tag-remove-button',
    '(click)': 'onRemove($event)',
  },
})
export class AvTagRemoveButtonComponent {
  private readonly tag = inject(AvTagContext, { optional: true });
  private readonly group = inject(AvTagGroupContext, { optional: true });

  /** Accessible label for the remove action. */
  readonly ariaLabel = input('Remove tag', { alias: 'aria-label' });

  /** Disables the remove button. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Renders the built-in close icon when true. */
  readonly useDefaultIcon = input(true);

  protected readonly classes = computed(() => avTagRemoveButtonClasses());

  protected readonly isDisabled = computed(
    () =>
      this.disabled() ||
      (this.tag?.isDisabled() ?? false) ||
      (this.group?.disabled() ?? false),
  );

  protected onRemove(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.isDisabled()) {
      return;
    }

    this.tag?.requestRemove();
  }
}
