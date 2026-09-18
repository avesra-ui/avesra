import {
  booleanAttribute,
  Component,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import type { AvTagSize, AvTagVariant } from '../tag/tag.utils';
import { AvTagGroupContext } from './tag-group.context';
import type { AvTagGroupSelectionMode } from './tag-group.context';
import { avTagGroupClasses } from './tag-group.utils';

@Component({
  selector: 'av-tag-group',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'group',
    'data-slot': 'tag-group',
  },
  providers: [
    AvTagGroupContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvTagGroupComponent),
      multi: true,
    },
  ],
})
export class AvTagGroupComponent implements ControlValueAccessor {
  private readonly context = inject(AvTagGroupContext);
  private defaultsApplied = false;
  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  /** Shared size for child tags. */
  readonly size = input<AvTagSize>();

  /** Shared visual variant for child tags. */
  readonly variant = input<AvTagVariant>();

  /** Disables all child tags. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Enables remove buttons on child tags. */
  readonly allowsRemoving = input(false, {
    alias: 'allows-removing',
    transform: booleanAttribute,
  });

  /** Whether tags can be selected. */
  readonly selectionMode = input<AvTagGroupSelectionMode>('none', {
    alias: 'selection-mode',
  });

  /** Keys that cannot be selected or removed. */
  readonly disabledKeys = input<string[]>([], { alias: 'disabled-keys' });

  /** Initial selected keys for uncontrolled usage. */
  readonly defaultSelectedKeys = input<string[]>([], { alias: 'default-selected-keys' });

  /** Selected keys. Supports two-way binding with `[(selectedKeys)]`. */
  readonly selectedKeys = model<string[]>([]);

  /** Emitted when one or more tags are removed. */
  readonly remove = output<string[]>();

  protected readonly classes = computed(() => avTagGroupClasses());

  constructor() {
    this.context.registerSelectedKeysUpdater((keys) => this.setSelectedKeys(keys, true));
    this.context.registerRemoveHandler((keys) => this.remove.emit(keys));
    this.context.registerTouchedCallback(() => this.onTouched());

    effect(() => {
      const size = this.size();
      const variant = this.variant();
      const disabled = this.disabled();
      const allowsRemoving = this.allowsRemoving();
      const selectionMode = this.selectionMode();
      const disabledKeys = this.disabledKeys();
      const selectedKeys = this.selectedKeys();

      untracked(() => {
        this.context.size.set(size);
        this.context.variant.set(variant);
        this.context.disabled.set(disabled);
        this.context.allowsRemoving.set(allowsRemoving);
        this.context.selectionMode.set(selectionMode);
        this.context.disabledKeys.set(disabledKeys);
        this.context.selectedKeys.set(selectedKeys);
      });
    });

    effect(() => {
      const defaults = this.defaultSelectedKeys();

      if (!this.defaultsApplied && defaults.length > 0 && this.selectedKeys().length === 0) {
        untracked(() => {
          this.setSelectedKeys(defaults);
          this.defaultsApplied = true;
        });
      }
    });
  }

  writeValue(value: string[] | null): void {
    this.setSelectedKeys(value ?? []);
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.context.disabled.set(isDisabled);
  }

  private setSelectedKeys(keys: string[], emitChange = false): void {
    this.selectedKeys.set(keys);
    this.context.selectedKeys.set(keys);

    if (emitChange) {
      this.onChange(keys);
    }
  }
}
