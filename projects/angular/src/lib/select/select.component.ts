import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  effect,
  forwardRef,
  inject,
  input,
  model,
  signal,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AvSelectContext } from './select.context';
import { avSelectClasses } from './select.utils';
import type { AvSelectSelectionMode, AvSelectVariant } from './select.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-select]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.data-invalid]': 'invalid() ? "true" : null',
    '[attr.aria-invalid]': 'invalid() || null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    'data-slot': 'select',
  },
  providers: [
    AvSelectContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvSelectComponent),
      multi: true,
    },
  ],
})
export class AvSelectComponent implements ControlValueAccessor {
  private readonly context = inject(AvSelectContext);
  private readonly destroyRef = inject(DestroyRef);
  private defaultsApplied = false;
  private onChange: (value: string | string[] | null) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  /** Visual style variant. */
  readonly variant = input<AvSelectVariant>('primary');

  /** Stretches the select and trigger to full width. */
  readonly fullWidth = input(false, { alias: 'full-width', transform: booleanAttribute });

  /** Placeholder shown when nothing is selected. */
  readonly placeholder = input('Select…');

  /** How values can be selected. */
  readonly selectionMode = input<AvSelectSelectionMode>('single', { alias: 'selection-mode' });

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the select as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  /** Controls whether the popover is open. Supports two-way binding with `[(open)]`. */
  readonly open = model(false);

  /** Closes the popover when clicking outside. */
  readonly dismissable = input(true, { transform: booleanAttribute });

  /** Disables closing via the Escape key. */
  readonly keyboardDismissDisabled = input(false, {
    alias: 'keyboard-dismiss-disabled',
    transform: booleanAttribute,
  });

  /** Initial selected keys for uncontrolled usage. */
  readonly defaultSelectedKeys = input<string[]>([], { alias: 'default-selected-keys' });

  /** Selected keys. Supports two-way binding with `[(selectedKeys)]`. */
  readonly selectedKeys = model<string[]>([]);

  protected readonly classes = computed(() =>
    avSelectClasses({
      variant: this.variant(),
      fullWidth: this.fullWidth(),
    }),
  );

  protected readonly isDisabled = computed(
    () => this.disabled() || this.formDisabled() || this.context.disabled(),
  );

  constructor() {
    this.context.registerOpenChange((value) => {
      if (this.open() !== value) {
        this.open.set(value);
      }
    });

    this.context.registerSelectedKeysChange((keys) => {
      this.setSelectedKeys(keys, true);
    });

    this.context.registerTouched(() => this.onTouched());

    effect(() => {
      const open = this.open();

      untracked(() => {
        if (open && !this.context.isOpen()) {
          this.context.open('program');
        } else if (!open && this.context.isOpen()) {
          this.context.close();
        }
      });
    });

    effect(() => {
      const dismissable = this.dismissable();
      const keyboardDismissDisabled = this.keyboardDismissDisabled();
      const disabled = this.isDisabled();
      const invalid = this.invalid();
      const fullWidth = this.fullWidth();
      const placeholder = this.placeholder();
      const selectionMode = this.selectionMode();
      const selectedKeys = this.selectedKeys();

      untracked(() => {
        this.context.dismissable.set(dismissable);
        this.context.keyboardDismissDisabled.set(keyboardDismissDisabled);
        this.context.disabled.set(disabled);
        this.context.invalid.set(invalid);
        this.context.fullWidth.set(fullWidth);
        this.context.placeholder.set(placeholder);
        this.context.selectionMode.set(selectionMode);
        this.context.setSelectedKeys(selectedKeys, { emit: false });
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

    this.destroyRef.onDestroy(() => {
      this.context.dispose();
    });
  }

  writeValue(value: string | string[] | null): void {
    if (this.selectionMode() === 'multiple') {
      this.setSelectedKeys(Array.isArray(value) ? value : value ? [value] : []);
      return;
    }

    if (value == null || value === '') {
      this.setSelectedKeys([]);
      return;
    }

    this.setSelectedKeys(Array.isArray(value) ? value.slice(0, 1) : [value]);
  }

  registerOnChange(fn: (value: string | string[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
    this.context.disabled.set(isDisabled || this.disabled());
  }

  private setSelectedKeys(keys: string[], emitChange = false): void {
    this.selectedKeys.set(keys);
    this.context.setSelectedKeys(keys, { emit: false });

    if (emitChange) {
      this.onChange(this.toFormValue(keys));
    }
  }

  private toFormValue(keys: string[]): string | string[] | null {
    if (this.selectionMode() === 'multiple') {
      return [...keys];
    }

    return keys[0] ?? null;
  }
}
