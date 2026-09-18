import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  untracked,
} from '@angular/core';

import type { AvToggleButtonSize } from '../toggle-button/toggle-button.utils';
import { AvToggleButtonGroupContext } from './toggle-button-group.context';
import type { AvToggleButtonGroupSelectionMode } from './toggle-button-group.context';
import { avToggleButtonGroupClasses } from './toggle-button-group.utils';
import type { AvToggleButtonGroupOrientation } from './toggle-button-group.utils';

@Component({
  selector: 'av-toggle-button-group',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'group',
    'data-slot': 'toggle-button-group',
  },
  providers: [AvToggleButtonGroupContext],
})
export class AvToggleButtonGroupComponent {
  private readonly context = inject(AvToggleButtonGroupContext);
  private defaultsApplied = false;

  /** Shared size for child toggle buttons. */
  readonly size = input<AvToggleButtonSize>();

  /** Disables all child toggle buttons. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Expands the group to full width. */
  readonly fullWidth = input(false, { alias: 'full-width', transform: booleanAttribute });

  /** Layout direction of the group. */
  readonly orientation = input<AvToggleButtonGroupOrientation>('horizontal');

  /** Separates buttons with gaps instead of connecting them. */
  readonly detached = input(false, { transform: booleanAttribute });

  /** Whether one or multiple buttons can be selected. */
  readonly selectionMode = input<AvToggleButtonGroupSelectionMode>('single', {
    alias: 'selection-mode',
  });

  /** Prevents clearing all selections in single mode. */
  readonly disallowEmptySelection = input(false, {
    alias: 'disallow-empty-selection',
    transform: booleanAttribute,
  });

  /** Initial selected keys for uncontrolled usage. */
  readonly defaultSelectedKeys = input<string[]>([], { alias: 'default-selected-keys' });

  /** Selected keys. Supports two-way binding with `[(selectedKeys)]`. */
  readonly selectedKeys = model<string[]>([]);

  protected readonly classes = computed(() =>
    avToggleButtonGroupClasses({
      orientation: this.orientation(),
      fullWidth: this.fullWidth(),
      detached: this.detached(),
    }),
  );

  constructor() {
    this.context.registerSelectedKeysUpdater((keys) => this.selectedKeys.set(keys));

    effect(() => {
      const size = this.size();
      const disabled = this.disabled();
      const selectionMode = this.selectionMode();
      const disallowEmptySelection = this.disallowEmptySelection();
      const selectedKeys = this.selectedKeys();

      untracked(() => {
        this.context.size.set(size);
        this.context.disabled.set(disabled);
        this.context.selectionMode.set(selectionMode);
        this.context.disallowEmptySelection.set(disallowEmptySelection);
        this.context.selectedKeys.set(selectedKeys);
      });
    });

    effect(() => {
      const defaults = this.defaultSelectedKeys();

      if (!this.defaultsApplied && defaults.length > 0 && this.selectedKeys().length === 0) {
        untracked(() => {
          this.selectedKeys.set(defaults);
          this.defaultsApplied = true;
        });
      }
    });
  }
}
