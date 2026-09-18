import { Component, computed, inject } from '@angular/core';

import { AvTagGroupContext } from './tag-group.context';
import { avTagGroupListClasses } from './tag-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-tag-group-list]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.role]': 'hostRole()',
    '[attr.aria-multiselectable]': 'isMultiple() ? "true" : null',
    'data-slot': 'tag-group-list',
  },
})
export class AvTagGroupListComponent {
  private readonly group = inject(AvTagGroupContext, { optional: true });

  protected readonly classes = computed(() => avTagGroupListClasses());

  protected readonly hostRole = computed(() => {
    const mode = this.group?.selectionMode() ?? 'none';
    return mode === 'none' ? 'list' : 'listbox';
  });

  protected readonly isMultiple = computed(
    () => this.group?.selectionMode() === 'multiple',
  );
}
